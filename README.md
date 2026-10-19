# Site pessoal — Gabriela Leite

Site pessoal e portfólio acadêmico desenvolvido em React + Vite, publicado
como site estático na pasta virtual do CIn/UFPE.

Arquitetura **SPA** (Single-Page Application): um único `index.html` e uma
única aplicação React, com seções navegáveis por âncoras (`#about`,
`#technologies`, `#experience`, `#projects`, `#contact`) e rolagem suave.

## Como rodar

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # gera a pasta dist/
npm run preview   # serve o build localmente (teste antes de publicar)
```

## Estrutura

```
index.html                → único HTML
src/main.jsx              → ponto de entrada React
src/App.jsx               → seções da página (Home, Technologies, About, Experience, Contact)
src/components/           → Navbar, Section, Teclado, Contato, Footer
src/data/projects.js       → lista de projetos (vazia = mensagem "em breve")
src/i18n/                 → traduções (EN padrão, PT opcional) e seletor de idioma
src/hooks/useReveal.js    → animação de entrada ao rolar
src/styles/global.css     → estilos (tema claro)
```

## Publicação

```bash
npm run build
scp -r dist/* SEULOGIN@ssh.cin.ufpe.br:~/public_html/
```
