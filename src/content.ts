/**
 * Todo o conteúdo do portfólio, em inglês e português.
 * Para actualizar textos, projectos, contactos ou certificações, edite apenas este ficheiro.
 */

export type Lang = 'en' | 'pt'
type T = { en: string; pt: string }
const t = (en: string, pt: string): T => ({ en, pt })

export const profile = {
  name: 'Stélvio Chibuco',
  alias: 'cybergorilla',
  email: 'stelviochibuco@outlook.com',
  whatsapp: '258847669125', // número com indicativo, sem "+"
  phoneDisplay: '+258 84 766 9125',
  location: t('Xai-Xai, Mozambique · UTC+2', 'Xai-Xai, Moçambique · UTC+2'),
  cv: 'https://drive.google.com/file/d/1SnVDQmICiTiIbJl-MLxtmh2_ikq4e2iK/view?usp=drive_link',
  links: {
    github: 'https://github.com/Stelvio-Chibuco',
    linkedin: 'https://www.linkedin.com/in/st%C3%A9lvio-chibuco-301676263',
    blog: 'https://cyber-gorilla.blogspot.com/',
  },
}

export const ui = {
  nav: { work: t('Work', 'Projectos'), services: t('Services', 'Serviços'), about: t('About', 'Sobre'), contact: t('Contact', 'Contacto'), hire: t('Hire me', 'Contratar') },
  available: t('Available for freelance & remote work', 'Disponível para freelance e trabalho remoto'),
  heroTitle: [t('I build software that', 'Crio software que'), t('runs real businesses.', 'põe negócios a funcionar.')],
  heroText: t(
    'Full-stack engineer — Python, Django, FastAPI, React and Flutter. From online stores with mobile-money payments to ride-hailing platforms and AI access control: designed, built and deployed end-to-end.',
    'Engenheiro full-stack — Python, Django, FastAPI, React e Flutter. De lojas online com pagamentos M-Pesa a plataformas de transporte e controlo de acesso com IA: desenho, desenvolvimento e publicação de ponta a ponta.',
  ),
  seeWork: t('See my work', 'Ver projectos'),
  whatsapp: t('Chat on WhatsApp', 'Falar no WhatsApp'),
  cv: t('Download CV', 'Descarregar CV'),
  stats: [
    { value: '4', label: t('production-grade systems', 'sistemas em produção') },
    { value: '7', label: t('Cisco certifications', 'certificações Cisco') },
    { value: 'Top 20%', label: t('of BSc class, Universidade Save', 'do curso, Universidade Save') },
    { value: '3', label: t('public-sector internships', 'estágios no sector público') },
  ],
  workEyebrow: t('Selected work', 'Projectos seleccionados'),
  workTitle: t('Real problems, shipped solutions', 'Problemas reais, soluções entregues'),
  workText: t(
    'Each project below is a working system — not a tutorial. Here is the problem, what I built and the stack behind it.',
    'Cada projecto abaixo é um sistema funcional — não um tutorial. Veja o problema, o que construí e a tecnologia usada.',
  ),
  problem: t('The problem', 'O problema'),
  built: t('What I built', 'O que construí'),
  servicesEyebrow: t('Services', 'Serviços'),
  servicesTitle: t('How I can help your business', 'Como posso ajudar o seu negócio'),
  processTitle: t('How we work together', 'Como trabalhamos juntos'),
  aboutEyebrow: t('About', 'Sobre mim'),
  aboutTitle: t('Engineer, problem-solver, builder.', 'Engenheiro, solucionador de problemas, construtor.'),
  experience: t('Experience', 'Experiência'),
  education: t('Education', 'Formação'),
  skillsTitle: t('Tech I work with', 'Tecnologias que uso'),
  certsTitle: t('Certifications', 'Certificações'),
  certView: t('View certificate', 'Ver certificado'),
  writingTitle: t('Writing & talks', 'Artigos e palestras'),
  languages: t('Languages', 'Línguas'),
  contactTitle: t("Let's build something that works.", 'Vamos construir algo que funcione.'),
  contactText: t(
    'Tell me about your project — a store, a system, an app or an integration. I usually reply within 24 hours with questions, a plan and a quote.',
    'Conte-me sobre o seu projecto — uma loja, um sistema, uma app ou uma integração. Respondo normalmente em 24 horas com perguntas, um plano e um orçamento.',
  ),
  email: t('Send an email', 'Enviar e-mail'),
  footer: t('Designed and built by Stélvio Chibuco.', 'Desenhado e desenvolvido por Stélvio Chibuco.'),
  waMessage: t("Hi Stélvio! I saw your portfolio and I'd like to talk about a project.", 'Olá Stélvio! Vi o seu portfólio e gostaria de falar sobre um projecto.'),
}

