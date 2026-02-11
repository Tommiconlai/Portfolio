import ProjectCard from '../components/ProjectCard';
import lbwyImage from '../assets/LBWY.png';
import cube from '../assets/CubeInvaders.png';
import dlac from '../assets/DLnC.png';

function ProjectsPage() {
    const projects = [
        {
            title: "Lost But With You",
            description: "Un cane viagga in un mondo spiritico per rincontrare il suo padrone in un 2D puzzle platformer.",
            image: lbwyImage,
            technologies: ["Unity", "C#", "Figma", "Adobe"],
            link: "https://eventhorizonschool.itch.io/lost-but-with-you"
        },
        {
            title: "Cube Invaders",
            description: "Proteggi il tuo pianeta cubo di Rubik in questo tower defence spaziale",
            image: cube,
            technologies: ["Unity", "C#", "Figma", "Adobe"],
            link: "https://eventhorizonschool.itch.io/cube-invaders"
        },
        {
            title: "Daemons Love and Carnage",
            description: "Un demone che diventa una spada, tanti cattivoni da picchiare e una sottotrama amorosa... cosa può andare storto?",
            image: dlac,
            technologies: ["Unity", "C#", "Figma", "Adobe"],
            link: "https://eventhorizonschool.itch.io/daemons-love-and-carnage"
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
            <section className="projects-header">
                <h1>I Miei Progetti</h1>
                <p>Una selezione dei miei lavori più recenti e significativi</p>
            </section>

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
