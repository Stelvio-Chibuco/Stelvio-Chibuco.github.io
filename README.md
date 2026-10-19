# Stélvio Chibuco — Portfólio

Portfólio pessoal bilingue (EN/PT), em React 19, Vite, Tailwind CSS 4 e Motion.

- **Editar o conteúdo:** todos os textos, projectos, experiência, certificações e contactos estão em
  [`src/content.ts`](src/content.ts). Não é preciso mexer nos componentes.
- **CV:** os PDFs servidos no site estão em `public/cv/`. As versões editáveis (`.docx`) estão em
  [`cv/`](cv/): edite-as no Word ou LibreOffice e exporte para PDF, ou altere o texto em
  `cv/gerar_cv.py` e corra `python3 cv/gerar_cv.py` seguido de
  `soffice --headless --convert-to pdf --outdir public/cv cv/*.docx`.
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

**Endereço antigo (GitHub Pages):** `stelvio-chibuco.github.io` só redirecciona para o Netlify,
mantendo o caminho do link (ex.: `/cv/...`). A página de redireccionamento está em `github-pages/` e
o workflow `.github/workflows/deploy.yml` publica-a no branch `gh-pages` quando ela muda.
