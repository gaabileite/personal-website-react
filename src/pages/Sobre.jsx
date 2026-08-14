import Layout from '../components/Layout.jsx'

export default function Sobre() {
  return (
    <Layout atual="Sobre">
      <h1>Sobre mim</h1>

      <section>
        <h2>Trajetória acadêmica</h2>
        <p>Estudante de graduação na Universidade Federal de Pernambuco (2026-)</p>
        <p>Bolsista de pesquisa na área de Desenvolvimento de Software no Instituto Tecnológico das Cadeias Biossustentáveis (2026-)</p>
      </section>

      <section>
        <h2>Interesses em tecnologia</h2>
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
        <h2>Habilidades técnicas</h2>
        <ul className="tags">
          {['Python', 'C++', 'HTML/CSS', 'JavaScript', 'React', 'SystemVerilog'].map((s) => (
            <li key={s} className="tag">{s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Idiomas</h2>
        <p>Português; nativo</p>
        <p>Inglês; fluente</p>
        <p>Francês; intermediário</p>
      </section>

    </Layout>
  )
}
