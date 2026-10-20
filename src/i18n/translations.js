// All visible text lives here. English is the default language; to add a
// string, add the same key to both `en` and `pt`.

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      technologies: 'Technologies',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    intro: { role: 'Information Systems Student', button: 'Enter' },
    langLabel: 'Language',
    menuLabel: 'Open menu',
    mainNavLabel: 'Main navigation',
    hero: {
      subtitle: 'Information Systems Student | Front-end & AI',
      description: 'Building technology with social impact at the UFPE Center of Informatics.',
      aboutButton: 'About me',
      contactButton: 'Get in touch',
      scroll: 'Scroll to explore',
      keyboardLabel: 'Keys spelling',
    },
    technologies: { title: 'Technologies' },
    about: {
      title: 'About Me',
      photoAlt: 'Portrait of Gabriela Leite',
      highlight:
        'I like turning real-world problems into interfaces and systems that work well for people.',
      intro:
        "I'm an undergraduate student at the Federal University of Pernambuco (2026–) and a research fellow in Software Development at the Institute of Technology for Biosustainable Chains (2026–).",
      interestsIntro: 'My academic and technology interests include:',
      interests: [
        'Front-end development',
        'Artificial intelligence and deep learning',
        'Software testing',
        'User experience and web design',
        'Competitive programming',
        'Requirements engineering',
      ],
      languages: 'Languages: Portuguese (native), English (fluent) and French (intermediate).',
      // `key: 'projects'` is filled in with the real project count (see App.jsx).
      stats: [
        { key: 'projects', label: 'Projects' },
        { value: '3', label: 'Languages' },
        { value: '2026', label: 'Journey started' },
        { value: 'Always', label: 'Learning' },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          title: 'Research Fellow in Software Development',
          place: 'Institute of Technology for Biosustainable Chains',
          period: '2026 – present',
          tags: ['Software Development', 'Research'],
        },
        {
          title: "Bachelor's in Information Systems",
          place: 'Federal University of Pernambuco · CIn',
          period: '2026 – present',
          tags: ['Python', 'C++', 'React'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      empty: 'New projects are coming soon.',
      role: 'Role',
      repo: 'Repository',
      demo: 'Live demo',
    },
    contact: {
      title: "Let's Connect",
      subtitle: 'Have a project in mind or want to collaborate? Get in touch!',
      connect: 'Connect With Me',
      location: 'Location:',
      locationValue: 'Recife, Pernambuco, Brazil',
      status: 'Status:',
      statusValue: 'Information Systems student · CIn/UFPE',
    },
    footer: {
      subtitle: 'Information Systems · CIn/UFPE',
      rights: 'All rights reserved.',
      top: '↑ Back to Top',
    },
  },

  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      technologies: 'Tecnologias',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
    },
    intro: { role: 'Estudante de Sistemas de Informação', button: 'Entrar' },
    langLabel: 'Idioma',
    menuLabel: 'Abrir menu',
    mainNavLabel: 'Navegação principal',
    hero: {
      subtitle: 'Estudante de Sistemas de Informação | Front-end & IA',
      description: 'Construindo tecnologia com impacto social no Centro de Informática da UFPE.',
      aboutButton: 'Sobre mim',
      contactButton: 'Entrar em contato',
      scroll: 'Role para explorar',
      keyboardLabel: 'Teclas formando',
    },
    technologies: { title: 'Tecnologias' },
    about: {
      title: 'Sobre mim',
      photoAlt: 'Retrato de Gabriela Leite',
      highlight:
        'Gosto de transformar problemas reais em interfaces e sistemas que funcionem bem para as pessoas.',
      intro:
        'Sou estudante de graduação na Universidade Federal de Pernambuco (2026–) e bolsista de pesquisa na área de Desenvolvimento de Software no Instituto Tecnológico das Cadeias Biossustentáveis (2026–).',
      interestsIntro: 'Meus interesses acadêmicos e em tecnologia incluem:',
      interests: [
        'Desenvolvimento front-end',
        'Inteligência artificial e aprendizagem profunda',
        'Testes de software',
        'Experiência de usuário e design web',
        'Programação competitiva',
        'Engenharia de requisitos',
      ],
      languages: 'Idiomas: português (nativo), inglês (fluente) e francês (intermediário).',
      stats: [
        { key: 'projects', label: 'Projetos' },
        { value: '3', label: 'Idiomas' },
        { value: '2026', label: 'Início da jornada' },
        { value: 'Sempre', label: 'Aprendendo' },
      ],
    },
    experience: {
      title: 'Experiência',
      items: [
        {
          title: 'Bolsista de pesquisa em Desenvolvimento de Software',
          place: 'Instituto Tecnológico das Cadeias Biossustentáveis',
          period: '2026 – atual',
          tags: ['Desenvolvimento de Software', 'Pesquisa'],
        },
        {
          title: 'Graduação em Sistemas de Informação',
          place: 'Universidade Federal de Pernambuco · CIn',
          period: '2026 – atual',
          tags: ['Python', 'C++', 'React'],
        },
      ],
    },
    projects: {
      title: 'Projetos',
      empty: 'Novos projetos em breve.',
      role: 'Papel',
      repo: 'Repositório',
      demo: 'Demonstração',
    },
    contact: {
      title: 'Vamos conversar',
      subtitle: 'Tem um projeto em mente ou quer colaborar? Fale comigo!',
      connect: 'Conecte-se comigo',
      location: 'Local:',
      locationValue: 'Recife, Pernambuco, Brasil',
      status: 'Status:',
      statusValue: 'Estudante de Sistemas de Informação · CIn/UFPE',
    },
    footer: {
      subtitle: 'Sistemas de Informação · CIn/UFPE',
      rights: 'Todos os direitos reservados.',
      top: '↑ Voltar ao topo',
    },
  },
}
