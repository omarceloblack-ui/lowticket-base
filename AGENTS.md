# AGENTS.md — Matriz Low Ticket

## Papel
Esta pasta é uma matriz reutilizável para landing pages low-ticket. Duplique `_base` para cada produto. A regra central é: trocar o produto sem reconstruir a página.

## Leitura obrigatória
Antes de alterar código, leia:
1. AGENTS.md
2. DESIGN_SYSTEM.md
3. PROJECT_SPEC.md
4. CONTENT_SCHEMA.md
5. DEPLOY_CHECKLIST.md

## Pode mudar por produto
- copy e nome do produto
- imagens/vídeos
- cores parametrizáveis
- CTAs
- preços/parcelas
- links de checkout
- tracking/pixels
- SEO e dados de campanha

## Deve permanecer
- ordem e estrutura das seções
- componentes, grid e breakpoints
- Bricolage Grotesque e escala tipográfica
- espaçamentos e proporções de mídia
- estrutura dos cards e preços
- carrossel, sanfonas e modal
- acessibilidade e responsividade
- ausência de CTA depois do FAQ

Não crie novo padrão quando existir token/componente equivalente.

## Arquitetura recomendada
```text
src/
├── components/
│   ├── ui/
│   └── sections/
├── config/
│   ├── content.ts
│   ├── theme.ts
│   ├── links.ts
│   ├── tracking.ts
│   └── seo.ts
├── styles/
├── App.tsx
└── main.tsx

public/
└── images/
```

## Conteúdo
Ao receber nova copy:
1. mapear para os campos existentes;
2. atualizar dados/configuração antes de componentes;
3. preservar campos não fornecidos;
4. não resumir sem autorização;
5. não inventar promessas, provas, números, urgência, escassez, depoimentos, resultados, preços ou garantias.

Oferta Completa e modal devem consumir a mesma lista de itens.

## Assets
Usar `public/images`. Somente WebP pode ser referenciado ou publicado, exceto os vetores protegidos `selo-garantia-7-dias.svg`, `metodos-pagamento-seguranca.svg` e `selos-seguranca-compra.svg`. Outros PNG, JPG, JPEG, AVIF, TIFF, GIF e SVG adicionados nessa pasta devem ser convertidos por `pnpm prepare:images`; o original é excluído apenas após o WebP ser gerado e validado com sucesso. Preservar proporções, não distorcer, usar alt, priorizar Hero e aplicar lazy-load fora da primeira dobra quando apropriado. Use placeholders previstos quando faltar asset.

## Configurações
Nunca espalhar URLs ou IDs pelos componentes:
- links → `src/config/links.ts`
- tracking → `src/config/tracking.ts`
- SEO → `src/config/seo.ts`
- cores variáveis → `src/config/theme.ts`
- copy → `src/config/content.ts`

Nunca herdar silenciosamente Pixel, checkout, canonical, domínio ou IDs de outro produto.

## Implementação
- HTML semântico
- preservar framework da base
- TypeScript quando a base usar TypeScript
- evitar dependências e JS desnecessários
- componentes reutilizáveis
- sem código morto/warnings relevantes
- sem secrets no frontend

## Acessibilidade
Foco visível, teclado, contraste, alt, ARIA correto, reduced-motion, modal com foco controlado, sanfonas acessíveis, touch targets adequados e zero overflow horizontal.

## Git/deploy
A `_base` não é produto final e não deve ser publicada como landing page.
Em derivados, não faça commit/push/deploy sem solicitação explícita. Antes de publicar: revisar `DEPLOY_CHECKLIST.md`, revisar diff e executar `pnpm predeploy`. Não contornar falhas do predeploy; ajustar `deployment.config.json` somente quando a exigência realmente não se aplicar ao produto.

## Fluxo
```text
duplicar _base
→ renomear
→ preencher PROJECT_SPEC
→ adicionar assets
→ atualizar config/conteúdo
→ preview
→ revisão
→ build
→ validação local com `pnpm cloudflare:check`
→ GitHub, somente quando solicitado
→ Cloudflare Workers Static Assets, somente quando solicitado
```
