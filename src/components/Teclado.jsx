// Teclado isométrico em CSS puro (no lugar da cena 3D do site de referência).
export default function Teclado({ letras = 'GABI' }) {
  return (
    <div className="teclado" role="img" aria-label={`Teclas formando ${letras}`}>
      <div className="teclado-base">
        {[...letras].map((l, i) => (
          <span key={i} className="tecla" style={{ '--i': i }}>
            <span className="tecla-topo">{l}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
