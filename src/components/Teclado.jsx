import { useLanguage } from '../i18n/LanguageContext.jsx'
import teclaG from '../assets/keys/g.png'
import teclaA from '../assets/keys/a.png'
import teclaB from '../assets/keys/b.png'
import teclaI from '../assets/keys/i.png'

const teclas = [teclaG, teclaA, teclaB, teclaI]

// Quatro teclas formando GABI (imagens estáticas, sem animação).
export default function Teclado({ letras = 'GABI' }) {
  const { t } = useLanguage()
  return (
    <div className="teclado" role="img" aria-label={`${t.hero.keyboardLabel} ${letras}`}>
      {teclas.map((src, i) => (
        <img key={i} className="tecla" src={src} alt="" draggable="false" />
      ))}
    </div>
  )
}
