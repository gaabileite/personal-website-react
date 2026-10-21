import { useLanguage } from '../i18n/LanguageContext.jsx'
import { redes } from '../data/socials.js'

export default function Contato() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <div className="redes">
      <h3>{c.connect}</h3>
      <ul className="redes-icones">
        {redes.map((r) => (
          <li key={r.nome}>
            <a href={r.href} aria-label={r.nome} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" aria-hidden="true"><path d={r.icone} /></svg>
            </a>
          </li>
        ))}
      </ul>
      <a className="botao botao-cheio botao-cv" href={c.resume.file} download>
        {c.resume.label}
      </a>
      <hr />
      <p><span className="dim-forte">{c.location}</span> {c.locationValue}</p>
      <p><span className="dim-forte">{c.status}</span> {c.statusValue}</p>
    </div>
  )
}
