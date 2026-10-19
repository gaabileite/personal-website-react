import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'
import Teclado from './components/Teclado.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

// Ícones do devicon (CDN); o filtro em CSS deixa todos monocromáticos.
const icone = (nome, variante = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${nome}/${nome}-${variante}.svg`

const tecnologias = [
  { nome: 'Python', img: icone('python') },
  { nome: 'C++', img: icone('cplusplus') },
  { nome: 'JavaScript', img: icone('javascript') },
  { nome: 'React', img: icone('react') },
  { nome: 'HTML', img: icone('html5') },
  { nome: 'CSS', img: icone('css3') },
  { nome: 'Git', img: icone('git') },
  { nome: 'SystemVerilog', img: null },
]

const interesses = [
  'Desenvolvimento front-end',
  'Inteligência artificial e aprendizagem profunda',
  'Testes de software',
  'Experiência de usuário e design web',
  'Programação competitiva',
  'Engenharia de requisitos',
]

const numeros = [
  { valor: '6', rotulo: 'Interesses' },
  { valor: '3', rotulo: 'Idiomas' },
  { valor: '2026', rotulo: 'Início da jornada' },
  { valor: 'Sempre', rotulo: 'Aprendendo' },
]

const experiencias = [
  {
    titulo: 'Bolsista de pesquisa em Desenvolvimento de Software',
    local: 'Instituto Tecnológico das Cadeias Biossustentáveis',
    periodo: '2026 – atual',
    tags: ['Desenvolvimento de Software', 'Pesquisa'],
  },
  {
    titulo: 'Graduação em Sistemas de Informação',
    local: 'Universidade Federal de Pernambuco · CIn',
    periodo: '2026 – atual',
    tags: ['Python', 'C++', 'React', 'SystemVerilog'],
  },
]

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-grade">
            <div className="hero-texto">
              <h1 className="hero-nome">Gabriela<br />Leite</h1>
              <h2 className="hero-sub">Estudante de Sistemas de Informação | Front-end &amp; IA</h2>
              <p className="hero-desc">
                Construindo tecnologia com impacto social no Centro de Informática da UFPE.
              </p>
              <div className="hero-acoes">
                <a className="botao botao-cheio" href="#sobre">Sobre mim</a>
                <a className="botao" href="#contato">Entrar em contato</a>
              </div>
            </div>
            <Teclado letras="GABI" />
          </div>
          <a className="rolar" href="#tecnologias">
            Role para explorar
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m5 9 7 7 7-7" /></svg>
          </a>
        </section>

        <Section id="tecnologias" titulo="Tecnologias" alt>
          <ul className="tech-grade">
            {tecnologias.map((t) => (
              <li key={t.nome} className="tech">
                {t.img ? (
                  <img src={t.img} alt="" width="72" height="72" loading="lazy" />
                ) : (
                  <span className="tech-sigla" aria-hidden="true">SV</span>
                )}
                <span>{t.nome}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="sobre" titulo="Sobre mim">
          <div className="sobre-grade">
            <div className="sobre-texto">
              <p className="sobre-destaque">
                Gosto de transformar problemas reais em interfaces e sistemas que funcionem bem para as pessoas.
              </p>
              <p>
                Sou estudante de graduação na Universidade Federal de Pernambuco (2026–) e bolsista de
                pesquisa na área de Desenvolvimento de Software no Instituto Tecnológico das Cadeias
                Biossustentáveis (2026–).
              </p>
              <p>Meus interesses acadêmicos e em tecnologia incluem:</p>
              <ul className="lista-seta">
                {interesses.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <p>
                Idiomas: português (nativo), inglês (fluente) e francês (intermediário).
              </p>
            </div>
            <div className="numeros">
              {numeros.map((n) => (
                <div key={n.rotulo} className="numero">
                  <strong>{n.valor}</strong>
                  <span>{n.rotulo}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experiencia" titulo="Experiência" alt>
          <ol className="linha-tempo">
            {experiencias.map((e) => (
              <li key={e.titulo} className="marco">
                <article className="cartao">
                  <h3>{e.titulo}</h3>
                  <p className="cartao-local">{e.local}</p>
                  <p className="cartao-periodo">{e.periodo}</p>
                  <ul className="pilulas">
                    {e.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contato" titulo="Vamos conversar" centro>
          <p className="contato-sub">Tem um projeto em mente ou quer colaborar? Fale comigo!</p>
          <Contato />
        </Section>
      </main>

      <Footer />
    </>
  )
}
