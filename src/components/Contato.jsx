import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const EMAIL = 'glal2@cin.ufpe.br'

export const redes = [
  {
    nome: 'GitHub',
    href: 'https://github.com/gaabileite',
    icone: 'M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z',
  },
  {
    nome: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eu-gabriela-leite',
    icone: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z',
  },
  {
    nome: 'Email',
    href: `mailto:${EMAIL}`,
    icone: 'M1.5 4.5h3.2L12 10.4l7.3-5.9h3.2v15h-3.4V9.4L12 15.3 4.9 9.4v10.1H1.5v-15Z',
  },
]

export default function Contato() {
  const { t } = useLanguage()
  const c = t.contact
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const mudar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Site estático: o envio abre o cliente de e-mail com a mensagem preenchida.
  const enviar = (e) => {
    e.preventDefault()
    const assunto = encodeURIComponent(`${c.emailSubject} ${form.nome}`)
    const corpo = encodeURIComponent(`${form.mensagem}\n\n${form.nome} <${form.email}>`)
    window.location.href = `mailto:${EMAIL}?subject=${assunto}&body=${corpo}`
  }

  return (
    <div className="contato-grade">
      <form className="form" onSubmit={enviar}>
        <input name="nome" placeholder={c.name} aria-label={c.name} required value={form.nome} onChange={mudar} />
        <input name="email" type="email" placeholder={c.email} aria-label={c.email} required value={form.email} onChange={mudar} />
        <textarea name="mensagem" placeholder={c.message} aria-label={c.message} rows="6" required value={form.mensagem} onChange={mudar} />
        <button className="botao botao-cheio" type="submit">{c.send}</button>
      </form>

      <div className="redes">
        <h3>{c.connect}</h3>
        <ul className="redes-icones">
          {redes.map((r) => (
            <li key={r.nome}>
              <a href={r.href} aria-label={r.nome} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" aria-hidden="true"><path d={r.icone} /></svg>
              </a>
            </li>
          ))}
        </ul>
        <hr />
        <p><span className="dim-forte">{c.location}</span> {c.locationValue}</p>
        <p><span className="dim-forte">{c.status}</span> {c.statusValue}</p>
      </div>
    </div>
  )
}
