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
  username: "Stelvio 'cybergorilla' Chibuco",
  title: "Saudações, seja bem-vindo(a) ao meu DeveloperFólio",
  subTitle: emoji(
    "Um apaixonado desenvolvedor full stack 🚀 com experiência na construção de aplicações web e mobile com JavaScript, Reactjs, Nodejs, React Native, Python, Django, Flutter e outras bibliotecas e frameworks interessantes."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SnVDQmICiTiIbJl-MLxtmh2_ikq4e2iK/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Stelvio-Chibuco",
  linkedin: "https://www.linkedin.com/in/stélvio-chibuco-301676263",
  gmail: "stelviochibuco@outlook.com",
  gitlab: "https://gitlab.com/Stelvio-Chibuco",
  facebook: "https://web.facebook.com/stelvio.chibuco/",
  twitter: "https://twitter.com/StelvioChibuco",
  medium: "https://medium.com/@stelviochibuco799",
  stackoverflow:
    "https://stackoverflow.com/users/22986839/st%c3%a9lvio-chibuco",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Quem sou eu?",
  subTitle:
    "UM DESENVOLVEDOR FULL STACK COLOSSAL QUE QUER EXPLORAR TODA TECNOLOGIA:",
  skills: [
    emoji(
      "⚡ Desenvolver interfaces altamente interactivas para suas aplicações web e mobile;"
    ),
    emoji("⚡ Aplicações Web Progressivas (PWA) em pilhas normais e SPA;"),
    emoji(
      "⚡ Integração de serviços de terceiros como Firebase, AWS, Digital Ocean e outros serviços de nuvem."
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
      subHeader: "Especialização em Engenharia de Desenvolvimento de Sistemas",
      duration: "Fevereiro de 2022 - Dezembro de 2023",
      desc: "Participou das Jornadas Cientificas II na UJC.",
      descBullets: [
        "Sistema de controle de acesso baseado no reconhecimento facial e emissão de alertas de segurança."
      ]
    },
    {
      schoolName: "Universidade Save",
      logo: require("./assets/images/UniSave_logo.png"),
      subHeader:
        "Licenciatura em Informática Com Especialização em Engenharia de Desenvolvimento de Sistemas",
      duration: "Março de 2020 - Outubro de 2024",
      desc: "Classificado entre os 20% melhores do curso. Tendo frequentado disciplinas sobre Engenharia de Software, Segurança Cibernética, Sistemas Operacionais, IA, ..."
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
      progressPercentage: "90%"
    },
    {
      Stack: "Programação",
      progressPercentage: "95%"
    },
    {
      Stack: "Linux",
      progressPercentage: "99%"
    },
    {
      Stack: "Microsoft",
      progressPercentage: "98%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Estágio Técnico Profissional",
      company: "UniSave",
      companylogo: require("./assets/images/UniSave_logo.png"),
      date: "Fevereiro 2023 – Maio 2023"
    },
    {
      role: "Estágio de Desenvolvimento de Software",
      company: "UniSave",
      companylogo: require("./assets/images/UniSave_logo.png"),
      date: "Julho 2023 – Novembro 2023"
    },
    {
      role: "Estágio Técnico Profissional",
      company: "CMC De Xai-Xai",
      companylogo: require("./assets/images/cmcxxLogo.png"),
      date: "Julho 2024 – Maio 2025"
    },
    {
      role: "Estágio Técnico Profissional",
      company: "INAGE - Gaza",
      companylogo: require("./assets/images/inageLogo.png"),
      date: "Abril 2025"
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
  title: "Grandes Projectos",
  subtitle: "ALGUMAS STARTUPS FEITAS POR MIM",
  projects: [
    {
      image: require("./assets/images/stock.png"),
      projectName: "Stock&venda",
      projectDesc: "Optimizando operações comerciais!",
      footerLink: [
        {
          name: "Visite",
          url: "https://youtu.be/dv1NwONwx_w"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/recfacial.png"),
      projectName: "Reconhecimento Facial",
      projectDesc:
        "Escolha inteligente para um controle de acesso moderno e eficiente.",
      footerLink: [
        {
          name: "Visite",
          url: "https://youtu.be/u0O1K8IOGkM"
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
      title: "Informática Básica",
      subtitle: "Centro de Formação e Residência da Paróquia do Chibuto",
      image: require("./assets/images/paroquiChibuto.png"),
      imageAlt: "CFRPC Logo",
      footerLink: [
        {
          name: "certificação",
          url: "https://drive.google.com/file/d/1uoox3sm5BDrULBVYoJfVhuGkFD15oy2O/view?usp=sharing"
        }
      ]
    },
    {
      title: "Licenciatura em Informática",
      subtitle: "Universidade Save",
      image: require("./assets/images/UniSave_logo.png"),
      imageAlt: "UniSave Logo",
      footerLink: [
        {
          name: "certificação",
          url: "https://drive.google.com/file/d/1dpVwjR2a9267Vpnbt7T3_SMpQi2SYjSE/view?usp=sharing"
        }
      ]
    },
    {
      title: "II Jornadas Cientificas",
      subtitle: "Universidade Joaquim Chissano (UJC)",
      image: require("./assets/images/ujc.png"),
      imageAlt: "UJC Logo",
      footerLink: [
        {
          name: "certificação",
          url: "https://drive.google.com/file/d/108DS8U7LKpglYVM1wxtcGvc8llBV-XSc/view?usp=sharing"
        }
      ]
    },    
    {
      title: "Inglês para Tecnologias de Informação II",
      subtitle: "CISCO Networking Academy",
      image: require("./assets/images/english-for-it-2.png"),
      imageAlt: "CISCO badge",
      footerLink: [
        {
          name: "certificação",
          url: "https://drive.google.com/file/d/1_D76UZVnIGT_2da2IdfGQNjqXJgPBygj/view?usp=sharing"
        }
      ]
    },    
    {
      title: "Noções básicas de rede",
      subtitle: "CISCO Networking Academy",
      image: require("./assets/images/networking-basics.png"),
      imageAlt: "CISCO badge",
      footerLink: [
        {
          name: "certificação",
          url: "https://drive.google.com/file/d/1Sv-Ygst34LewA4AuMGfQbTqHwO1vKXlT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Fundamentos de Redes",
      subtitle: "CISCO Networking Academy",
      image: require("./assets/images/networking-essentials.png"),
      imageAlt: "CISCO badge",
      footerLink: [
        {
          name: "certificação",
          url: "https://drive.google.com/file/d/1lLHkm6XABprQANadYpjsOiw_idZqJwrT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Introdução a Cibersegurança",
      subtitle: "CISCO Networking Academy",
      image: require("./assets/images/introduction-to-cybersecurity.png"),
      imageAlt: "CISCO badge",
      footerLink: [
        {
          name: "certificação",
          url: "https://drive.google.com/file/d/1GLhs1dlExjpwx7sf-0JgzCrpX2xry5FT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Gestão de ameaças cibernéticas",
      subtitle: "CISCO Networking Academy",
      image: require("./assets/images/cyber-threat-management.png"),
      imageAlt: "CISCO badge",
      footerLink: [
        {
          name: "certificação",
          url: "https://drive.google.com/file/d/1oWoR28-3udWVHymMgRj7hEwWFb9mmjZL/view?usp=sharing"
        }
      ]
    },
    {
      title: "Hacker Ético",
      subtitle: "CISCO Networking Academy",
      image: require("./assets/images/ethical-hacker.png"),
      imageAlt: "CISCO badge",
      footerLink: [
        {
          name: "certificação",
          url: "https://drive.google.com/file/d/1wCrJGkJFwnzAyUn0jzNpctxfU81HPs3k/view?usp=sharing"
        }
      ]
    },
    {
      title: "Fundamentos do Python I",
      subtitle: "CISCO Networking Academy",
      image: require("./assets/images/python-essentials-1.1.png"),
      imageAlt: "CISCO badge",
      footerLink: [
        {
          name: "certificação",
          url: "https://drive.google.com/file/d/15uOxH40vsJJyuaUExyoz5QgEoOnWPcSj/view?usp=sharing"
        }
      ]
    },             
    {
      title: "Desenvolvedor de aplicativos da Web PWA",
      subtitle: "",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [{name: "certificação", url: ""}]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle:
    "Com amor pelo desenvolvimento de coisas legais, adoro escrever e ensinar aos outros o que aprendi.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://nhamahangotec.blogspot.com/",
      title: "DEPIOMENTO E RECOMENDAÇÃO",
      description: "Credibilidade e impacto positivo"
    },
    {
      url: "https://cyber-gorilla.blogspot.com/2023/04/instalacao-do-servidor-ubuntu-2004-step.html",
      title:
        "Instalação do Servidor Ubuntu 20.04 e Instalação da interface gráfica/GUI",
      description:
        "Você deseja aprender a instalar e configurar o Ubuntu server em menos de 30 minutos?"
    },
    {
      url: "https://cyber-gorilla.blogspot.com/2023/10/linkedin-sign-up-e-personalizacao.html",
      title: "LinkedIn Sign up e Personalizacao",
      description:
        "Vamos explorar os princípios essenciais, teorias relevantes e conceitos-chave que você precisará compreender para ter sucesso neste mini-curso."
    },
    {
      url: "https://cyber-gorilla.blogspot.com/2024/03/ciberseguranca-em-mocambique.html",
      title: "Cibersegurança em Moçambique",
      description:
        "A cibersegurança é uma preocupação crescente em todo o mundo, e Moçambique não é exceção. Vamos explorar os principais tipos de ataques cibernéticos que afetam o país e fornecer dicas práticas de como se proteger."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "PALESTRAS",
  subtitle: emoji(
    "AdoroO COMPARTILHAR MEU CONHECIMENTO LIMITADO E RECEBER UM CRACHÁ DE PALESTRANTE 😅"
  ),

  talks: [
    {
      title: "OpenGL no Ubuntu",
      subtitle:
        "Breve demonstração Teórica e prática para desenvolvimento OpenGL no sistema Linux (Ubuntu 20.04 LTS).",
      slides_url:
        "https://cyber-gorilla.blogspot.com/2023/11/slides-opengl.html",
      event_url:
        "https://www.youtube.com/playlist?list=PL7uu5HDOU0qI4kWWEV1g-vqrGNePa-bmG"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast🎙️"),
  subtitle: "Adoro falar sobre mim e tecnologia",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Entre em Contacto ☎️"),
  subtitle:
    "Quer discutir um projecto ou apenas cumprimentar? Estou aberto para todos.",
  number: "+258827669125",
  email_address: "stelviochibuco@outlook.com"
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
