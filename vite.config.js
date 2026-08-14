import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Caminhos relativos no build: faz o site funcionar dentro de
  // https://www.cin.ufpe.br/~SEULOGIN/ sem precisar hardcodar o login.
  base: './',

  build: {
    // MPA: um ponto de entrada por pagina.
    rollupOptions: {
      input: {
        main: new URL('index.html', import.meta.url).pathname,
        sobre: new URL('sobre.html', import.meta.url).pathname,
        portfolio: new URL('portfolio.html', import.meta.url).pathname,
      },
    },
  },
})
