// ==================== CONTENUTI PORTFOLIO ====================
// Tutti i testi del sito in un unico posto. Aggiorna qui.
// TODO [INPUT GABRIELE]: voci marcate sotto da verificare/completare.

import photo from "../assets/just_me.jpg";
import photoAlias from "../assets/me_alias.jpg";
import lbwy from "../assets/LBWY.png";
import cube from "../assets/CubeInvaders.png";
import dlac from "../assets/DLnC.png";
import siegecore from "../assets/siegecore_logo.png";

export const identity = {
  name: 'Gabriele Tomasso',
  alias: "tommiconlai",
  roles: ["UI/UX Designer", "Developer", "Game Designer"],
  level: "LV.30",
  photo,
  photoAlias,
  location: "Cinisello Balsamo, IT",
};

// TODO [INPUT GABRIELE]: inserire URL reali (Behance assente).
export const contacts = [
  { label: "Email", icon: "Mail", href: "mailto:tomasso.job@gmail.com" },
  { label: "GitHub", icon: "Github", href: "https://github.com/tommiconlai" },
  { label: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/in/gabrieletomasso/" },
  { label: "Portfolio", icon: "Globe", href: "https://gabrieletomasso.it" },
];

export const skills = [
  { group: "DESIGN", items: ["Figma", "Illustrator", "InDesign", "Photoshop", "Premiere"] },
  { group: "SVILUPPO", items: ["HTML/CSS", "JavaScript", "React", "Node.js", "Java", "Python"] },
  { group: "GAME / 3D", items: ["Unity 3D", "C#"] },
  { group: "SOFT SKILLS", items: ["Problem Solving", "Creatività", "Ideazione", "Concentrazione", "Attitudine positiva", "Ricerca"] },
];

export const bio = [
  "UI/UX designer e sviluppatore front-end con un background in game design. Lavoro al confine tra estetica e codice: progetto interfacce in Figma e le porto in produzione con React senza passaggi di consegna intermedi.",
  "La mia esperienza recente include uno stage in AI generativa e agenti n8n presso NewMediaADV, oltre ad anni di formazione in grafica e game design.",
  "Ogni progetto nasce con un occhio alla user experience e l'altro alla pulizia del codice.",
];

// TODO [INPUT GABRIELE]: verificare/correggere voci ed estremi temporali.
export const quests = [
  {
    title: "Barista",
    org: "Edelweiss Bar",
    date: "in corso",
    status: "active",
    bullets: ["Servizio clienti", "Gestione cassa e postazione"],
  },
  {
    title: "Freelance Graphic Designer",
    date: "in corso",
    status: "active",
    bullets: ["Progetti web e grafici per clienti", "Identità visive e UI/UX"],
  },
  {
    title: "Developer Intern",
    org: "NewMediaADV - Milano",
    date: "Mag 2025 - Lug 2025",
    status: "done",
    bullets: [
      "Sviluppo tool AI per scraping email a scopo marketing",
      "Agenti AI tramite tecnologia n8n",
      "Ricerca su novità e applicazioni pratiche AI",
    ],
  },
  {
    title: "Junior Graphic Designer",
    org: "Il Pertini Centro Culturale - Cinisello Balsamo",
    date: "Mag 2023 - Mag 2024",
    status: "done",
    bullets: [
      "Materiale grafico/digitale per oltre 30 eventi",
      "Organizzazione eventi",
      "Helpdesk biblioteca",
    ],
  },
  {
    title: "Esperienze precedenti",
    org: "Albertin Alcide snc / Centro ortopedico COR",
    date: "set 2015 - apr 2019",
    status: "done",
    bullets: [
      "Operaio metalmeccanico magazziniere (2016–2019)",
      "Inventarista (2015)",
    ],
  },
];

export const achievements = [
  { title: "IFTS Developer", org: "ITS Angelo Rizzoli - Milano", date: "2024 - 2025", icon: "Code2" },
  { title: "Corso Game Design", org: "Event Horizon School - Milano", date: "2019 - 2022", icon: "Gamepad2" },
  { title: "Diploma Liceo Scientifico Biologico", org: "Cinisello Balsamo", date: "2009 - 2014", icon: "GraduationCap" },
];

// gallery: tab = Game | Graphic | Website
export const gallery = {
  Game: [
    { title: "SiegeCore", role: "Game Design", tools: "Game Design, Illustrator, Photoshop, Figma", image: siegecore, link: "/projects/siegecore", desc: "Gioco da tavolo in cui la salute di un'unità è il suo orientamento: ogni danno la ruota di 90°." },
    { title: "Lost But With You", role: "Game Dev / Grafica", tools: "Unity, C#, Figma, Adobe", image: lbwy, link: "https://eventhorizonschool.itch.io/lost-but-with-you", desc: "Un cane viaggia in un mondo spirituale per rincontrare il suo padrone in un 2D puzzle platformer." },
    { title: "Cube Invaders", role: "Game Dev / Grafica", tools: "Unity, C#, Figma, Adobe", image: cube, link: "https://eventhorizonschool.itch.io/cube-invaders", desc: "Proteggi il tuo pianeta cubo di Rubik in questo tower defense spaziale." },
    { title: "Daemons Love and Carnage", role: "Game Dev / Grafica", tools: "Unity, C#, Figma, Adobe", image: dlac, link: "https://eventhorizonschool.itch.io/daemons-love-and-carnage", desc: "Un demone che diventa una spada, tanti cattivoni da picchiare e una sottotrama amorosa." },
  ],
  Graphic: [
    // TODO [INPUT GABRIELE]: aggiungere immagini reali (loghi, redesign, locandine).
    { title: "Vettorizzazione Loghi", role: "Graphic Design", tools: "Adobe Illustrator", image: null, link: "/projects/vector", desc: "Ridisegno e vettorizzazione di loghi per aziende e organizzazioni." },
  ],
  Website: [
    { title: "Portfolio React", role: "Web Dev / Design", tools: "React, Vite, CSS", image: null, link: "https://gabrieletomasso.it", desc: "Questo portfolio: SPA React con UI in stile game-HUD." },
    { title: "Chillart Studio", role: "Web Dev / Design", tools: "React, Vite, CSS", image: null, link: "https://chillartstudio.it", desc: "Sito vetrina per studio creativo." },
    // TODO [INPUT GABRIELE]: lavori web per clienti.
  ],
};
