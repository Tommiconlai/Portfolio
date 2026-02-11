import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Piattaforma e-commerce completa con gestione prodotti, carrello e pagamenti. Interfaccia moderna e responsive.",
            image: "https://via.placeholder.com/400x250/4a5568/ffffff?text=E-Commerce",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "https://github.com/tuousername/progetto1"
        },
        {
            title: "Task Manager App",
            description: "Applicazione per la gestione di task e progetti con drag & drop, filtri avanzati e collaborazione in tempo reale.",
            image: "https://via.placeholder.com/400x250/2c5282/ffffff?text=Task+Manager",
            technologies: ["React", "Firebase", "Material-UI"],
            link: "https://github.com/tuousername/progetto2"
        },
        {
            title: "Weather Dashboard",
            description: "Dashboard meteo con previsioni dettagliate, grafici interattivi e geolocalizzazione. Dati in tempo reale.",
            image: "https://via.placeholder.com/400x250/2f855a/ffffff?text=Weather+Dashboard",
            technologies: ["React", "Chart.js", "OpenWeather API"],
            link: "https://github.com/tuousername/progetto3"
        },
        {
            title: "Social Media Analytics",
            description: "Tool di analisi per social media con metriche avanzate, report automatici e visualizzazioni dati.",
            image: "https://via.placeholder.com/400x250/744210/ffffff?text=Analytics",
            technologies: ["React", "D3.js", "Express", "PostgreSQL"],
            link: "https://github.com/tuousername/progetto4"
        },
        {
            title: "Recipe Finder",
            description: "App per cercare ricette basata su ingredienti disponibili. Include filtri dietetici e salvataggio preferiti.",
            image: "https://via.placeholder.com/400x250/9c4221/ffffff?text=Recipe+Finder",
            technologies: ["React", "Spoonacular API", "LocalStorage"],
            link: "https://github.com/tuousername/progetto5"
        },
        {
            title: "Portfolio Generator",
            description: "Generatore di portfolio personalizzabili con template moderni e export in HTML/CSS.",
            image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=Portfolio+Gen",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            link: "https://github.com/tuousername/progetto6"
        }
    ];

    return (
        <div className="projects-page">
            <header className="projects-header">
                <h1>I Miei Progetti</h1>
                <p>Una selezione dei miei lavori più recenti e significativi</p>
            </header>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
