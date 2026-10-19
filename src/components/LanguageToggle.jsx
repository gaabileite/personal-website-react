import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang, t } = useLanguage()
  return (
    <div className={`idioma ${className}`.trim()} role="group" aria-label={t.langLabel}>
      {['en', 'pt'].map((l) => (
        <button
          key={l}
          className={lang === l ? 'idioma-op ativo' : 'idioma-op'}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
