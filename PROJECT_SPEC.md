# PROJECT_SPEC.md — Página de Vendas Low-Ticket

> Informações extraídas da página de referência em 11 de agosto de 2026. Campos não disponíveis permanecem vazios.

## Identificação
- Nome do projeto: Página de Vendas Low-Ticket
- Nome do produto: não informado; placeholder “Adicione o nome do produto aqui”
- Slug: pdv-low-ticket
- Nicho: produtos digitais low-ticket
- Objetivo: página de vendas reutilizável para uma oferta low-ticket
- Domínio/subdomínio: `pdvlowticket.pages.dev` (somente referência de origem; não configurar deploy)

## Stack
- Framework: React + Vite + TypeScript + Tailwind
- Build: `pnpm build`
- Output: `dist/`
- GitHub: `https://github.com/omarceloblack-ui/lowticket-base`
- Cloudflare Workers Static Assets: nome-base `lowticket-base` (trocar por um nome exclusivo em cada cópia antes de publicar)
- Domínio de referência: `basepdv.marceloblack.com` (não configurar automaticamente)

## Identidade variável
- brand-primary: `#2d2d2d`
- brand-primary-dark: `#1f1f1f`
- brand-primary-light: `#4a4a4a`
- cta-color: `#2d2d2d`
- cta-dark: `#1f1f1f`
- cta-light: `#4a4a4a`
- Logo: não informado
- Favicon: não informado

## Barra de urgência
- Ativa: sim
- Texto configurável: “Válido só hoje”
- Data: calculada dinamicamente no navegador, usando a data local do visitante e o formato `pt-BR`
- Informação verdadeira/coerente com campanha: a barra declara validade apenas para a data local exibida

## Hero
- Imagem: placeholder, sem arquivo fornecido
- Alt: Imagem da Hero
- H1: [Diga o que o produto resolve] com o [nome do método ou mecanismo] em apenas [prazo do resultado]
- Parágrafo: Explique como o método funciona, quais benefícios principais ele entrega e para quem ele é indicado, incluindo uma objeção comum que o produto consegue superar.
- CTA: Quero começar agora
- Link/ação: rolagem para a seção de ofertas
- Selo/prova social: `/images/selos-seguranca-compra.svg`, na mesma largura do CTA

## Resultados
- Título: Veja o que estão dizendo sobre o [produto/método]
- Resultado 01 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 01
- Resultado 02 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 02
- Resultado 03 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 03
- Resultado 04 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 04
- Resultado 05 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 05
- Resultado 06 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 06

## Módulos
### Módulo 01
- Imagem: placeholder
- Identificação: Módulo 01
- Título: Título do módulo 01
- Descrição: Descreva o objetivo deste módulo, o que será ensinado e qual benefício prático o comprador receberá.
### Módulo 02
- Imagem: placeholder
- Identificação: Módulo 02
- Título: Título do módulo 02
- Descrição: Descreva o objetivo deste módulo, o que será ensinado e qual benefício prático o comprador receberá.
### Módulo 03
- Imagem: placeholder
- Identificação: Módulo 03
- Título: Título do módulo 03
- Descrição: Descreva o objetivo deste módulo, o que será ensinado e qual benefício prático o comprador receberá.

## Bônus
### Bônus 01
- Imagem: placeholder
- Título: Título do bônus 01
- Descrição: Coloque aqui a descrição sobre esse bônus complementar.
- Valor autorizado: R$ 39,00
### Bônus 02
- Imagem: placeholder
- Título: Título do bônus 02
- Descrição: Coloque aqui a descrição sobre esse bônus complementar.
- Valor autorizado: R$ 29,00
### Bônus 03
- Imagem: placeholder
- Título: Título do bônus 03
- Descrição: Coloque aqui a descrição sobre esse bônus complementar.
- Valor autorizado: R$ 29,00

## Oferta simples
- Itens: Adicione o nome do produto aqui; Acesso vitalício
- Preço anterior: R$ 97,00
- Parcelas: 2
- Valor da parcela: R$ 5,38
- Valor à vista: R$ 9,90
- CTA: Oferta simples
- Checkout: `https://pay.cakto.com.br/9nv5e7h`

## Oferta completa
- Itens: Adicione o nome do produto aqui; Acesso vitalício; Título do bônus 01; Título do bônus 02; Título do bônus 03
- Preço anterior: R$ 194,00
- Parcelas: 4
- Valor da parcela: R$ 5,57
- Valor à vista: R$ 19,90
- CTA: Oferta completa
- Checkout: `https://pay.cakto.com.br/zeooe3g_1057695`

