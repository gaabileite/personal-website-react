# Site pessoal — Gabriela Leite

Site pessoal e portfólio de Gabriela Leite de Andrade Lima, estudante de
Sistemas de Informação no CIn/UFPE. Feito com React + Vite e publicado como
site estático no Fly.io.

🔗 **https://gabileite.dev**

## Visão geral

- **SPA** (Single-Page Application): um único `index.html` e uma única
  aplicação React, com seções navegáveis por âncoras (`#about`,
  `#technologies`, `#experience`, `#projects`, `#contact`) e rolagem suave.
- **Bilíngue:** inglês por padrão, com seletor EN | PT no topo. A escolha fica
  salva no navegador.
- **Tela de abertura** com o nome em letra manuscrita (pulada quando o link já
  traz uma âncora, como `/#contact`).
- **Seções:** Home, About, Technologies, Experience, Projects e Contact.
- **Visual** em preto e branco (tons de cinza), responsivo e com animações
  desativadas para quem prefere movimento reduzido.
- Sem back-end, banco de dados ou formulário: o contato é feito pelos links
  de e-mail, GitHub e LinkedIn.

## Tecnologias

React 18 · Vite 5 · CSS puro · Nginx (servindo o build) · Fly.io · GitHub Actions

## Como rodar

Requer Node 18 ou mais novo.

```bash
npm install
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # gera a pasta dist/
npm run preview   # serve o build localmente (http://localhost:4173)
```

> Os ícones das tecnologias (devicon) e as fontes (Google Fonts) são
> carregados de CDNs, então a página precisa de internet para exibi-los.

## Estrutura

```
index.html                       → único HTML
src/main.jsx                     → ponto de entrada React
src/App.jsx                      → seções da página
src/components/                  → Intro, Section, Teclado, Contato
src/components/layout/           → Navbar, Footer, LanguageToggle
src/data/                        → projects.js, technologies.js, socials.js
src/i18n/                        → translations.js (EN/PT) e LanguageContext
src/assets/                      → foto (gabriela.jpg) e teclas G, A, B, I (keys/)
src/styles/global.css            → todos os estilos
deploy/                          → Dockerfile, nginx.conf e fly.toml
.github/workflows/fly-deploy.yml → deploy automático
```

## Como editar o conteúdo

| O quê | Onde |
| --- | --- |
| Textos do site (EN e PT) | `src/i18n/translations.js` — cada texto existe nos dois idiomas |
| Projetos | `src/data/projects.js` — título, descrição e papel em EN/PT, tags, `repo`, `demo` e `demoLabel` (opcionais) |
| Tecnologias | `src/data/technologies.js` |
| Links de contato | `src/data/socials.js` |
| Foto | substitua `src/assets/gabriela.jpg` |

O número de projetos no card de estatísticas da seção About é calculado
automaticamente a partir de `projects.js`.

## Publicação (Fly.io)

O app `gabileite-dev` roda na região `gru` (São Paulo). O build é feito num
`Dockerfile` em duas etapas (Node gera o `dist/`, Nginx o serve na porta 8080).

**Automática:** todo push na `main` dispara o workflow **Fly Deploy**
(`.github/workflows/fly-deploy.yml`). Ele precisa do secret `FLY_API_TOKEN`
no repositório:

```bash
fly tokens create deploy -a gabileite-dev
```

Cadastre o valor em *Settings → Secrets and variables → Actions* com o nome
`FLY_API_TOKEN`.

**Manual:**

```bash
fly deploy --config deploy/fly.toml
```

As máquinas são paradas quando ficam sem tráfego e iniciadas na próxima
visita (`auto_stop_machines` / `auto_start_machines`), então o primeiro acesso
após um período ocioso pode demorar um pouco mais.

O domínio `gabileite.dev` está registrado no Cloudflare e aponta para o app
no Fly.io.
