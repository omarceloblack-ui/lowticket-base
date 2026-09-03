# DEPLOY_CHECKLIST.md — Auditoria final

## Estrutura
- [ ] Ordem fixa correta
- [ ] Modal funcional
- [ ] Sem CTA depois do FAQ
- [ ] Rodapé presente

## Hero
- [ ] Branca, empilhada e centralizada
- [ ] Uma H1
- [ ] Imagem 3:2 com `contain`, inteira e sem distorção; máximo de 520px somente no desktop
- [ ] CTA e destino corretos
- [ ] Selos de segurança em SVG abaixo do CTA e na mesma largura do botão

## Tipografia/layout
- [ ] Bricolage Grotesque
- [ ] Escalas/pesos corretos
- [ ] Escrita natural
- [ ] Container 1200px
- [ ] Padding 32/32/24px
- [ ] Espaçamentos corretos
- [ ] Sem overflow

## Botões
- [ ] 20px, 700, padding 20×40, radius 10
- [ ] fit-content
- [ ] Hover/active
- [ ] CTA principal com família de cor correta
- [ ] Reduced motion
- [ ] Todos funcionais

## Resultados
- [ ] Apenas provas reais
- [ ] 2:3
- [ ] 5 itens em notebook/desktop e cards com 75% da largura no mobile
- [ ] Velocidade contínua de 75px/s e fade nas laterais
- [ ] Drag mobile, sem pausa no hover/foco e loop estável
- [ ] `prefers-reduced-motion` respeitado

## Módulos
- [ ] Exatamente 3
- [ ] Imagens 1:1
- [ ] “Clique aqui”
- [ ] +/− e teclado
- [ ] Múltiplos podem ficar abertos

## Bônus
- [ ] Exatamente 3
- [ ] Imagens 1:1
- [ ] 🎁 presente
- [ ] `Bônus 01: incluso na oferta completa`
- [ ] Sem travessão
- [ ] Valores autorizados/riscados

## Ofertas/preços
- [ ] Exatamente 2
- [ ] Cards alinhados pelo topo no desktop
- [ ] Completa com “Mais vendido”
- [ ] Simples sem bônus
- [ ] Completa com bônus individualizados
- [ ] Valores dos bônus em vermelho, 700 e riscados na oferta completa/modal
- [ ] Preços/links corretos
- [ ] Preço anterior + “por apenas” na mesma linha → parcelas → PIX
- [ ] CTAs centralizados nos cards
- [ ] Faixa de pagamentos/segurança abaixo dos dois CTAs e na mesma largura do botão

## Modal
- [ ] Abre pela simples
- [ ] Mesma lista da completa
- [ ] Preço independente
- [ ] Checkout correto
- [ ] Continuar com simples funciona
- [ ] Botão/Esc fecham
- [ ] Focus trap/restauração
- [ ] role dialog + aria-modal
- [ ] Scroll de fundo bloqueado

## Garantia/FAQ
- [ ] Garantia confere com spec
- [ ] 5 FAQs
- [ ] Uma FAQ aberta por vez
- [ ] ARIA/teclado
- [ ] Sem CTA depois

## Assets/performance
- [ ] Assets locais em public/images
- [ ] Somente WebP publicado, exceto os três SVGs protegidos da base
- [ ] `pnpm prepare:images` e `pnpm validate:assets` aprovados
- [ ] Nenhuma imagem quebrada/distorcida
- [ ] Todas as imagens publicadas em WebP, com a única exceção SVG protegida do selo de garantia
- [ ] Hero prioritária
- [ ] Lazy-load fora da dobra
- [ ] Layout estável
- [ ] Sem dependências desnecessárias
- [ ] Console sem erros relevantes

## Responsividade
Testar: 320, 375, 390, 768, 1024, 1280, 1440px.
- [ ] Sem overflow/texto cortado/sobreposição
- [ ] Imagens corretas
- [ ] CTAs utilizáveis

## Acessibilidade
- [ ] HTML semântico/headings
- [ ] Alt
- [ ] Foco
- [ ] Teclado
- [ ] Contraste
- [ ] ARIA correto
- [ ] Reduced motion
- [ ] Touch targets

## Integridade
- [ ] Sem depoimento/resultado/urgência/escassez/número/preço/garantia inventados

## Links/tracking/SEO
- [ ] 3 checkouts corretos
- [ ] UTMs, `fbclid`, `gclid` e `ttclid` preservados nos 3 checkouts
- [ ] Links legais
- [ ] Pixel/IDs corretos ou vazios
- [ ] IDs antigos removidos
- [ ] UTMs conforme spec
- [ ] Title/description/canonical/OG/favicon/robots

## Segurança/código
- [ ] Sem secrets
- [ ] .gitignore/.env corretos
- [ ] Sem IDs herdados
- [ ] Imports/código limpos
- [ ] Config centralizada
- [ ] `pnpm build` sem erros

## Git/produção
- [ ] Revisar git diff
- [ ] Branch/repo corretos
- [ ] `name` exclusivo e correto em `wrangler.jsonc`
- [ ] `pnpm cloudflare:check` aprovado sem publicar
- [ ] Commit/push somente após autorização
- [ ] `pnpm cloudflare:deploy` somente após autorização
- [ ] Cloudflare Workers Static Assets atualizado
- [ ] Domínio testado
- [ ] Deploy corresponde ao commit aprovado
- [ ] `pnpm predeploy` aprovado sem contornar requisitos

## Relatório
Informar: problemas, correções, build, arquivos alterados, pendências e status de produção.
