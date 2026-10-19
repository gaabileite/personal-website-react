import { useEffect, useState } from 'react'
import LanguageToggle from './LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Tela de abertura: o nome em letra manuscrita e um botão que revela o site.
export default function Intro({ onEntrar }) {
  const { t } = useLanguage()
  const [saindo, setSaindo] = useState(false)

  // Trava a rolagem enquanto a abertura está na tela.
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Timer em vez de transitionend: funciona também com animações reduzidas.
  useEffect(() => {
    if (!saindo) return
    const id = setTimeout(onEntrar, 900)
    return () => clearTimeout(id)
  }, [saindo, onEntrar])

  return (
    <div className={saindo ? 'intro saindo' : 'intro'}>
      <LanguageToggle className="idioma-intro" />
      <div className="intro-conteudo">
        <h1 className="intro-nome" aria-label="Gabriela Leite">
          <span aria-hidden="true">Gabriela</span>
          <span aria-hidden="true" className="intro-sobrenome">Leite</span>
        </h1>
        <p className="intro-cargo">{t.intro.role}</p>
        <button className="botao intro-botao" onClick={() => setSaindo(true)}>
          {t.intro.button}
        </button>
      </div>
    </div>
  )
}
