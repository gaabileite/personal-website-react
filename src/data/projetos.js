// Separar os dados da apresentacao: a pagina Portfolio apenas percorre
// este array com .map() e entrega cada objeto ao componente ProjectCard.
// Para adicionar um projeto, basta acrescentar um objeto aqui.
//
// TODO: revise os textos e coloque os prints em public/img/.

export const projetos = [
  {
    nome: 'WeGlow — A Ascensão de Virgínia',
    disciplina: 'Introdução à Programação',
    descricao:
      'Jogo de plataforma 2D desenvolvido em Python com Pygame, com sistema de animação, colisões, inimigos e câmera.',
    objetivo:
      'O objetivo do jogo é promover uma gameplay simples, baseada em jogos de plataforma, com sistemas de coletáveis, pulo, página de game over, etc.',
    imagem: 'img/weglow.png',
    tecnologias: ['Python', 'Pygame'],
    repo: 'https://github.com/gaabileite/Platform-Game',
    aprendizados:
      'Máquinas de estado para animação, detecção de colisão, sistema de câmera e renderização de sprites.',
  },
  {
    nome: 'Plataforma Coreto',
    disciplina: 'Concepção de Artefatos Digitais',
    descricao: 
      'Plataforma de conexão entre grandes empresas e startups para a divulgação de editais e propostas.',
    objetivo: 
      'O papel do nosso grupo foi aprimorar a experiência de usuário dentro da plataforma, através de redesigns e testes de usuário.',
    imagem: 'img/cad.png',
    tecnologias: ['Lovable, Canva, Figma'],
    prototipo: '',
    aprendizados: 
      'Trabalho em equipe, gestão de projetos, UX/UI e testes de software.',
  },
  {
    nome: 'SafeCrack Pro',
    disciplina: 'Sistemas Digitais',
    descricao:
      'Cofre digital de quatro dígitos implementado em SystemVerilog e sintetizado em uma placa FPGA DE2-115.',
    objetivo:
      'O objetivo era a implementação do conhecimento de portas lógicas, funcionamento de memória e CPU, máquinas de estados finitos e barramentos de bits.',
    imagem: 'img/safecrack.png',
    tecnologias: ['SystemVerilog', 'Quartus', 'FPGA DE2-115'],
    repo: 'https://github.com/gaabileite/SafeCrack-SystemVerilog',
    aprendizados:
      'Modelagem de máquinas de estado finitas, depuração de erros de síntese e verificação em hardware real.',
  }
]
