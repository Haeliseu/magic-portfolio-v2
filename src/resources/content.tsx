import { About, Home, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Aris",
  lastName: "Alexia",
  name: "Aris Alexia",
  role: "Développeur Web Full-Stack Java / Javascript",
  avatar: "/images/avatar.jpg",
  email: "aris.alexia@outlook.fr",
  location: "Europe/Paris",
  languages: ["Français", "English"],
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Haeliseu/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aris-alexia/",
  },
  {
    name: "Malt",
    icon: "malt",
    link: "https://www.malt.fr/profile/arisalexia",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link:
        "https://wa.me/33604511196?text=" +
        encodeURIComponent(" Bonjour, je souhaite échanger avec vous. "),
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `${person.name} - Développeur Web Full-Stack Java / Javascript`,
  description: `${person.role} - Développements adaptés à vos besoins, sites vitrines, DevOps, e-commerce, SEO basé en Loire-Atlantique`,
  headline: <>Développeur FullStack Java/Javascript</>,
  featured: {
    display: false,
    title: <>—</>,
    href: "/",
  },
  subline: <>Freelance</>,
  technologies: [
    {
      name: "Java",
      icon: "images/icons/language/java.svg",
    },
    {
      name: "Spring Boot",
      icon: "images/icons/language/spring.svg",
    },
    {
      name: "node.js",
      icon: "images/icons/language/nodejs.svg",
    },
    {
      name: "Next.js",
      icon: "images/icons/language/nextjs.svg",
    },
    {
      name: "React",
      icon: "images/icons/language/react.svg",
    },
    {
      name: "Docker",
      icon: "images/icons/language/docker.svg",
    }
  ]
};

const about: About = {
  path: "/about",
  label: "A propos",
  title: `${person.name} - Développeur Web Full-Stack Java / Javascript`,
  description: `A propos de ${person.name}, ${person.role}, basé à ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/aalexia/30min",
  },
  intro: {
    display: false,
    title: "Introduction",
    description: <></>,
  },
  work: {
    display: true,
    title: "Expérience professionnelle",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2025 - Maintenant",
        role: "Développeur Full-Stack",
        achievements: [],
        images: [],
      },
      {
        company: "IMATECH, Nantes",
        timeframe: "Septembre 2023 - Novembre 2024",
        role: "Analyste développeur",
        achievements: [
          <>Maintenance et évolution de CRM (Spring Boot, Ext JS)</>,
          <>Création et migration de batchs (Spring Batch)</>,
          <>Intégration de WebSocket et communication avec l’interface d’un CRM (Java, FXML)</>,
          <>Migration des CRM (Java 17 vers Java 21)</>,
          <>Migration d’applications conteneurisées et redéploiement (Docker)</>,
          <>
            Gestion de projet en colaboration avec un chef de projet suivie du
            développement et de l’intégration au CRM
          </>,
          <>Création de pipelines dans l’optique d’évolution DevOps (Azure DevOps)</>,
        ],
        images: [],
      },
      {
        company: "IMATECH, Nantes",
        timeframe: "Mai 2023 - Juillet 2023",
        role: "Analyste développeur",
        achievements: [
          <>Analyse et Conception d’une solution logicielle</>,
          <>Développement d’une API structurée en couches (Express JS, Postgresql)</>,
          <>Développement d’une application de formulaire (React JS)</>,
          <>Conteneurisation de l’application (Docker)</>,
        ],
        images: [],
      },
      {
        company: "CAISSE GÉNÉRALE DE LA SÉCURITE SOCIALE, Guadeloupe",
        timeframe: "Decembre 2021 - Février 2022",
        role: "Analyste développeur",
        achievements: [
          <>
            Conception et développement d’un logiciel d’organisation d’évènements
            d’entreprise (PHP, MySQL)
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formations",
    institutions: [
      {
        name: "Eni Ecole Informatique, Nantes",
        description: (
            <>
              Obtention du titre de Manager de Solution Digitale et Data (RNCP Niveau 7) <br /> TOEIC
              (890)
            </>
        ),
      },
      {
        name: "Eni Ecole Informatique, Nantes",
        description: (
            <>Obtention du titre de Concepteur Développeur d'Applications (RNCP Niveau 6)</>
        ),
      },
      {
        name: "Lycée Général et Technologique Baimbridge, Guadeloupe",
        description: <>Obtention du BTS SIO option SLAM (RNCP Niveau 5)</>,
      },
    ],
  },
  technical: {
    display: false,
    title: "Compétences techniques",
    skills: [],
  },
};

const work: Work = {
  path: "/work",
  label: "Réalisations",
  title: `Développeur Web Full-Stack Java / Javascript - ${person.name}`,
  description: `Projets réalisés par ${person.name}`,
};

// Conserve la ressource 'service' utilisée par la page Services
const service = {
  path: "/services",
  label: "Services",
  title: `Services de développement web & mobile — ${person.name}`,
  description:
      "Création d’applications web/mobile, APIs, bases de données, déploiement et maintenance. Sécurité, performance, accompagnement technique.",
};

export { person, social, home, about, work, service };
