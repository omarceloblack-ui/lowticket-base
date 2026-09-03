# DESIGN_SYSTEM.md — Matriz Low Ticket

## 1. Estrutura fixa
1. Barra superior de urgência
2. Hero
3. Resultados
4. O que você recebe
5. Bônus
6. Oferta
7. Modal de upgrade
8. Garantia
9. FAQ
10. Rodapé

O modal é sobreposto, não uma seção permanente. Não existe CTA depois do FAQ. Não mover, remover, duplicar ou inserir seções sem autorização explícita para alterar a matriz.

## 2. Tipografia
Fonte única: **Bricolage Grotesque**. Pesos 400, 500, 600 e 700.

Escrita natural em formato de frase. Não usar uppercase/capitalize automático.

- H1: desktop 42px, tablet 36px, mobile 24px; 700; LH 120%; centralizada.
- Título de seção: 32/28/20px; 600; LH 140%; centralizado.
- Título de card: 20px; 600; LH 140%; esquerda (exceto cabeçalho de oferta).
- Parágrafo principal: 18px; 400/500; LH 150%.
- Texto interno: 16px; 400/500; LH 150%.
- Botão: 20px; 700; LH 120%.

Bold 700 principalmente em H1, botões, preço parcelado, número do preço à vista e identificação dos bônus.

## 3. Tokens
Usar tokens semânticos. Valores de identidade podem variar via `theme.ts`; sua função não muda.

```css
:root {
  --background-white: #fff;
  --background-section: #ebebeb;
  --background-card: #c4c4c4;
  --background-card-light: #ebebeb;
  --background-control: #fff;
  --background-dark: #2d2d2d;
  --background-image-placeholder: #4a4a4a;
  --background-overlay: rgba(0,0,0,.60);
  --placeholder-text: #fff;
  --border-soft: #d1d1d1;
  --border-placeholder: #666;
  --text-title: #000;
  --text-body: rgba(0,0,0,.8);
  --text-on-dark: #fff;
  --brand-primary: #2d2d2d;
  --brand-primary-dark: #1f1f1f;
  --brand-primary-light: #4a4a4a;
  --cta-color: var(--brand-primary);
  --cta-dark: var(--brand-primary-dark);
  --cta-light: var(--brand-primary-light);
}
```

Podem variar por produto: família `brand-*` e `cta-*`. Grid, tipografia, radius, breakpoints e espaçamentos não pertencem ao tema variável.

## 4. Fundos
Barra: escuro. Hero: branco. Resultados: cinza-claro. Módulos: branco. Bônus: cinza-claro. Oferta: branco. Garantia: cinza-claro. FAQ e rodapé: branco.

## 5. Grid e espaçamento
Container máximo 1200px; padding lateral 32px desktop/tablet e 24px mobile.

Escala: 8, 16, 24, 32, 40, 48, 64, 80, 96px.
Seções: 96px desktop, 80px tablet, 64px mobile.
Cards: gap 24px e padding 24px.
Título→subtítulo 16px; subtítulo→CTA 24/32px; preço→CTA 24px.

## 6. Botões
```css
.button {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:fit-content;
  max-width:100%;
  padding:20px 40px;
  border-radius:10px;
  font:700 20px/1.2 "Bricolage Grotesque",Arial,sans-serif;
  text-align:center;
  text-transform:none;
}
```
Não forçar full-width no mobile. CTAs principais usam uma única família de cor. Hover grow discreto (~1.04), active (~.98), sombra leve e degradê pulsante nos CTAs principais. Respeitar reduced-motion. “Clique aqui” não é CTA de compra.

## 7. Cards
Radius 16px, padding 24px, borda suave, sombra leve e conteúdo interno à esquerda, salvo áreas centralizadas das ofertas.

## 8. Imagens
Placeholder: cinza-escuro, texto branco, nome + resolução + proporção.

- Hero: 1200×800, 3:2, até 520px no desktop e até 1040px nos demais breakpoints, `contain`, sem corte.
- Módulos: 1200×1200, 1:1, `cover`.
- Bônus: 1200×1200, 1:1, `cover`.
- Resultados: 1200×1800, 2:3, `cover`.

Imagens reais: preservar proporção, otimizar e publicar somente WebP, com alt descritivo, lazy-load fora da dobra e Hero prioritária. Exceções protegidas: `selo-garantia-7-dias.svg` na garantia, `metodos-pagamento-seguranca.svg` abaixo dos CTAs das ofertas e `selos-seguranca-compra.svg` abaixo do CTA da Hero.