export interface Project {
  id: string
  name: string
  kind: T
  tagline: T
  problem: T
  built: T[]
  stack: string[]
  images: { src: string; alt: T; phone?: boolean; contain?: string }[]
  links: { label: T; url: string }[]
  accent: string
}

export const projects: Project[] = [
  {
    id: 'saveguard',
    name: 'SaveGuard',
    kind: t('SaaS product · AI', 'Produto SaaS · IA'),
    tagline: t('Facial-recognition access control with real-time security alerts', 'Controlo de acesso por reconhecimento facial com alertas de segurança em tempo real'),
    problem: t(
      'Universities and offices rely on physical keys and paper logbooks: keys get lost or copied, nobody knows who entered after hours and break-ins are discovered days later.',
      'Universidades e escritórios dependem de chaves e livros de registo: as chaves perdem-se ou são copiadas, ninguém sabe quem entrou fora de horas e as intrusões só se descobrem dias depois.',
    ),
    built: [
      t('In-browser face recognition (TensorFlow.js) with blink-based liveness detection against photo spoofing', 'Reconhecimento facial no browser (TensorFlow.js) com prova de vida (piscar de olhos) contra fotografias'),
      t('Multi-tenant SaaS: teams and roles, plans with free trial, platform admin panel', 'SaaS multi-cliente: equipas e papéis, planos com teste grátis e painel de administração da plataforma'),
      t('Real electronic locks: Shelly Wi-Fi relays, USB relays and Raspberry Pi via a zero-dependency local agent', 'Fechaduras reais: relés Wi-Fi Shelly, relés USB e Raspberry Pi através de um agente local sem dependências'),
      t('Server-side identity verification before any door opens; e-mail, Telegram and webhook alerts with snapshots', 'Verificação da identidade no servidor antes de abrir; alertas por e-mail, Telegram e webhook com fotografia'),
    ],
    stack: ['FastAPI', 'React 19', 'TypeScript', 'TensorFlow.js', 'PostgreSQL', 'WebSockets', 'Docker'],
    images: [
      { src: '/img/projects/saveguard-kiosk.webp', alt: t('Door kiosk recognising an authorised person and unlocking', 'Quiosque da porta a reconhecer uma pessoa autorizada e a abrir') },
      { src: '/img/projects/saveguard-dashboard.webp', alt: t('Real-time security dashboard', 'Painel de segurança em tempo real') },
      { src: '/img/projects/saveguard-landing.webp', alt: t('SaveGuard sales website', 'Site de vendas do SaveGuard') },
    ],
    links: [{ label: t('Watch demo', 'Ver demonstração'), url: 'https://youtu.be/u0O1K8IOGkM' }],
    accent: '#22d3ee',
  },
  {
    id: 'motice',
    name: 'Motice Congelados & Diversos',
    kind: t('Client project · E-commerce', 'Projecto para cliente · E-commerce'),
    tagline: t('Mobile-first online store for a frozen-food retailer in Gaza', 'Loja online mobile-first para um retalhista de congelados em Gaza'),
    problem: t(
      'A local retailer sold only over the counter and WhatsApp. Customers pay with M-Pesa or e-Mola rather than cards, and deliveries across the province were hard to coordinate.',
      'Um retalhista local vendia apenas ao balcão e por WhatsApp. Os clientes pagam com M-Pesa ou e-Mola em vez de cartão e as entregas na província eram difíceis de coordenar.',
    ),
    built: [
      t('Online store installable as an app (PWA), fast on slow networks, with offline page', 'Loja online instalável como app (PWA), rápida em redes lentas e com página offline'),
      t('Payments: M-Pesa (Vodacom C2B API), e-Mola, mKesh, PayPal/card, bank transfer and cash on delivery — all verified server-side', 'Pagamentos: M-Pesa (API Vodacom C2B), e-Mola, mKesh, PayPal/cartão, transferência e pagamento na entrega — tudo verificado no servidor'),
      t('Delivery zones with fees, customer location on a map and a GPS page for the courier', 'Zonas de entrega com taxas, localização do cliente no mapa e página com GPS para o entregador'),
      t('Phone-friendly management panel: daily sales, orders, stock alerts, one-tap payment confirmation', 'Painel de gestão pensado para o telemóvel: vendas do dia, encomendas, alertas de stock, confirmação de pagamentos com um toque'),
    ],
    stack: ['Django', 'Django REST', 'PostgreSQL', 'Redis', 'Bootstrap 5', 'PWA', 'Docker'],
    images: [
      { src: '/img/projects/motice-home.webp', alt: t('Motice online store homepage', 'Página inicial da loja Motice') },
      { src: '/img/projects/motice-panel.webp', alt: t('Store management panel', 'Painel de gestão da loja') },
      { src: '/img/projects/motice-mobile.webp', alt: t('Store on a phone', 'Loja no telemóvel'), phone: true },
    ],
    links: [],
    accent: '#facc15',
  },
  {
    id: 'boleia',
    name: 'Boleia+ · Chibuto Ride',
    kind: t('Startup · Mobility platform · App in closed beta', 'Startup · Plataforma de mobilidade · App em testes fechados'),
    tagline: t('Safe, traceable ride-hailing for Chibuto and Gaza province', 'Transporte por app seguro e rastreável para Chibuto e a província de Gaza'),
    problem: t(
      'Informal transport in Gaza has no verified drivers, no trip traceability and no emergency mechanism — passengers simply have to trust whoever stops.',
      'O transporte informal em Gaza não tem motoristas verificados, rastreabilidade das viagens nem mecanismo de emergência — os passageiros têm de confiar em quem pára.',
    ),
    built: [
      t('Passenger and driver Flutter app: phone + OTP sign-up, live trip tracking, boarding PIN, trip sharing via WhatsApp', 'App Flutter para passageiro e motorista: registo com telefone + OTP, acompanhamento da viagem em tempo real, PIN de embarque, partilha por WhatsApp'),
      t('SOS button with confirmation, emergency contacts and a response flow for safety agents', 'Botão SOS com confirmação, contactos de emergência e fluxo de resposta para agentes de segurança'),
      t('Driver and vehicle verification, ratings, fares by service area and full audit trail', 'Verificação de motorista e veículo, avaliações, tarifas por área de serviço e auditoria completa'),
      t('Geospatial API (PostGIS) with background jobs, plus an operations dashboard with live maps', 'API geoespacial (PostGIS) com tarefas em segundo plano e um dashboard de operações com mapas em tempo real'),
    ],
    stack: ['Django', 'DRF', 'PostGIS', 'Celery', 'Redis', 'Flutter', 'Next.js', 'Leaflet'],
    images: [
      { src: '/img/projects/boleia-cover.webp', alt: t('Boleia+ brand', 'Marca Boleia+'), contain: '#1b7a45' },
      { src: '/img/projects/boleia-driver.webp', alt: t('Driver app', 'App do motorista'), phone: true },
    ],
    links: [{ label: t('Live operations dashboard', 'Dashboard de operações (online)'), url: 'https://admin.16-16-231-39.sslip.io/login' }],
    accent: '#34d399',
  },
  {
    id: 'stock',
    name: 'Stock & Venda',
    kind: t('Business system', 'Sistema de gestão'),
    tagline: t('Inventory and point-of-sale system for small shops', 'Sistema de stock e vendas para pequenos comércios'),
    problem: t(
      'Small shops tracked stock in notebooks, losing sales to stock-outs and money to errors.',
      'Pequenos comércios controlavam o stock em cadernos, perdendo vendas por rupturas e dinheiro por erros.',
    ),
    built: [
      t('Product catalogue, stock entries and sales with automatic stock updates', 'Catálogo de produtos, entradas de stock e vendas com actualização automática do stock'),
      t('User accounts with authentication and sales reports', 'Contas de utilizador com autenticação e relatórios de vendas'),
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    images: [{ src: '/img/projects/stock-login.webp', alt: t('Stock & Venda login', 'Entrada do Stock & Venda') }],
    links: [{ label: t('Watch demo', 'Ver demonstração'), url: 'https://youtu.be/dv1NwONwx_w' }],
    accent: '#60a5fa',
  },
]

export const services = [
  {
    icon: 'store',
    title: t('E-commerce with local payments', 'E-commerce com pagamentos locais'),
    text: t('Online stores that sell on phones and slow networks, with M-Pesa, e-Mola, PayPal or cash on delivery, delivery zones and a simple admin panel.', 'Lojas online que vendem no telemóvel e em redes lentas, com M-Pesa, e-Mola, PayPal ou pagamento na entrega, zonas de entrega e um painel simples.'),
  },
  {
    icon: 'layout',
    title: t('Business web apps & dashboards', 'Sistemas web e dashboards'),
    text: t('Inventory, sales, bookings, internal tools and reporting — replacing spreadsheets and paper with a system your team actually uses.', 'Stock, vendas, reservas, ferramentas internas e relatórios — substituir folhas de Excel e papel por um sistema que a equipa usa mesmo.'),
  },
  {
    icon: 'plug',
    title: t('APIs, integrations & deployment', 'APIs, integrações e publicação'),
    text: t('REST APIs in Django or FastAPI, payment and messaging integrations, Docker deployments, and fixing or extending existing Python/JS code.', 'APIs REST em Django ou FastAPI, integração de pagamentos e mensagens, deploy com Docker, e correcção ou evolução de código Python/JS existente.'),
  },
  {
    icon: 'scan',
    title: t('Computer vision & automation', 'Visão computacional e automação'),
    text: t('Face recognition, access control and automations that connect cameras, locks and alerts to your business.', 'Reconhecimento facial, controlo de acesso e automações que ligam câmaras, fechaduras e alertas ao seu negócio.'),
  },
]

export const process = [
  { title: t('Discovery call', 'Conversa inicial'), text: t('We clarify goals, users and budget. Free.', 'Clarificamos objectivos, utilizadores e orçamento. Grátis.') },
  { title: t('Proposal', 'Proposta'), text: t('Fixed scope, timeline and price — in writing.', 'Âmbito, prazo e preço fixos — por escrito.') },
  { title: t('Weekly demos', 'Demos semanais'), text: t('You see real progress every week and give feedback.', 'Vê progresso real todas as semanas e dá feedback.') },
  { title: t('Launch & support', 'Lançamento e suporte'), text: t('Deployment, handover, training and 15 days of free fixes.', 'Publicação, entrega, formação e 15 dias de correcções grátis.') },
]

export const about = t(
  'I am a systems development engineer from Gaza, Mozambique, with a BSc in Informatics from Universidade Save (top 20% of my class). I design and build complete systems — backend, frontend, mobile and deployment — with a strong focus on security, which I studied through Cisco’s cybersecurity and ethical-hacking tracks. I like products that solve local problems with global-quality engineering.',
  'Sou engenheiro de desenvolvimento de sistemas, de Gaza, Moçambique, licenciado em Informática pela Universidade Save (entre os 20% melhores do curso). Desenho e desenvolvo sistemas completos — backend, frontend, mobile e publicação — com forte atenção à segurança, que estudei nas formações de cibersegurança e hacking ético da Cisco. Gosto de produtos que resolvem problemas locais com engenharia de qualidade internacional.',
)

export const experience = [
  { role: t('Freelance Full-Stack Engineer', 'Engenheiro Full-Stack Freelancer'), org: 'Independent', period: t('2023 — present', '2023 — presente'), text: t('E-commerce, mobility and access-control systems for clients and own products (Motice, Boleia+, SaveGuard).', 'Sistemas de e-commerce, mobilidade e controlo de acesso para clientes e produtos próprios (Motice, Boleia+, SaveGuard).'), logo: '' },
  { role: t('Technical-Professional Intern', 'Estagiário Técnico-Profissional'), org: 'INAGE — Instituto Nacional de Governo Electrónico (Gaza)', period: t('2025', '2025'), text: t('Substitute trainer for the Basic Computing course and IT technical support.', 'Formador substituto do curso de Informática Básica e suporte técnico informático.'), logo: '/img/logos/inage.webp' },
  { role: t('Technical-Professional Intern', 'Estagiário Técnico-Profissional'), org: 'Conselho Municipal da Cidade de Xai-Xai', period: t('2024 — 2025', '2024 — 2025'), text: t('IT technical support for municipal services: hardware, software, networks and users.', 'Suporte técnico informático aos serviços municipais: equipamento, software, redes e utilizadores.'), logo: '/img/logos/cmcxx.webp' },
  { role: t('Technical-Professional Intern — Systems Development', 'Estagiário Técnico-Profissional — Desenvolvimento de Sistemas'), org: 'Universidade Save', period: t('2023', '2023'), text: t('Installed and configured the university e-mail server (Zimbra).', 'Instalação e configuração do servidor de e-mail da universidade (Zimbra).'), logo: '/img/logos/unisave.webp' },
]

export const education = [
  { title: t('BSc in Informatics — Systems Development Engineering', 'Licenciatura em Informática — Engenharia de Desenvolvimento de Sistemas'), org: 'Universidade Save', period: '2020 — 2024', text: t('Top 20% of class. Software engineering, security, networks, AI, databases, computer graphics. Final project: facial-recognition access control with security alerts.', 'Entre os 20% melhores do curso. Engenharia de software, segurança, redes, IA, bases de dados, computação gráfica. Projecto final: controlo de acesso por reconhecimento facial com alertas de segurança.'), logo: '/img/logos/unisave.webp' },
  { title: t('II Scientific Conference — presenter', 'II Jornadas Científicas — participação'), org: 'Universidade Joaquim Chissano', period: '2023', text: t('Presented the facial-recognition access control research.', 'Apresentação da investigação sobre controlo de acesso por reconhecimento facial.'), logo: '/img/logos/ujc.webp' },
]

export const skills = [
  { group: t('Backend', 'Backend'), items: ['Python', 'Django', 'Django REST', 'FastAPI', 'Java', 'PHP', 'C#'] },
  { group: t('Frontend', 'Frontend'), items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'PWA'] },
  { group: t('Mobile', 'Mobile'), items: ['Flutter', 'Dart'] },
  { group: t('Data', 'Dados'), items: ['PostgreSQL', 'PostGIS', 'MySQL', 'Redis', 'SQLite'] },
  { group: t('DevOps', 'DevOps'), items: ['Docker', 'Nginx', 'Linux (Debian, Ubuntu, Kali)', 'Zimbra mail server', 'Git', 'CI/CD'] },
  { group: t('AI & Security', 'IA e Segurança'), items: ['Computer vision', 'TensorFlow.js', 'OpenCV', 'Ethical hacking', 'Networking'] },
]

