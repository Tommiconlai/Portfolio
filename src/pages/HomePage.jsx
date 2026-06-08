import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-page">
            <title>Gabriele Tomasso — Developer & Designer</title>
            <meta name="description" content="Portfolio di Gabriele Tomasso: developer e designer. React, Node.js, AI generativa e design grafico." />
            <meta property="og:title" content="Gabriele Tomasso — Developer & Designer" />
            <meta property="og:description" content="Portfolio di Gabriele Tomasso: developer e designer. React, Node.js, AI generativa e design grafico." />
            <section className="hero">
                <div className="hero-frame" aria-hidden="true">
                    <span className="bracket bracket--tl"></span>
                    <span className="bracket bracket--tr"></span>
                    <span className="bracket bracket--bl"></span>
                    <span className="bracket bracket--br"></span>
                </div>

                <div className="hero-bg-glyph" aria-hidden="true">
                    <span>ガブリエレ</span>
                    <span className="hero-bg-glyph-sub">// gabriele_tomasso.dev</span>
                </div>

                <div className="hero-content">
                    <p className="hero-eyebrow"><span>// Portfolio_v.26</span></p>
                    <h1>
                        Gabriele
                        <span className="accent">Tomasso</span>
                    </h1>
                    <h2>Graphic Designer &mdash; UI/UX Designer &mdash; Developer</h2>
                    <p className="hero-description">
                        Designer e developer in una persona sola: passo dal mockup Figma al React in
                        produzione senza handoff. Stack React + Node.js, esperienza recente in AI
                        generativa e agenti n8n.
                    </p>
                    <p className="hero-cta-note">Disponibile per nuovi progetti</p>
                    <div className="hero-buttons">
                        <Link to="/cv" className="btn btn-primary">Vedi CV</Link>
                        <Link to="/projects" className="btn btn-secondary">I Miei Progetti</Link>
                    </div>
                </div>

                <div className="hero-stamp" aria-hidden="true">
                    <span className="hero-stamp-time">DEV:DSGN:<strong>26</strong></span>
                    <span className="hero-stamp-date">CINISELLO_B / IT</span>
                </div>
            </section>

            <div className="about-container">
                <section className="about">
                    <h2>Chi Sono</h2>
                    <p>
                        Vengo dal mondo del game design e della grafica editoriale, e da lì sono
                        approdato al codice. Oggi costruisco interfacce web con React e Node.js,
                        ma il mestiere di designer non l'ho mai messo da parte: ogni progetto
                        nasce con un occhio alla user experience e l'altro alla pulizia del codice.
                        L'ultima tappa è stato lo stage in NewMediaADV, dove ho lavorato su
                        AI generativa e agenti n8n.
                    </p>
                </section>

                <section className="skills-preview">
                    <h2>Competenze Principali</h2>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <h3>Frontend</h3>
                            <p>React, JavaScript, HTML, CSS</p>
                        </div>
                        <div className="skill-item">
                            <h3>Backend</h3>
                            <p>Node.js, Express, MySQL, MongoDB</p>
                        </div>
                        <div className="skill-item">
                            <h3>Design</h3>
                            <p>Figma, Illustrator, Photoshop, InDesign</p>
                        </div>
                        <div className="skill-item">
                            <h3>Altro</h3>
                            <p>Git, Unity, C#, n8n</p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default HomePage;
