# ASSETS_GUIDE.md — Matriz Low Ticket

## Objetivo
Fonte oficial para preparação, nomeação, proporção e uso das imagens da matriz de Página de Vendas Low Ticket. A troca de imagens entre produtos não deve exigir alteração da estrutura ou dos componentes.

## Regras gerais
- Pasta oficial: `public/images/`
- Único formato publicado e referenciado: WebP
- PNG, JPG, JPEG, AVIF, TIFF, GIF e SVG são aceitos apenas como fontes temporárias para conversão
- Executar `pnpm prepare:images` para converter automaticamente com a qualidade definida em `deployment.config.json`
- Os originais são excluídos somente depois que o WebP for gerado e validado com sucesso
- Nomes minúsculos, sem espaços, sem acentos e em `kebab-case`
- Nunca esticar ou comprimir imagens
- Preservar a proporção definida para cada slot
- Usar `object-fit` adequado
- Os tamanhos abaixo são tamanhos recomendados do arquivo de origem, não necessariamente o tamanho exibido na página
- Sempre otimizar os arquivos antes da publicação
- Definir `alt` quando a imagem transmitir conteúdo

## Tabela oficial

| Uso | Nome padrão | Tamanho recomendado | Proporção | Formato |
|---|---|---:|---:|---|
| Hero | `hero.webp` | 1200 × 800 px | 3:2 | WebP |
| Resultados | `resultado-01.webp` etc. | 900 × 1200 px | 3:4 | WebP |
| Módulos | `modulo-01.webp` etc. | 800 × 800 px | 1:1 | WebP |
| Bônus | `bonus-01.webp` etc. | 800 × 800 px | 1:1 | WebP |
| Garantia | `garantia.webp` | 800 × 800 px | 1:1 | WebP |
| Pop-up | `popup.webp` | 800 × 800 px | 1:1 | WebP |
| Open Graph | `og-image.webp` | 1200 × 630 px | 1.91:1 | WebP |
| Favicon | `favicon.webp` | 512 × 512 px | 1:1 | WebP |

A quantidade de resultados, módulos e bônus varia conforme o `PROJECT_SPEC.md`. Continue a numeração quando houver mais itens.

## Hero
- Arquivo: `hero.webp`
- Origem: 1200 × 800 px
- Proporção: 3:2
- Preservar assunto principal em área segura
- `object-cover` apenas quando o recorte for intencional
- `object-contain` quando toda a arte precisar aparecer
- Reutilizar o mesmo asset no mobile sempre que a composição permitir

## Resultados / prints
- Arquivos: `resultado-01.webp`, `resultado-02.webp` etc.
- Origem: 900 × 1200 px
- Proporção padrão: 3:4
- Manter o conteúdo legível
- Não cortar informações importantes
- Não alterar ou fabricar provas/resultados
- Se a proporção original de um print precisar ser preservada, registrar a exceção no `PROJECT_SPEC.md`

## Módulos / entregáveis
- Arquivos: `modulo-01.webp`, `modulo-02.webp` etc.
- Origem: 800 × 800 px
- Proporção: 1:1
- Cards equivalentes devem usar a mesma proporção
- Não alterar o componente apenas para acomodar imagem preparada em proporção errada

## Bônus
- Arquivos: `bonus-01.webp`, `bonus-02.webp` etc.
- Origem: 800 × 800 px
- Proporção: 1:1
- Manter consistência visual entre bônus
- Seguir a ordem do projeto

## Garantia
- Arquivo: `garantia.webp`
- Origem: 800 × 800 px
- Proporção: 1:1
- Utilizar somente quando houver asset de garantia
- Não inventar selo, prazo ou condição
- Informações essenciais da garantia não devem depender exclusivamente da imagem

## Pop-up / oferta complementar
- Arquivo: `popup.webp`
- Origem: 800 × 800 px
- Proporção: 1:1
- Usar somente quando o projeto tiver imagem no pop-up
- A ausência da imagem não deve quebrar a estrutura quando ela não for utilizada

## Open Graph
- Arquivo: `og-image.webp`
- Tamanho: 1200 × 630 px
- Proporção: 1.91:1
- Manter conteúdo importante em área segura
- Configurar pelo sistema de SEO do projeto

## Favicon
- Arquivo: `favicon.webp`
- Tamanho: 512 × 512 px
- Proporção: 1:1
- Preferir composição simples e reconhecível em tamanhos pequenos

## Estrutura recomendada
```text
public/
└── images/
    ├── hero.webp
    ├── resultado-01.webp
    ├── resultado-02.webp
    ├── resultado-03.webp
    ├── modulo-01.webp
    ├── modulo-02.webp
    ├── modulo-03.webp
    ├── bonus-01.webp
    ├── bonus-02.webp
    ├── bonus-03.webp
    ├── garantia.webp
    ├── popup.webp
    ├── og-image.webp
    └── favicon.webp
```

## Desktop e mobile
Não criar automaticamente duas versões de cada imagem. Por padrão:
- usar um único asset responsivo;
- controlar tamanho de exibição pelo CSS/componente;
- manter a proporção;
- criar versão mobile específica somente quando a composição realmente exigir.

Quando houver duas versões:
```text
hero-desktop.webp
hero-mobile.webp
```
Documentar a exceção no `PROJECT_SPEC.md`.

## Troca de imagens em um novo produto
1. Duplicar a `_base`.
2. Preparar as imagens conforme este guia.
3. Colocar/substituir os arquivos em `public/images/`.
4. Atualizar referências somente quando necessário.
5. Não alterar componentes apenas porque o conteúdo visual mudou.
6. Validar desktop e mobile.
7. Executar o `DEPLOY_CHECKLIST.md`.

## Checklist de assets
- [ ] Hero — 1200 × 800 px — 3:2
- [ ] Resultados — 900 × 1200 px — 3:4, salvo exceção documentada
- [ ] Módulos — 800 × 800 px — 1:1
- [ ] Bônus — 800 × 800 px — 1:1
- [ ] Garantia — 800 × 800 px — 1:1, se utilizada
- [ ] Pop-up — 800 × 800 px — 1:1, se utilizado
- [ ] OG — 1200 × 630 px
- [ ] Favicon fonte — 512 × 512 px
- [ ] Arquivos otimizados
- [ ] Somente arquivos WebP em `public/images/`
- [ ] Peso individual dentro do limite de `deployment.config.json`
- [ ] Nomes padronizados
- [ ] Sem imagens quebradas
- [ ] Sem distorção
- [ ] Alt texts conferidos
- [ ] Desktop validado
- [ ] Mobile validado

## Exceções
Se um produto exigir formato ou proporção diferente:
1. não alterar silenciosamente a matriz;
2. registrar no `PROJECT_SPEC.md`;
3. implementar a exceção somente naquele projeto;
4. preservar o comportamento dos demais projetos.

Este arquivo só deve mudar quando houver uma decisão de alterar o padrão global de assets da matriz Low Ticket.