export const certifications = [
  { title: t('Ethical Hacker', 'Hacker Ético'), year: '2025', img: '/img/badges/ethical-hacker.webp', url: 'https://drive.google.com/file/d/1wCrJGkJFwnzAyUn0jzNpctxfU81HPs3k/view?usp=sharing' },
  { title: t('Cyber Threat Management', 'Gestão de Ameaças Cibernéticas'), year: '2025', img: '/img/badges/cyber-threat-management.webp', url: 'https://drive.google.com/file/d/1oWoR28-3udWVHymMgRj7hEwWFb9mmjZL/view?usp=sharing' },
  { title: t('Networking Essentials', 'Fundamentos de Redes'), year: '2025', img: '/img/badges/networking-essentials.webp', url: 'https://drive.google.com/file/d/1lLHkm6XABprQANadYpjsOiw_idZqJwrT/view?usp=sharing' },
  { title: t('Python Essentials 1', 'Fundamentos do Python I'), year: '2025', img: '/img/badges/python-essentials-1.webp', url: 'https://drive.google.com/file/d/15uOxH40vsJJyuaUExyoz5QgEoOnWPcSj/view?usp=sharing' },
  { title: t('English for IT 2', 'Inglês para TI II'), year: '2025', img: '/img/badges/english-for-it-2.webp', url: 'https://drive.google.com/file/d/1_D76UZVnIGT_2da2IdfGQNjqXJgPBygj/view?usp=sharing' },
  { title: t('Introduction to Cybersecurity', 'Introdução à Cibersegurança'), year: '2023', img: '/img/badges/introduction-to-cybersecurity.webp', url: 'https://drive.google.com/file/d/1GLhs1dlExjpwx7sf-0JgzCrpX2xry5FT/view?usp=sharing' },
  { title: t('Networking Basics', 'Noções Básicas de Redes'), year: '2023', img: '/img/badges/networking-basics.webp', url: 'https://drive.google.com/file/d/1Sv-Ygst34LewA4AuMGfQbTqHwO1vKXlT/view?usp=sharing' },
]

