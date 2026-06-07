import ProjectCard from '../components/ProjectCard';
import lbwyImage from '../assets/LBWY.png';
import cube from '../assets/CubeInvaders.png';
import dlac from '../assets/DLnC.png';
import siegecore from '../assets/siegecore_logo.png';

function ProjectsPage() {
    const projects = [
        {
            title: "Lost But With You",
            description: "Un cane viaggia in un mondo spirituale per rincontrare il suo padrone in un 2D puzzle platformer.",
            image: lbwyImage,
            technologies: ["Unity", "C#", "Figma", "Adobe"],
            // TODO [INPUT GABRIELE]: specificare il ruolo nel team (es. grafica / codice / game design)
            link: "https://eventhorizonschool.itch.io/lost-but-with-you"
        },
        {
            title: "Cube Invaders",
            description: "Proteggi il tuo pianeta cubo di Rubik in questo tower defense spaziale.",
            image: cube,
            technologies: ["Unity", "C#", "Figma", "Adobe"],
            // TODO [INPUT GABRIELE]: specificare il ruolo nel team
            link: "https://eventhorizonschool.itch.io/cube-invaders"
        },
        {
            title: "Daemons Love and Carnage",
            description: "Un demone che diventa una spada, tanti cattivoni da picchiare e una sottotrama amorosa... cosa può andare storto?",
            image: dlac,
            technologies: ["Unity", "C#", "Figma", "Adobe"],
            // TODO [INPUT GABRIELE]: specificare il ruolo nel team
            link: "https://eventhorizonschool.itch.io/daemons-love-and-carnage"
        },
        {
            title: "SiegeCore",
            description: "Gioco di carte strategico su griglia ambientato in un futuro rappresentato da varie sfaccettature del genere cyberpunk.",
            image: siegecore,
            technologies: ["Illustrator", "Photoshop", "InDesign", "Figma"],
            link: "/projects/siegecore"
        },
        {
            title: "Vettorizzazione Loghi",
            description: "Vettorizzazione di loghi per aziende e organizzazioni.",
            // TODO [INPUT GABRIELE]: aggiungere screenshot reale di un logo vettorizzato
            image: null,
            technologies: ["Adobe Illustrator"],
            link: "/projects/vector"
        }
    ];

    return (
        <div className="projects-page">
            <title>Progetti — Gabriele Tomasso</title>
            <meta name="description" content="Selezione di progetti di Gabriele Tomasso: videogiochi, card game, vettorizzazione loghi e altri lavori." />
            <meta property="og:title" content="Progetti — Gabriele Tomasso" />
            <meta property="og:description" content="Selezione di progetti di Gabriele Tomasso: videogiochi, card game, vettorizzazione loghi e altri lavori." />
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
