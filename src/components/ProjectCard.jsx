export default function ProjectCard({
  nome,
  disciplina,
  descricao,
  objetivo,
  imagem,
  tecnologias = [],
  repo,
  prototipo,
  aprendizados,
}) {
  return (
    <article className="card">
      <img className="card-img" src={imagem} alt={`Interface do projeto ${nome}`} />

      <div className="card-corpo">
        <span className="etiqueta">{disciplina}</span>
        <h3 className="card-titulo">{nome}</h3>

        <p>{descricao}</p>

        <p className="card-objetivo">
          <strong>Objetivo:</strong> {objetivo}
        </p>

        {tecnologias.length > 0 && (
          <ul className="tags">
            {tecnologias.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
        )}

        {aprendizados && (
          <p className="card-aprendizados">
            <strong>Aprendizados:</strong> {aprendizados}
          </p>
        )}

        <div className="card-links">
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">Repositório</a>
          )}
          {prototipo && (
            <a href={prototipo} target="_blank" rel="noreferrer">Protótipo</a>
          )}
        </div>
      </div>
    </article>
  )
}
