import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const config = JSON.parse(await fs.readFile(path.join(root, 'deployment.config.json'), 'utf8'))
const linksSource = await fs.readFile(path.join(root, 'src', 'config', 'links.ts'), 'utf8')
const trackingSource = await fs.readFile(path.join(root, 'src', 'config', 'tracking.ts'), 'utf8')
const seoSource = await fs.readFile(path.join(root, 'src', 'config', 'seo.ts'), 'utf8')
const contentSource = await fs.readFile(path.join(root, 'src', 'config', 'content.ts'), 'utf8')
const errors = []
const allowedSvg = new Set(['selo-garantia-7-dias.svg', 'metodos-pagamento-seguranca.svg', 'selos-seguranca-compra.svg'])

const field = (source, name) => source.match(new RegExp(`\\b${name}\\s*:\\s*['\"]([^'\"]*)['\"]`))?.[1]?.trim() || ''
const requireUrl = (source, name, label) => {
  const value = field(source, name)
  if (!value) return errors.push(`${label} não configurado`)
  try {
    const url = new URL(value)
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error()
  } catch {
    errors.push(`${label} não é uma URL HTTP(S) válida`)
  }
}

if (config.requireCheckoutLinks) {
  requireUrl(linksSource, 'checkoutSimple', 'Checkout simples')
  requireUrl(linksSource, 'checkoutComplete', 'Checkout completo')
  requireUrl(linksSource, 'checkoutUpgrade', 'Checkout de upgrade')
}

if (config.requireLegalLinks) {
  requireUrl(linksSource, 'privacy', 'Política de privacidade')
  requireUrl(linksSource, 'terms', 'Termos de uso')
}

const requireId = (enabled, name, label, pattern = /.+/) => {
  if (!enabled) return
  const value = field(trackingSource, name)
  if (!value) errors.push(`${label} obrigatório não configurado`)
  else if (!pattern.test(value)) errors.push(`${label} possui formato inválido`)
}

requireId(config.requireMetaPixel, 'metaPixelId', 'Meta Pixel', /^\d{5,20}$/)
requireId(config.requireGoogleAnalytics, 'googleAnalyticsId', 'Google Analytics', /^G-[A-Z0-9]+$/i)
requireId(config.requireGoogleTagManager, 'googleTagManagerId', 'Google Tag Manager', /^GTM-[A-Z0-9]+$/i)
requireId(config.requireTikTokPixel, 'tiktokPixelId', 'TikTok Pixel')

if (config.requireSeo) {
  for (const [name, label] of [['title', 'SEO title'], ['description', 'SEO description'], ['canonical', 'Canonical'], ['ogTitle', 'OG title'], ['ogDescription', 'OG description'], ['ogImage', 'OG image']]) {
    if (!field(seoSource, name)) errors.push(`${label} não configurado`)
  }
  if (field(seoSource, 'canonical')) requireUrl(seoSource, 'canonical', 'Canonical')
}

if (config.requireNoPlaceholders) {
  const placeholders = [/\[[^\]]+\]/, /Adicione o nome/i, /Título do (módulo|bônus)/i, /Sua pergunta/i, /Escreva aqui/i, /Descreva o objetivo/i, /Coloque aqui/i]
  if (placeholders.some(pattern => pattern.test(contentSource))) errors.push('A copy ainda contém placeholders da matriz')
}

const imageReferences = [...contentSource.matchAll(/\/images\/([^'"\s)]+)/g)].map(match => match[1])
for (const reference of imageReferences) {
  if (!reference.toLowerCase().endsWith('.webp') && !allowedSvg.has(reference)) errors.push(`Referência não WebP/SVG autorizado: /images/${reference}`)
  try {
    await fs.access(path.join(root, 'public', 'images', reference))
  } catch {
    errors.push(`Imagem referenciada não encontrada: /images/${reference}`)
  }
}

if (errors.length) {
  console.error('Pré-deploy bloqueado:\n' + errors.map(error => `- ${error}`).join('\n'))
  process.exit(1)
}

console.log('Projeto aprovado para deploy: conteúdo, links, tracking, SEO e assets validados.')
