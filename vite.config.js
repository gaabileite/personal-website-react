import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Caminhos relativos no build: faz o site funcionar dentro de
  // https://www.cin.ufpe.br/~SEULOGIN/ sem precisar hardcodar o login.
  base: './',
})
