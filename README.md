# Matriz Low Ticket

Base reutilizável de landing pages low-ticket.

## Uso
1. Não trabalhar diretamente na `_base`.
2. Duplicar `_base`.
3. Renomear a cópia em `kebab-case`.
4. Abrir a cópia no Codex.
5. Colocar imagens em `public/images`.
6. Preencher `PROJECT_SPEC.md`.
7. Atualizar dados conforme `CONTENT_SCHEMA.md`.
8. Preservar `DESIGN_SYSTEM.md`.
9. Preview e revisão.
10. Executar `pnpm prepare:images` para converter e normalizar imagens.
11. `DEPLOY_CHECKLIST.md`.
12. Trocar `name` em `wrangler.jsonc` pelo nome exclusivo do novo projeto.
13. Executar `pnpm cloudflare:check`; o comando bloqueia projetos incompletos e valida o pacote do Worker sem publicar.
14. Após aprovação explícita: executar `pnpm cloudflare:deploy`.

## Automação da matriz
- A página captura UTMs, `fbclid`, `gclid` e `ttclid` e os encaminha aos checkouts.
- Apenas WebP é publicado; formatos raster comuns são convertidos automaticamente com qualidade configurável.
- O arquivo original é excluído somente depois que o WebP for gerado e validado com sucesso.
- `deployment.config.json` define quais checkouts, pixels, links legais e campos de SEO são obrigatórios.
- `pnpm build` prepara e valida assets.
- `pnpm predeploy` valida assets, conteúdo, links, tracking e SEO antes do build final.
- `pnpm cloudflare:check` executa o predeploy e um empacotamento local (`wrangler deploy --dry-run`), sem publicar.
- `pnpm cloudflare:dev` testa localmente o mesmo formato usado pelo Workers Static Assets.
- `pnpm cloudflare:deploy` é o único comando que publica e só deve ser executado com autorização explícita.
- `wrangler.jsonc` aponta `assets.directory` para `dist/` e configura fallback de SPA.

## Governança
- AGENTS.md: como o Codex trabalha.
- DESIGN_SYSTEM.md: padrões protegidos.
- PROJECT_SPEC.md: variáveis do produto.
- CONTENT_SCHEMA.md: contrato dos dados.
- DEPLOY_CHECKLIST.md: auditoria final.

**Fluxo:** duplicar → renomear o Worker → trocar copy + imagens + cores + links + tracking + SEO → revisar → `pnpm cloudflare:check` → publicar somente com autorização.

## Cloudflare Workers Static Assets
A matriz usa Workers Static Assets sem código de backend. O Vite gera `dist/` e o Wrangler publica somente esses arquivos estáticos. Cada cópia deve receber um `name` exclusivo em `wrangler.jsonc`; reutilizar o nome da matriz sobrescreveria o mesmo Worker.
