import Layout from '../components/Layout.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projetos } from '../data/projetos.js'

export default function Portfolio() {
  return (
    <Layout atual="Portfólio">
      <h1>Portfólio</h1>
      <p className="lead">
        Projetos desenvolvidos ao longo do curso e em atividades extracurriculares.
      </p>
      <div className="grade-projetos">
        {projetos.map((p) => (
          <ProjectCard key={p.nome} {...p} />
        ))}
      </div>
    </Layout>
  )
}
