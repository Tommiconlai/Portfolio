import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content">
                    <h1>Gabriele Tomasso</h1>
                    <h2>Developer - UI/UX Designer - Grafico</h2>
                    <p className="hero-description">
                        Specializzato nello sviluppo di applicazioni web moderne con React e Node.js,
                        con esperienza in AI generativa e una solida formazione in design grafico.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/cv" className="btn btn-primary">Vedi CV</Link>
                        <Link to="/projects" className="btn btn-secondary">I Miei Progetti</Link>
                    </div>
                </div>
            </section>

            <section className="about">
                <h2>Chi Sono</h2>
                <p>
                    Sono attualmente specializzato nello sviluppo di applicazioni web moderne con React,
                    Node.js e database sia SQL che NoSQL. La mia esperienza come stagista developer
                    presso NewMediaADV mi ha permesso di approfondire il campo dell'AI generativa,
                    sviluppando tool innovativi e agenti AI tramite tecnologia n8n. Unisco competenze
                    tecniche di programmazione (Java, C#, Unity, React) a una solida formazione in
                    design grafico (Photoshop, Illustrator, Figma), permettendomi di creare soluzioni
                    complete che integrano funzionalità e estetica.
                </p>
            </section>

            <section className="skills-preview">
                <h2>Competenze Principali</h2>
                <div className="skills-grid">
                    <div className="skill-item">
                        <h3>Frontend</h3>
                        <p>React, JavaScript, CSS, HTML</p>
                    </div>
                    <div className="skill-item">
                        <h3>Backend</h3>
                        <p>Node.js, Express, APIs</p>
                    </div>
                    <div className="skill-item">
                        <h3>Tools</h3>
                        <p>Git, Vite, npm, VSCode</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
