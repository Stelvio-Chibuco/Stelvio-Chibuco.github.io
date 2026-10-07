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
  title: "Olá, sou o Stélvio",
  subTitle: emoji(
    "Licenciado em Informática (Engenharia de Desenvolvimento de Sistemas) pela Universidade Save. Desenvolvo soluções eficientes, seguras e escaláveis, com experiência em programação, engenharia de software, segurança informática, redes de computadores e inteligência artificial."
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
  instagram: "", // Coloca aqui o link do teu Instagram
  whatsapp: "https://wa.me/258827669125",
  twitter: "https://x.com/StelvioChibuco",
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
  subTitle: "DESENVOLVIMENTO DE SISTEMAS, SEGURANÇA INFORMÁTICA E REDES",
  skills: [
    emoji(
      "⚡ Engenharia de software em todo o ciclo: análise de requisitos, arquitectura, testes e segurança"
    ),
    emoji(
      "⚡ Programação em Java, C#, PHP e JavaScript, com orientação a objectos e programação funcional"
    ),
    emoji(
      "⚡ Administração de redes e de sistemas Linux (Debian, Ubuntu, Kali) e Windows"
    ),
    emoji(
      "⚡ Bases de dados relacionais e não relacionais, e visão computacional aplicada (reconhecimento facial)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "fab fa-windows"
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
      logo: new URL("./assets/images/UniSave_logo.png", import.meta.url).href,
      subHeader:
        "Licenciatura em Informática (Engenharia de Desenvolvimento de Sistemas)",
      duration: "Março de 2020 - Outubro de 2024",
      desc: "Engenharia de software, segurança informática, redes de computadores, sistemas operativos, bases de dados e inteligência artificial.",
      descBullets: [
        "Componente de especialização: sistema de controlo de acesso baseado em reconhecimento facial, com emissão de alertas de segurança."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      role: "Estágio Técnico-Profissional",
      company: "Instituto Nacional de Governo Electrónico (INAGE) – Gaza",
      companylogo: new URL("./assets/images/inageLogo.png", import.meta.url)
        .href,
      date: "2025"
    },
    {
      role: "Estágio Técnico-Profissional",
      company: "Conselho Municipal da Cidade de Xai-Xai",
      companylogo: new URL("./assets/images/cmcxxLogo.png", import.meta.url)
        .href,
      date: "Julho 2024 – Maio 2025"
    },
    {
      role: "Estágio de Desenvolvimento de Sistemas (Componente de Especialização)",
      company: "Universidade Save",
      companylogo: new URL("./assets/images/UniSave_logo.png", import.meta.url)
        .href,
      date: "Julho 2023 – Novembro 2023"
    },
    {
      role: "Estágio Técnico-Profissional",
      company: "Universidade Save",
      companylogo: new URL("./assets/images/UniSave_logo.png", import.meta.url)
        .href,
      date: "Fevereiro 2023 – Maio 2023"
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
  title: "Projectos em Destaque",
  subtitle: "PROJECTOS ACADÉMICOS E PESSOAIS QUE DESENVOLVI",
  projects: [
    {
      image: new URL("./assets/images/stock.png", import.meta.url).href,
      projectName: "Stock&venda",
      projectDesc:
        "Sistema web de gestão de stock e vendas para optimizar operações comerciais.",
      footerLink: [
        {
          name: "Ver demonstração",
          url: "https://youtu.be/dv1NwONwx_w"
        }
      ]
    },
    {
      image: new URL("./assets/images/recfacial.png", import.meta.url).href,
      projectName: "Reconhecimento Facial",
      projectDesc:
        "Projecto de especialização na Universidade Save: controlo de acesso por reconhecimento facial, com alertas de segurança.",
      footerLink: [
        {
          name: "Ver demonstração",
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
  title: emoji("Formação e Certificados 🎓"),
  subtitle:
    "Cursos concluídos e certificados obtidos ao longo da minha formação.",

  achievementsCards: [
    {
      title: "Licenciatura em Informática",
      subtitle: "Universidade Save · 2024",
      image: new URL("./assets/images/UniSave_logo.png", import.meta.url).href,
      imageAlt: "Logótipo da Universidade Save",
      footerLink: [
        {
          name: "Ver certificado",
          url: "https://drive.google.com/file/d/1dpVwjR2a9267Vpnbt7T3_SMpQi2SYjSE/view?usp=sharing"
        }
      ]
    },
    {
      title: "Hacker Ético",
      subtitle: "Curso concluído · Cisco Networking Academy · 2025",
      image: new URL("./assets/images/ethical-hacker.png", import.meta.url)
        .href,
      imageAlt: "Emblema do curso Hacker Ético da Cisco",
      footerLink: [
        {
          name: "Ver certificado",
          url: "https://drive.google.com/file/d/1wCrJGkJFwnzAyUn0jzNpctxfU81HPs3k/view?usp=sharing"
        }
      ]
    },
    {
      title: "Gestão de Ameaças Cibernéticas",
      subtitle: "Curso concluído · Cisco Networking Academy · 2025",
      image: new URL(
        "./assets/images/cyber-threat-management.png",
        import.meta.url
      ).href,
      imageAlt: "Emblema do curso Gestão de Ameaças Cibernéticas da Cisco",
      footerLink: [
        {
          name: "Ver certificado",
          url: "https://drive.google.com/file/d/1oWoR28-3udWVHymMgRj7hEwWFb9mmjZL/view?usp=sharing"
        }
      ]
    },
    {
      title: "Fundamentos de Redes",
      subtitle: "Curso concluído · Cisco Networking Academy · 2025",
      image: new URL(
        "./assets/images/networking-essentials.png",
        import.meta.url
      ).href,
      imageAlt: "Emblema do curso Fundamentos de Redes da Cisco",
      footerLink: [
        {
          name: "Ver certificado",
          url: "https://drive.google.com/file/d/1lLHkm6XABprQANadYpjsOiw_idZqJwrT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Fundamentos do Python I",
      subtitle: "Curso concluído · Cisco Networking Academy · 2025",
      image: new URL(
        "./assets/images/python-essentials-1.1.png",
        import.meta.url
      ).href,
      imageAlt: "Emblema do curso Fundamentos do Python I da Cisco",
      footerLink: [
        {
          name: "Ver certificado",
          url: "https://drive.google.com/file/d/15uOxH40vsJJyuaUExyoz5QgEoOnWPcSj/view?usp=sharing"
        }
      ]
    },
    {
      title: "Inglês para Tecnologias de Informação II",
      subtitle: "Curso concluído · Cisco Networking Academy · 2025",
      image: new URL("./assets/images/english-for-it-2.png", import.meta.url)
        .href,
      imageAlt: "Emblema do curso Inglês para TI II da Cisco",
      footerLink: [
        {
          name: "Ver certificado",
          url: "https://drive.google.com/file/d/1_D76UZVnIGT_2da2IdfGQNjqXJgPBygj/view?usp=sharing"
        }
      ]
    },
    {
      title: "Introdução à Cibersegurança",
      subtitle: "Curso concluído · Cisco Networking Academy · 2023",
      image: new URL(
        "./assets/images/introduction-to-cybersecurity.png",
        import.meta.url
      ).href,
      imageAlt: "Emblema do curso Introdução à Cibersegurança da Cisco",
      footerLink: [
        {
          name: "Ver certificado",
          url: "https://drive.google.com/file/d/1GLhs1dlExjpwx7sf-0JgzCrpX2xry5FT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Noções Básicas de Redes",
      subtitle: "Curso concluído · Cisco Networking Academy · 2023",
      image: new URL("./assets/images/networking-basics.png", import.meta.url)
        .href,
      imageAlt: "Emblema do curso Noções Básicas de Redes da Cisco",
      footerLink: [
        {
          name: "Ver certificado",
          url: "https://drive.google.com/file/d/1Sv-Ygst34LewA4AuMGfQbTqHwO1vKXlT/view?usp=sharing"
        }
      ]
    },
    {
      title: "II Jornadas Científicas",
      subtitle: "Participação · Universidade Joaquim Chissano (UJC) · 2023",
      image: new URL("./assets/images/ujc.png", import.meta.url).href,
      imageAlt: "Logótipo da Universidade Joaquim Chissano",
      footerLink: [
        {
          name: "Ver certificado",
          url: "https://drive.google.com/file/d/108DS8U7LKpglYVM1wxtcGvc8llBV-XSc/view?usp=sharing"
        }
      ]
    },
    {
      title: "Informática Básica",
      subtitle:
        "Curso concluído · Centro de Formação e Residência da Paróquia do Chibuto · 2017",
      image: new URL("./assets/images/paroquiChibuto.png", import.meta.url)
        .href,
      imageAlt: "Logótipo do Centro de Formação da Paróquia do Chibuto",
      footerLink: [
        {
          name: "Ver certificado",
          url: "https://drive.google.com/file/d/1uoox3sm5BDrULBVYoJfVhuGkFD15oy2O/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle: "Escrevo sobre tecnologia e partilho o que aprendo.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://nhamahangotec.blogspot.com/",
      title: "DEPOIMENTO E RECOMENDAÇÃO",
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
  subtitle: "PARTILHAR CONHECIMENTO COM A COMUNIDADE",

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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Entre em Contacto ☎️"),
  subtitle: "Quer discutir um projecto ou uma oportunidade? Entre em contacto.",
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
