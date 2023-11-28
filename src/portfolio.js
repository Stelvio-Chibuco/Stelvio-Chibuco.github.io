/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Stélvio Chibuco",
  title: "Olá, seja bem-vindo(a) ao meu DeveloperFólio",
  subTitle: emoji(
    "Um apaixonado desenvolvedor full stack 🚀 com experiência na construção de aplicações web e mobile com JavaScript / Reactjs / Nodejs / React Native e outras bibliotecas e frameworks interessantes."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Stelvio-Chibuco",
  linkedin: "https://www.linkedin.com/in/stélvio-chibuco-301676263",
  gmail: "stelviochibuco799@gmail.com",
  gitlab: "https://gitlab.com/Stelvio-Chibuco",
  facebook: "https://web.facebook.com/stelvio.chibuco/",
  medium: "https://medium.com/@stelviochibuco799",
  stackoverflow: "https://stackoverflow.com/users/22986839/st%c3%a9lvio-chibuco",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Quem sou eu?",
  subTitle: "UM DESENVOLVEDOR FULL STACK COLOSSAL QUE QUER EXPLORAR TODA TECNOLOGIA:",
  skills: [
    emoji(
      "⚡ Desenvolver interfaces de usuário altamente interativas para suas aplicações web e mobile"
    ),
    emoji("⚡ Aplicações Web Progressivas (PWA) em pilhas normais e SPA"),
    emoji(
      "⚡ Integração de serviços de terceiros como Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidade Save",
      logo: require("./assets/images/UniSave_logo.png"),
      subHeader: "Especialização em Engenharia de sistemas",
      duration: "Janeiro de 2022 - Dezembro de 2023",
      desc: "Participou das Jornadas Cientificas II na UJC.",
      descBullets: [
        "Sistema de controle de acesso baseado no reconhecimento facial e emissão de alertas de segurança."]
    },
    {
      schoolName: "Universidade Save",
      logo: require("./assets/images/UniSave_logo.png"),
      subHeader: "Licenciatura em Informática",
      duration: "Março de 2020 - Dezembro de 2023",
      desc: "Classificado entre os 10% melhores do curso. Tendo frequentado disciplinas sobre Engenharia de Software, Segurança na Web, Sistemas Operacionais, IA, ...",

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-end/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Back-end",
      progressPercentage: "60%"
    },
    {
      Stack: "Programação",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Licenciatura em Informática",
      company: "UniSave",
      companylogo: require("./assets/images/UniSave_logo.png"),
      date: "Março de 2020 – Presente",
    },
    {
      role: "Estágio Técnico Profissional",
      company: "UniSave",
      companylogo: require("./assets/images/UniSave_logo.png"),
      date: "Janeiro 2023 – Maio 2023",
    },
    {
      role: "Estágio em Engenharia de Software",
      company: "UniSave",
      companylogo: require("./assets/images/UniSave_logo.png"),
      date: "Julho 2023 – Novembro 2023",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Grandes Projetos",
  subtitle: "ALGUMAS STARTUPS E EMPRESAS QUE AJUDEI A CRIAR SUA TECNOLOGIA",
  projects: [
    {
      image: require("./assets/images/stock.jpeg"),
      projectName: "Stock&venda",
      projectDesc: "Otimize suas operações comerciais hoje mesmo!",
      footerLink: [
        {
          name: "Visite",
          url: "https://github.com/Stelvio-Chibuco/stock-e-venda-php.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/recfacial.png"),
      projectName: "Reconhecimento Facial",
      projectDesc: "Escolha inteligente para um controle de acesso moderno e eficiente.",
      footerLink: [
        {
          name: "Visite",
          url: "https://github.com/Stelvio-Chibuco/Recfacial.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Conquistas e Certificações 🏆 "),
  subtitle:
    "Conquistas, Certificações, Cartas de Prêmios e Algumas Coisas Legais que Eu Fiz!",

  achievementsCards: [
    {
      title: "Introdução a Cibersegurança",
      subtitle:
        "",
      image: require("./assets/images/network basics.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "certificação",
          url: ""
        },
      ]
    },
    {
      title: "Noções básicas de rede",
      subtitle:
        "",
      image: require("./assets/images/cybersecurity.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "certificação",
          url: ""
        }
      ]
    },

    {
      title: "Desenvolvedor de aplicativos da Web PWA",
      subtitle: "",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "certificação", url: ""},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Com amor pelo desenvolvimento de coisas legais, adoro escrever e ensinar aos outros o que aprendi.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://cyber-gorilla.blogspot.com/2023/04/instalacao-do-servidor-ubuntu-2004-step.html",
      title: "Instalação do Servidor Ubuntu 20.04 e Instalação da interface gráfica/GUI",
      description:
        "Você deseja aprender a instalar e configurar o Ubuntu server em menos de 30 minutos?"
    },
    {
      url: "https://cyber-gorilla.blogspot.com/2023/10/linkedin-sign-up-e-personalizacao.html",
      title: "LinkedIn Sign up e Personalizacao",
      description:
        "Vamos explorar os princípios essenciais, teorias relevantes e conceitos-chave que você precisará compreender para ter sucesso neste mini-curso."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "PALESTRAS",
  subtitle: emoji(
    "AMO COMPARTILHAR MEU CONHECIMENTO LIMITADO E RECEBER UM CRACHÁ DE PALESTRANTE 😅"
  ),

  talks: [
    {
      title: "OpenGL no Ubuntu",
      subtitle: "Breve demonstração Teorica e pratica para desenvolvimento OpenGL no sistema Linux (Ubuntu 20.04 LTS).",
      slides_url: "https://cyber-gorilla.blogspot.com/2023/11/slides-opengl.html",
      event_url: "https://www.youtube.com/playlist?list=PL7uu5HDOU0qI4kWWEV1g-vqrGNePa-bmG"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "ADORO FALAR SOBRE MIM E TECNOLOGIA",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Entre em Contacto ☎️"),
  subtitle:
    "Quer discutir um projeto ou apenas cumprimentar?  estou aberto para todos.",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "@StelvioChibuco", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
