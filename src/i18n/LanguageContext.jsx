import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)

const lerSalvo = () => {
  try {
    const salvo = localStorage.getItem('lang')
    return salvo in translations ? salvo : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(lerSalvo)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* armazenamento indisponível: a escolha vale só para esta visita */
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