## 9. Barra de urgência
Antes da Hero; fundo escuro, texto branco, centralizado e compacto. Conteúdo variável, mas nunca inventar urgência/escassez.

## 10. Hero
Empilhada e centralizada em todos os breakpoints:
1. imagem
2. H1
3. parágrafo
4. CTA
5. `selos-seguranca-compra.svg` na mesma largura do CTA

Não usar Hero dividida na matriz padrão.

## 11. Resultados
Carrossel contínuo com capacidade padrão de 6 mídias: 5 itens visíveis em notebook/desktop e cards com 75% da largura no mobile. Velocidade padrão de 75px/s, loop sem salto, fade nas laterais, drag mobile e sem pausa no hover/foco. Respeitar `prefers-reduced-motion`. Não inventar provas/resultados.

## 12. Módulos
Exatamente 3 na matriz padrão. 3 colunas desktop, 2 tablet quando couber, 1 mobile. Cada card: imagem 1:1, identificação, título, controle “Clique aqui”, descrição e +/−. Mais de uma sanfona pode ficar aberta.

## 13. Bônus
Exatamente 3. Imagem 1:1, emoji 🎁 fixo, identificação, título, descrição e valor riscado.
Formato: `🎁 Bônus 01: incluso na oferta completa`.
Somente `Bônus 01/02/03` em 700. Dois-pontos, nunca travessão.
Os valores autorizados dos bônus aparecem em 700, vermelho e riscados tanto nos cards quanto na lista da Oferta Completa e do modal.

## 14. Ofertas
Exatamente 2: simples e completa. Mobile: simples primeiro.

Simples: fundo claro, lista à esquerda, sem bônus; CTA abre modal antes do checkout simples.
Completa: maior presença visual, selo `Mais vendido`, lista completa e bônus individualizados.
Os dois cards exibem `metodos-pagamento-seguranca.svg` abaixo do CTA, limitado exatamente à largura do botão.

## 15. Preço
Mesmo componente em simples, completa e modal:
1. preço anterior riscado seguido de “por apenas” na mesma linha
2. parcelado em destaque
3. à vista no PIX

Exemplo:
```text
De R$ 97,00 por apenas
4x de R$ 4,89
ou R$ 19,90 à vista no PIX
```
Valores independentes por oferta. Parcelado usa escala da H1; à vista 18px e apenas o número em 700.

## 16. Modal de upgrade
Abre na Oferta Simples. Overlay, modal centralizado, mensagem, itens completos da Oferta Completa, preço próprio, CTA, opção de continuar com simples e fechar.

A lista vem da mesma fonte da Oferta Completa. Apenas mensagem, preço e CTA contextual são independentes.

Acessível: `role=dialog`, `aria-modal`, foco inicial, focus trap, restaurar foco, Esc e bloqueio do scroll de fundo.

## 17. Garantia
Padrão da matriz: 7 dias, selo vetorial `selo-garantia-7-dias.svg`, título e explicação empilhados, centralizados e visualmente próximos. Não inventar prazo diferente; exceção autorizada deve estar no PROJECT_SPEC.

## 18. FAQ
Exatamente 5 perguntas. Apenas uma aberta por vez; teclado, `aria-expanded`, `aria-controls`, +/− e textos à esquerda. Sem CTA depois.

## 19. Rodapé
Simples e centralizado. Pode conter copyright e links legais fornecidos. Sem nova oferta, banner ou CTA.

## 20. Responsividade
Desktop: Hero 3:2 com 50% da largura anterior e máximo de 520px, módulos/bônus 3 colunas, ofertas lado a lado alinhadas pelo topo, carrossel 5.
Tablet/notebook: padding 32px, seções 80px, módulos/bônus 2 quando couber, carrossel 5.
Mobile: padding 24px, seções 64px, Hero 3:2 com largura disponível, tudo empilhado, cards do carrossel com 75% da largura, botões fit-content e zero overflow.

## 21. Ícones e movimento
Uma linguagem de ícone, preferencialmente outline. Exceção: 🎁.
Permitidos: hover grow, degradê discreto, sanfonas, carrossel, entradas/sombras/transições sutis. Evitar movimentos exagerados.

## 22. Elementos protegidos
Preservar estrutura, ordem, ausência de CTA final, fonte, escala, grid, espaçamento, alinhamentos, 3 módulos, 3 bônus, 2 ofertas, 5 FAQs, proporções, cards, preço, modal, sanfonas, carrossel e responsividade.

**Exceção planejada:** valores das cores de identidade podem variar via tokens sem alterar a arquitetura.
