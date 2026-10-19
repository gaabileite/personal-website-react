import { secoes } from './Navbar.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-nome">Gabriela Leite de Andrade Lima</p>
          <p className="footer-sub">Sistemas de Informação · CIn/UFPE</p>
        </div>
        <div className="footer-centro">
          <ul>
            {secoes.slice(1).map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.rotulo}</a></li>
            ))}
          </ul>
          <p>© {new Date().getFullYear()} Gabriela Leite. Todos os direitos reservados.</p>
        </div>
        <a className="topo" href="#inicio">↑ Voltar ao topo</a>
      </div>
    </footer>
  )
}
