// Ícones do devicon (CDN); o filtro em CSS deixa todos monocromáticos.
const icone = (nome, variante = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${nome}/${nome}-${variante}.svg`

export const technologies = [
  { nome: 'Python', img: icone('python') },
  { nome: 'C++', img: icone('cplusplus') },
  { nome: 'JavaScript', img: icone('javascript') },
  { nome: 'React', img: icone('react') },
  { nome: 'HTML', img: icone('html5') },
  { nome: 'CSS', img: icone('css3') },
  { nome: 'Git', img: icone('git') },
]
