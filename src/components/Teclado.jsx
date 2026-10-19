// Teclado isométrico em CSS puro (no lugar da cena 3D do site de referência).
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Teclado({ letras = 'GABI' }) {
  const { t } = useLanguage()
  return (
    <div className="teclado" role="img" aria-label={`${t.hero.keyboardLabel} ${letras}`}>
      <div className="teclado-base">
        {[...letras].map((l, i) => (
          <span key={i} className="tecla" style={{ '--i': i }}>
            <span className="tecla-topo">{l}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
