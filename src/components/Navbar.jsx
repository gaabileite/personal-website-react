import { useEffect, useState } from 'react'
import LanguageToggle from './LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export const secoes = ['home', 'about', 'technologies', 'experience', 'contact']

export default function Navbar() {
  const { t } = useLanguage()
  const [ativa, setAtiva] = useState('home')
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const obs = new IntersectionObserver(
      (entradas) => entradas.forEach((e) => e.isIntersecting && setAtiva(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    secoes.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      obs.disconnect()
    }
  }, [])

  return (
    <header className={rolou ? 'site-header rolou' : 'site-header'}>
      <div className="container header-inner">
        <LanguageToggle />

        <button
          className="menu-botao"
          aria-label={t.menuLabel}
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          <span /><span />
        </button>

        <nav aria-label={t.mainNavLabel} className={aberto ? 'nav aberto' : 'nav'}>
          <ul className="nav-lista">
            {secoes.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={ativa === id ? 'nav-link ativo' : 'nav-link'}
                  aria-current={ativa === id ? 'true' : undefined}
                  onClick={() => setAberto(false)}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
