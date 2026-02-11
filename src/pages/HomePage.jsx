import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content">
                    <h1>Gabriele Tomasso</h1>
                    <h2>Developer / UI/UX Designer / Grafico</h2>
                    <p className="hero-description">
                        Benvenuto nel mio portfolio. Sono uno sviluppatore appassionato
                        di tecnologie web moderne e design intuitivo.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
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