export const writing = [
  { kind: t('Article', 'Artigo'), title: t('Cybersecurity in Mozambique: common attacks and how to protect yourself', 'Cibersegurança em Moçambique: ataques comuns e como se proteger'), url: 'https://cyber-gorilla.blogspot.com/2024/03/ciberseguranca-em-mocambique.html' },
  { kind: t('Tutorial', 'Tutorial'), title: t('Installing Ubuntu Server 20.04 with a GUI in under 30 minutes', 'Instalar o Ubuntu Server 20.04 com interface gráfica em menos de 30 minutos'), url: 'https://cyber-gorilla.blogspot.com/2023/04/instalacao-do-servidor-ubuntu-2004-step.html' },
  { kind: t('Talk', 'Palestra'), title: t('OpenGL development on Ubuntu — theory and live demo', 'Desenvolvimento OpenGL no Ubuntu — teoria e demonstração'), url: 'https://www.youtube.com/playlist?list=PL7uu5HDOU0qI4kWWEV1g-vqrGNePa-bmG' },
  { kind: t('Mini-course', 'Mini-curso'), title: t('LinkedIn sign-up and profile optimisation', 'LinkedIn: registo e personalização do perfil'), url: 'https://cyber-gorilla.blogspot.com/2023/10/linkedin-sign-up-e-personalizacao.html' },
]

export const spokenLanguages = [
  { name: t('Portuguese', 'Português'), level: t('Native', 'Nativo') },
  { name: t('English', 'Inglês'), level: t('Professional', 'Profissional') },
  { name: 'Changana', level: t('Native', 'Nativo') },
]
