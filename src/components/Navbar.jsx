// Links relativos com "./" — essenciais para o site funcionar
// dentro da pasta virtual do CIn (~seulogin/).
const paginas = [
  { href: './index.html', rotulo: 'Início' },
  { href: './sobre.html', rotulo: 'Sobre' },
  { href: './portfolio.html', rotulo: 'Portfólio' },
]

export default function Navbar({ atual }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="marca" href="./index.html">
          Gabriela Leite
        </a>
        <nav aria-label="Navegação principal">
          <ul className="nav-lista">
            {paginas.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className={atual === p.rotulo ? 'nav-link ativo' : 'nav-link'}
                  aria-current={atual === p.rotulo ? 'page' : undefined}
                >
                  {p.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