## Modal de upgrade
- Destaque: Espere!
- Mensagem: Já que você quer a Oferta Simples, vou te dar de presente a Oferta Completa com desconto especial, somente desta vez.
- Título: OFERTA ESPECIAL
- Preço anterior: R$ 194,00
- Parcelas: 3
- Valor da parcela: R$ 5,46
- Valor à vista: R$ 14,90
- CTA: OFERTA ESPECIAL
- Checkout upgrade: `https://pay.cakto.com.br/366ux3h`
- Ação secundária: OFERTA SIMPLES

> Itens do modal vêm da mesma fonte da Oferta Completa.

## Garantia
- Prazo autorizado: 7 dias
- Título único: 7 DIAS DE GARANTIA
- Texto: Se dentro do prazo de garantia você concluir que o produto não atende às suas expectativas, basta solicitar o reembolso. Devolveremos 100% do seu dinheiro, sem burocracia.

## FAQ
1. Pergunta: Sua pergunta 01
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
2. Pergunta: Sua pergunta 02
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
3. Pergunta: Sua pergunta 03
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
4. Pergunta: Sua pergunta 04
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
5. Pergunta: Sua pergunta 05
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.

## Rodapé
- Marca/nome: Marcelo Black
- Ano: 2026
- Copyright: © 2026 Marcelo Black
- Privacidade: não informado
- Termos: não informado
- Suporte: não informado

## Assets
Todos em `public/images/`. A página de referência utiliza apenas placeholders; nenhum asset real foi disponibilizado.

| Uso | Arquivo | Proporção | Alt |
|---|---|---|---|
| Hero | | 3:2 | Imagem da Hero |
| Módulo 01 | | 1:1 | Imagem do módulo 01 |
| Módulo 02 | | 1:1 | Imagem do módulo 02 |
| Módulo 03 | | 1:1 | Imagem do módulo 03 |
| Bônus 01 | | 1:1 | Imagem do bônus 01 |
| Bônus 02 | | 1:1 | Imagem do bônus 02 |
| Bônus 03 | | 1:1 | Imagem do bônus 03 |
| Resultado 01 | | 2:3 | Placeholder: Depoimento 01 |

## Tracking
- Meta Pixel ID: não informado
- PageView: não informado
- ViewContent: não informado
- InitiateCheckout: não informado
- Google Analytics: não informado
- GTM: não informado
- TikTok Pixel: não informado
- Preservar UTMs nos checkouts: não determinável sem URLs de checkout

> A matriz captura e encaminha automaticamente UTMs, `fbclid`, `gclid` e `ttclid` para os três checkouts quando as URLs forem configuradas.

> Nenhum ID foi inventado ou herdado.

## SEO
- Title: Página de Vendas Low-Ticket
- Description: não informada
- Canonical: não informado
- OG title: não informado
- OG description: não informada
- OG image: não informada
- Robots: `index,follow`
- Favicon: não informado

## Regras específicas
- A referência fornece copy de template, não dados finais de um produto.
- Manter placeholders textuais até o produto real ser definido.
- A data da urgência deve ser calculada dinamicamente e atualizada na virada do dia.
- Não tratar os placeholders de depoimentos como provas reais.
- O Hero padrão usa proporção horizontal 3:2, `object-fit: contain` e, somente no desktop, 50% da largura anterior com máximo de 520px.
- Somente no desktop, os dois cards de oferta ficam alinhados pelo topo.
- O carrossel padrão exibe 5 itens em notebook/desktop, cards com 75% da largura no mobile, velocidade de 75px/s, fade lateral e não pausa no hover/foco.
- Somente WebP pode ser publicado; outros formatos devem passar por `pnpm prepare:images`.
- O deploy exige aprovação de `pnpm predeploy` conforme `deployment.config.json`.

## Status
- [x] Spec preenchido com dados determináveis
- [x] Copy conferida com a referência
- [ ] Assets
- [ ] Links
- [ ] Tracking
- [ ] SEO completo
- [ ] Preview aprovado pelo usuário
- [ ] Checklist aprovado
- [x] Build aprovado
- [x] GitHub autorizado para publicação da versão 1.0
- [x] Configuração local de Workers Static Assets preparada
- [ ] Deploy autorizado para o projeto derivado
