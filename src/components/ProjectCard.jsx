import { Link } from 'react-router-dom';

function ProjectCard({ title, description, image, technologies, link }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                {link && (
                    link.startsWith('http') ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                            Vedi Progetto →
                        </a>
                    ) : (
                        <Link to={link} className="project-link">
                            Vedi Progetto →
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
