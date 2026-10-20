import { secoes } from './Navbar.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-nome">Gabriela Leite de Andrade Lima</p>
          <p className="footer-sub">{t.footer.subtitle}</p>
        </div>
        <div className="footer-centro">
          <ul>
            {secoes.slice(1).map((id) => (
              <li key={id}><a href={`#${id}`}>{t.nav[id]}</a></li>
            ))}
          </ul>
          <p>© {new Date().getFullYear()} Gabriela Leite. {t.footer.rights}</p>
        </div>
        <a className="topo" href="#home">{t.footer.top}</a>
      </div>
    </footer>
  )
}
