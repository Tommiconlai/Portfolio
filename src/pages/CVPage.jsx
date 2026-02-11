function CVPage() {
    return (
        <div className="cv-page">
            <header className="cv-header">
                <h1>Gabriele Tomasso</h1>
                <p className="cv-subtitle">Developer / UI/UX Designer / Grafico</p>
                <div className="cv-contact">
                    <span>tomasso.job@gmail.com</span>
                    <span>+39 346 9578393</span>
                    <span>Cinisello Balsamo, Italia</span>
                </div>
            </header>

            <section className="cv-section">
                <h2>Profilo</h2>
                <p>
                    Sviluppatore con esperienza in tecnologie web moderne. Appassionato di
                    creare esperienze utente intuitive e performanti. Sempre alla ricerca
                    di nuove sfide e opportunità di crescita professionale.
                </p>
            </section>

            <section className="cv-section">
                <h2>Esperienze Lavorative</h2>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>Senior Developer</h3>
                        <span className="cv-date">Gen 2023 - Presente</span>
                    </div>
                    <p className="cv-company">Azienda Tech SRL - Milano, Italia</p>
                    <ul>
                        <li>Sviluppo e mantenimento di applicazioni web con React e Node.js</li>
                        <li>Collaborazione con team di design per implementare UI/UX moderne</li>
                        <li>Mentoring di sviluppatori junior e code review</li>
                        <li>Ottimizzazione delle performance e SEO delle applicazioni</li>
                    </ul>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>Frontend Developer</h3>
                        <span className="cv-date">Mar 2021 - Dic 2022</span>
                    </div>
                    <p className="cv-company">Startup Innovativa - Roma, Italia</p>
                    <ul>
                        <li>Creazione di interfacce responsive con React e CSS moderno</li>
                        <li>Integrazione con API REST e GraphQL</li>
                        <li>Implementazione di testing automatizzato con Jest e React Testing Library</li>
                    </ul>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>Junior Developer</h3>
                        <span className="cv-date">Set 2019 - Feb 2021</span>
                    </div>
                    <p className="cv-company">Web Agency - Firenze, Italia</p>
                    <ul>
                        <li>Sviluppo di siti web per clienti vari</li>
                        <li>Manutenzione e aggiornamento di progetti esistenti</li>
                        <li>Apprendimento di best practices e workflow professionali</li>
                    </ul>
                </div>
            </section>

            <section className="cv-section">
                <h2>Formazione</h2>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>IFTS Developer</h3>
                        <span className="cv-date">2024 - 2025</span>
                    </div>
                    <p className="cv-company">ITS Angelo Rizzoli - Milano</p>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>Corso Game Designer</h3>
                        <span className="cv-date">2019 - 2022</span>
                    </div>
                    <p className="cv-company">Event Horizon School - Milano</p>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>Diploma Liceo Scientifico Biologico</h3>
                        <span className="cv-date">2009 - 2014</span>
                    </div>
                    <p className="cv-company">Liceo Scientifico Biologico - Cinisello Balsamo</p>
                </div>
            </section>

            <section className="cv-section">
                <h2>Competenze Tecniche</h2>

                <div className="skills-category">
                    <h3>Frontend</h3>
                    <div className="skills-tags">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Backend</h3>
                    <div className="skills-tags">
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">REST API</span>
                        <span className="skill-tag">SQL</span>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Tools & Altro</h3>
                    <div className="skills-tags">
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">GitHub</span>
                        <span className="skill-tag">Photoshop</span>
                        <span className="skill-tag">Illustrator</span>
                        <span className="skill-tag">inDesign</span>
                        <span className="skill-tag">Figma</span>
                        <span className="skill-tag">Premiere</span>
                        <span className="skill-tag">Unity</span>
                        <span className="skill-tag">Blender</span>
                    </div>
                </div>
            </section>

            <section className="cv-section">
                <h2>Lingue</h2>
                <div className="languages">
                    <div className="language-item">
                        <strong>Italiano:</strong> Madrelingua
                    </div>
                    <div className="language-item">
                        <strong>Inglese:</strong> Intermedio (B2)
                    </div>
                    <div className="language-item">
                        <strong>Spagnolo:</strong> Base (A2)
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CVPage;
