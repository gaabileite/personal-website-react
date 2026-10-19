import useReveal from '../hooks/useReveal.js'

export default function Section({ id, titulo, alt = false, centro = false, children }) {
  const [ref, visivel] = useReveal()
  return (
    <section id={id} className={alt ? 'secao secao-alt' : 'secao'}>
      <div
        ref={ref}
        className={['container', 'reveal', visivel && 'visivel', centro && 'centro'].filter(Boolean).join(' ')}
      >
        <h2 className="secao-titulo">{titulo}</h2>
        {children}
      </div>
    </section>
  )
}
