export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          Gabriela Leite de Andrade Lima — Sistemas de Informação, CIn/UFPE.
        </p>
        <p className="rodape-nota">
          Construído com React e Vite · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
