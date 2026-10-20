// Projects shown in the "Projects" section. Leave the array empty to show the
// "coming soon" message. Each project has:
//
// {
//   title: { en, pt },
//   description: { en, pt },
//   role: { en, pt },                      // optional
//   tags: ['Python', 'React'],
//   repo: 'https://github.com/...',        // optional
//   demo: 'https://...',                   // optional
//   demoLabel: { en: 'Video', pt: 'Vídeo' } // optional, defaults to "Live demo"
// }

export const projects = [
  {
    title: { en: 'Farmpedia', pt: 'Farmpedia' },
    description: {
      en: 'A Stardew Valley encyclopedia and farm manager, with game catalog lookup and full CRUD over your property.',
      pt: 'Uma enciclopédia de Stardew Valley e gerenciador de fazenda, com consulta ao catálogo do jogo e CRUD completo da sua propriedade.',
    },
    role: {
      en: 'Full-stack developer, ideator, architect',
      pt: 'Desenvolvedora full-stack, idealizadora, arquiteta',
    },
    tags: ['C++', 'SQLite', 'JavaScript', 'HTML/CSS'],
    repo: 'https://github.com/gaabileite/farmpedia',
    demo: 'https://gaabileite.github.io/farmpedia/',
  },
  {
    title: { en: 'Cryptonames', pt: 'Cryptonames' },
    description: {
      en: 'A game inspired by Codenames that combines quick thinking and connections between different fields of knowledge, in both co-op and competitive modes. It runs on a server with multiple simultaneous matches.',
      pt: 'Um jogo, inspirado em Codenames, que combina pensamento rápido e conexão entre diferentes áreas do conhecimento, tanto em co-op como competitivo. Funciona em server, com múltiplas partidas simultâneas.',
    },
    role: {
      en: 'Full-stack developer, ideator, architect and deployer',
      pt: 'Desenvolvedora full-stack, idealizadora, arquiteta e deployer',
    },
    tags: ['C++', 'SQLite', 'JavaScript', 'HTML/CSS'],
    repo: 'https://github.com/gaabileite/cryptonames',
    demo: 'https://playcryptonames.cc/',
  },
  {
    title: { en: 'Safecrack PRO', pt: 'Safecrack PRO' },
    description: {
      en: 'A digital safe for the Altera DE2-115 board. The four-digit password (0–9) is entered one digit at a time with push buttons and checked by a finite state machine (FSM); the result is signaled by the LEDs.',
      pt: 'Cofre digital para a placa Altera DE2-115. A senha de quatro dígitos (0–9) é composta um dígito por vez com push buttons e verificada por uma máquina de estados finitos (FSM); o resultado é sinalizado pelos LEDs.',
    },
    role: {
      en: 'Developer, ideator, architect',
      pt: 'Desenvolvedora, idealizadora, arquiteta',
    },
    tags: ['SystemVerilog'],
    repo: 'https://github.com/gaabileite/safecrack-project',
    demo: 'https://youtu.be/_vgWMApheu0?si=FNMOXqHvSTn_HW01',
    demoLabel: { en: 'Video', pt: 'Vídeo' },
  },
]
