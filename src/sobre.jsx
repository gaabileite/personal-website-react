import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sobre from './pages/Sobre.jsx'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sobre />
  </StrictMode>
)
