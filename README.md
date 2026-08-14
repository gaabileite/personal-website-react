# Site pessoal — Gabriela Leite

Site pessoal e portfólio acadêmico desenvolvido em React + Vite, publicado
como site estático na pasta virtual do CIn/UFPE.

Arquitetura **MPA** (Multi-Page Application): cada página é um arquivo HTML
próprio, com seu próprio ponto de entrada React.

## Como rodar

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # gera a pasta dist/
npm run preview   # serve o build localmente (teste antes de publicar)
```

## Estrutura

```
index.html / sobre.html / portfolio.html   → uma página, um HTML
src/main.jsx / sobre.jsx / portfolio.jsx   → pontos de entrada React
src/pages/                                 → conteúdo de cada página
src/components/                            → Layout, Navbar, Footer, ProjectCard
src/data/projetos.js                       → dados do portfólio
src/styles/global.css                      → estilos
public/img/                                → imagens dos projetos
```

## Publicação

```bash
npm run build
scp -r dist/* SEULOGIN@ssh.cin.ufpe.br:~/public_html/
```

## Créditos

Os tokens de design (paleta, escala tipográfica, espaçamento) em
`src/styles/global.css` foram adaptados do projeto
[personal-site](https://github.com/mldangelo/personal-site) de
Michael D'Angelo, licenciado sob MIT. O template original usa Next.js e
Tailwind CSS; aqui os tokens foram convertidos para CSS puro.
