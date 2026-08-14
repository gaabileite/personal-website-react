import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portfolio from './pages/Portfolio.jsx'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
)
