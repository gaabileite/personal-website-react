import { useState } from 'react'
import Intro from './components/Intro.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Section from './components/Section.jsx'
import Teclado from './components/Teclado.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/layout/Footer.jsx'
import foto from './assets/gabriela.jpg'
import { projects } from './data/projects.js'
import { technologies } from './data/technologies.js'
import { useLanguage } from './i18n/LanguageContext.jsx'

export default function App() {
  const { t, lang } = useLanguage()
  // Quem chega por um link com âncora (ex.: /#contact) pula a abertura.
  const [intro, setIntro] = useState(!window.location.hash)

  return (
    <>
      {intro && <Intro onEntrar={() => setIntro(false)} />}
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="container hero-grade">
            <div className="hero-texto">
              <h1 className="hero-nome">Gabriela Leite</h1>
              <h2 className="hero-sub">{t.hero.subtitle}</h2>
              <p className="hero-desc">{t.hero.description}</p>
              <div className="hero-acoes">
                <a className="botao botao-cheio" href="#about">{t.hero.aboutButton}</a>
                <a className="botao" href="#contact">{t.hero.contactButton}</a>
              </div>
            </div>
            <Teclado letras="GABI" />
          </div>
          <a className="rolar" href="#about">
            {t.hero.scroll}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m5 9 7 7 7-7" /></svg>
          </a>
        </section>

        <Section id="about" titulo={t.about.title} alt>
          <div className="sobre-grade">
            <img className="foto" src={foto} alt={t.about.photoAlt} width="602" height="782" />
            <div className="sobre-texto">
              <p className="sobre-destaque">{t.about.highlight}</p>
              <p>{t.about.intro}</p>
              <p>{t.about.interestsIntro}</p>
              <ul className="lista-seta">
                {t.about.interests.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <p>{t.about.languages}</p>
            </div>
          </div>
          <div className="numeros">
            {t.about.stats.map((n) => (
              <div key={n.label} className="numero">
                <strong>{n.key === 'projects' ? projects.length : n.value}</strong>
                <span>{n.label}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="technologies" titulo={t.technologies.title}>
          <ul className="tech-grade">
            {technologies.map((tec) => (
              <li key={tec.nome} className="tech">
                <img src={tec.img} alt="" width="72" height="72" loading="lazy" />
                <span>{tec.nome}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" titulo={t.experience.title} alt>
          <ol className="linha-tempo">
            {t.experience.items.map((e) => (
              <li key={e.title} className="marco">
                <article className="cartao">
                  <h3>{e.title}</h3>
                  <p className="cartao-local">{e.place}</p>
                  <p className="cartao-periodo">{e.period}</p>
                  <ul className="pilulas">
                    {e.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" titulo={t.projects.title}>
          {projects.length === 0 ? (
            <p className="vazio">{t.projects.empty}</p>
          ) : (
            <div className="projetos-grade">
              {projects.map((p) => (
                <article key={p.title.en} className="cartao projeto">
                  <h3>{p.title[lang]}</h3>
                  <p>{p.description[lang]}</p>
                  {p.role && (
                    <p className="projeto-papel">
                      <span className="dim-forte">{t.projects.role}:</span> {p.role[lang]}
                    </p>
                  )}
                  <ul className="pilulas">
                    {p.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="projeto-links">
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">{t.projects.repo} ↗</a>}
                    {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">{p.demoLabel ? p.demoLabel[lang] : t.projects.demo} ↗</a>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </Section>

        <Section id="contact" titulo={t.contact.title} alt centro>
          <p className="contato-sub">{t.contact.subtitle}</p>
          <Contato />
        </Section>
      </main>

      <Footer />
    </>
  )
}
