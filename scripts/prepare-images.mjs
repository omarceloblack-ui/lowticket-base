import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const imagesDir = path.join(root, 'public', 'images')
const config = JSON.parse(await fs.readFile(path.join(root, 'deployment.config.json'), 'utf8'))
const validateOnly = process.argv.includes('--validate-only')
const convertible = new Set(['.png', '.jpg', '.jpeg', '.avif', '.tif', '.tiff', '.gif', '.svg'])
const allowedSvg = new Set(['selo-garantia-7-dias.svg', 'metodos-pagamento-seguranca.svg', 'selos-seguranca-compra.svg'])

const kebab = value => value
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await walk(full))
    else if (entry.name !== '.gitkeep') files.push(full)
  }
  return files
}

async function updateReferences(oldRelative, newRelative) {
  const sourceRoot = path.join(root, 'src')
  const files = (await walk(sourceRoot)).filter(file => /\.(ts|tsx|css)$/.test(file))
  const oldUrl = `/images/${oldRelative.split(path.sep).join('/')}`
  const newUrl = `/images/${newRelative.split(path.sep).join('/')}`
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8')
    if (content.includes(oldUrl)) await fs.writeFile(file, content.replaceAll(oldUrl, newUrl))
  }
}

await fs.mkdir(imagesDir, { recursive: true })

if (!validateOnly) {
  for (const file of await walk(imagesDir)) {
    const extension = path.extname(file).toLowerCase()
    const relative = path.relative(imagesDir, file)
    const directory = path.dirname(relative)
    const normalizedBase = kebab(path.basename(file, extension)) || 'imagem'
    const normalizedRelative = path.join(directory, `${normalizedBase}.webp`)
    const destination = path.join(imagesDir, normalizedRelative)

    if (extension === '.svg' && allowedSvg.has(relative.split(path.sep).join('/'))) continue

    if (extension === '.webp') {
      if (relative !== normalizedRelative) {
        await fs.rename(file, destination)
        await updateReferences(relative, normalizedRelative)
        console.log(`Renomeada: ${relative} -> ${normalizedRelative}`)
      }
      continue
    }

    if (!convertible.has(extension)) throw new Error(`Formato de imagem não suportado: ${relative}`)
    try {
      await fs.access(destination)
      throw new Error(`Conversão recusada porque o destino já existe: ${normalizedRelative}`)
    } catch (error) {
      if (error.code !== 'ENOENT') throw error
    }

    const temporary = `${destination}.tmp`
    await sharp(file, { animated: true }).webp({ quality: config.webpQuality, effort: 6 }).toFile(temporary)
    await sharp(temporary).metadata()
    await fs.rename(temporary, destination)
    await updateReferences(relative, normalizedRelative)
    await fs.unlink(file)
    console.log(`Convertida: ${relative} -> ${normalizedRelative}`)
  }
}

const errors = []
for (const file of await walk(imagesDir)) {
  const relative = path.relative(imagesDir, file)
  const extension = path.extname(file).toLowerCase()
  if (extension === '.svg' && allowedSvg.has(relative.split(path.sep).join('/'))) {
    if (path.basename(file) !== `${kebab(path.basename(file, extension))}.svg`) errors.push(`${relative}: nome fora do padrão kebab-case`)
    continue
  }
  if (extension !== '.webp') {
    errors.push(`${relative}: somente WebP é aceito em public/images`)
    continue
  }
  if (path.basename(file) !== `${kebab(path.basename(file, extension))}.webp`) errors.push(`${relative}: nome fora do padrão kebab-case`)
  const stat = await fs.stat(file)
  if (stat.size > config.maxImageSizeKb * 1024) errors.push(`${relative}: excede ${config.maxImageSizeKb} KB`)
  try {
    const metadata = await sharp(file).metadata()
    if (metadata.format !== 'webp' || !metadata.width || !metadata.height) errors.push(`${relative}: WebP inválido`)
  } catch {
    errors.push(`${relative}: arquivo corrompido ou ilegível`)
  }
}

if (errors.length) {
  console.error(errors.map(error => `- ${error}`).join('\n'))
  process.exit(1)
}

console.log('Assets aprovados: WebP otimizado, SVGs protegidos autorizados e nomes em kebab-case.')
