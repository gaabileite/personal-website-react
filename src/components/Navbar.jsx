import { useEffect, useState } from 'react'

export const secoes = [
  { id: 'inicio', rotulo: 'Início' },
  { id: 'sobre', rotulo: 'Sobre' },
  { id: 'tecnologias', rotulo: 'Tecnologias' },
  { id: 'experiencia', rotulo: 'Experiência' },
  { id: 'contato', rotulo: 'Contato' },
]

export default function Navbar() {
  const [ativa, setAtiva] = useState('inicio')
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
    secoes.forEach(({ id }) => {
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
        <button
          className="menu-botao"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          <span /><span />
        </button>

        <nav aria-label="Navegação principal" className={aberto ? 'nav aberto' : 'nav'}>
          <ul className="nav-lista">
            {secoes.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={ativa === s.id ? 'nav-link ativo' : 'nav-link'}
                  aria-current={ativa === s.id ? 'true' : undefined}
                  onClick={() => setAberto(false)}
                >
                  {s.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
