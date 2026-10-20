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
index.html                       → único HTML
src/main.jsx                     → ponto de entrada React
src/App.jsx                      → seções da página (Home, About, Technologies, Experience, Projects, Contact)
src/components/                  → Intro, Section, Teclado, Contato
src/components/layout/           → Navbar, Footer, LanguageToggle
src/data/                        → projetos, tecnologias e redes sociais
src/i18n/                        → traduções (EN padrão, PT opcional) e seletor de idioma
src/assets/                      → foto e imagens das teclas
src/styles/global.css            → estilos (tema claro)
deploy/                          → Dockerfile, nginx.conf e fly.toml (Fly.io)
```

## Publicação (Fly.io)

```bash
fly deploy --config deploy/fly.toml
```

O site fica em https://gabileite.dev (app `gabileite-dev`).
