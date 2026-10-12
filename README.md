# Stélvio Chibuco — Portfólio

Portfólio pessoal bilingue (EN/PT), em React 19, Vite, Tailwind CSS 4 e Motion.

- **Editar o conteúdo:** todos os textos, projectos, experiência, certificações e contactos estão em
  [`src/content.ts`](src/content.ts). Não é preciso mexer nos componentes.
- **Imagens:** em `public/img/` (WebP optimizado). Para um projecto novo, junte as capturas em
  `public/img/projects/` e acrescente uma entrada em `projects` no `content.ts`.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/
```

## Publicar (grátis)

**Netlify (sem cartão, não depende do GitHub Actions):**
1. Crie conta em https://app.netlify.com com o GitHub.
2. **Add new site → Import an existing project →** escolha este repositório.
3. O `netlify.toml` já tem tudo (comando `npm run build`, pasta `dist`). Carregue em **Deploy**.

**Cloudflare Pages:** em *Workers & Pages → Create → Pages → Connect to Git*, use o comando
`npm run build` e a pasta `dist`.

**GitHub Pages:** o workflow `.github/workflows/deploy.yml` publica no branch `gh-pages` a cada push
para `main` (precisa do GitHub Actions activo na conta).
