import { useEffect, useRef, useState } from 'react'

// Marca o elemento como visível na primeira vez que entra na tela,
// usado para a animação de entrada das seções.
function useReveal() {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisivel(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, visivel]
}

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
