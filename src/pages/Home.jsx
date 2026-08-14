import Layout from '../components/Layout.jsx'

export default function Home() {
  return (
    <Layout atual="Início">
      <section className="hero">
        <p className="rotulo">Sistemas de Informação · CIn/UFPE</p>
        <h1>Gabriela Leite de Andrade Lima</h1>
        <p className="lead">
          Estudante de Sistemas de Informação no Centro de Informática da UFPE,
          interessada em construir tecnologia com impacto social.
        </p>
      </section>

      <section>
        <h2>Interesses Acadêmicos</h2>
        <ul className="lista-simples">
          <li>Desenvolvimento front-end</li>
          <li>Inteligência artificial e aprendizagem profunda</li>
          <li>Testes de software</li>
          <li>Experiência de usuário e design web</li>
          <li>Programação competitiva</li>
          <li>Engenharia de requisitos</li>
        </ul>
      </section>

      <section>
        <h2>Contato</h2>
        <ul className="lista-simples">
          <li>E-mail: <a href="mailto:glal2@cin.ufpe.br">glal2@cin.ufpe.br</a></li>
          <li>
            GitHub:{' '}
            <a href="https://github.com/gaabileite" target="_blank" rel="noreferrer">
              github.com/gaabileite
            </a>
          </li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/eu-gabriela-leite">Gabriela Leite</a></li>
        </ul>
      </section>
    </Layout>
  )
}
