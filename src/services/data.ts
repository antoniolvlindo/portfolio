const abouts = [
  {
    title: "Minha Trajetória",
    description: "Iniciei minha transição de carreira há um ano, estudando programação e cursando Ciências da Computação. Tenho experiência com projetos usando JavaScript e TypeScript, tanto no front-end quanto no back-end, e estou expandindo meus conhecimentos em C# e .NET. Minha paixão é trabalhar no desenvolvimento back-end, mas também sou versátil no front-end."
  },
  {
    title: "Meu Estilo de Trabalho",
    description: "Sou uma pessoa que valoriza o equilíbrio entre ajudar os outros e manter o foco. Gosto de ambientes descontraídos, onde as pessoas colaboram e compartilham conhecimentos, mas também sabem entregar resultados. Meu objetivo é sempre contribuir para projetos desafiadores e de impacto."
  },
  {
    title: "Um pouco sobre mim",
    description: "Sou carioca, atualmente moro em Volta Redonda com minha noiva e nossos dois cachorros, Bud e Lucky. Gosto de cozinhar, ver filmes e séries e as vezes sair para comer algo diferente. Esses momentos me ajudam a recarregar as energias para que a mente nunca falhe."
  },
]

const projects = [
  {
    title: "Recipes App",
    description: "Projeto desenvolvido para ajudar os usuários a encontrar e gerenciar receitas de comidas e bebidas. O aplicativo permite pesquisar receitas, visualizar detalhes, marcar receitas como favoritas, e acompanhar o progresso de receitas em andamento.",
    github: "https://github.com/antoniolvlindo/project-recipes-app",
    link: "https://project-recipes-app-sage.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Context API",
      "Axios",
      "Bootstrap",
      "CSS Modules",
      "ESLint",
      "Vitest"
    ]
  },
  {
    title: "Trybe Futebol Clube",
    description: "Projeto full-stack que simula a gestão de partidas de um campeonato de futebol.",
    github: "https://github.com/antoniolvlindo/trybe_futebol_clube",
    technologies: [
      "Node.js",
      "ExpressJS",
      "TypeScript",
      "Sequelize",
      "MySQL",
      "JWT",
      "Mocha",
      "Chai",
      "Sinon",
      "React",
      "Docker"
    ]
  }
];

const educations = [
  {
    title: "Desenvolvimento Web Full Stack - Trybe",
    period: "Conclusão em Dezembro de 2024",
    description: "1.500 horas de aula com foco em: Introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais."
  },
  {
    title: "Graduação em Ciência da Computação - Estácio",
    period: "Em andamento",
    description: ""
  },
  {
    title: "Escola Técnica Electra - Técnico em Eletrotécnica",
    period: "Conclusão em Dezembro de 2009",
    description: ""
  }
];

const skills = [
  {
    title: "Linguagens de Programação",
    exemples: "JavaScript, TypeScript, C#, Python",
  },
  {
    title: "Frameworks e Bibliotecas",
    exemples: "NodeJS, React, Express, .NET",
  },
  {
    title: "Ferramentas e Tecnologias",
    exemples: "Docker, Git, GitHub, MySQL",
  },
  {
    title: "Metodologias",
    exemples: "Metodologias Ágeis, Versionamento com Git e GitHub, Arquitetura em camadas",
  },
  {
    title: "Outras",
    exemples: "HTML, CSS Modules, Automated Testing, React Router, Redux, Context API, Hooks, UseEffect, UseState, Jest, Mocha, Chai, Sinon, JWT, Sequelize",
  },
  {
    title: "Habilidades Interpessoais",
    exemples: "Abertura à ideias e possibilidades, Autorregulação, Autogestão e organização do tempo, Tomada de decisão coletiva, Simplificação de processos para redução de tempo",
  },
]

const experiences = [
  {
    company: "Empresa Pública de Saúde do Rio de Janeiro S/A - RioSaúde",
    position: "Assistente Administrativo",
    period: "03/2020 até 01/2024",
    description: "Lotado no Centro Emergencial Regional da Barra da Tijuca - CER Barra - Responsável pela digitação e envio do Boletim de Produção Ambulatorial (BPA), CNES, extração de relatórios e acompanhamento das metas da unidade, acompanhamento de serviços de manutenção estrutural e de TI, inserção de notas fiscais, acompanhamento de contratos, controle de almoxarifado, suporte à gerência e outros setores e resolução de problemas mais complexos que envolvam conhecimento tecnológico."
  },
  {
    company: "Banco do Brasil Tecnologia e Serviços S/A",
    position: "Estágio em Administração",
    period: "06/2019 até 03/2020",
    description: "Recursos humanos com ênfase em treinamento interno - Responsável pelo acompanhamento das horas de treinamento, organização de cursos internos realizados pela própria empresa. Referência no setor para confecção de planilhas mais complexas."
  },
  {
    company: "Certpremium Certificadora Digital Ltda",
    position: "Agente de Registro",
    period: "10/2017 até 07/2018",
    description: "Atendimento a clientes internos e externos na realização de certificados digitais, controles administrativos e financeiros do escritório e prospecção de clientes."
  },
  {
    company: "Site-Tec Engenharia de Serviços Ltda",
    position: "Comprador",
    period: "06/2012 até 01/2017",
    description: "Controle do estoque de materiais, compra de insumos para"
  }
];

export { projects, educations, experiences, abouts, skills };
