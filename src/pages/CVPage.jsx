function CVPage() {
    return (
        <div className="cv-page">
            <section className="cv-header">
                <h1>Gabriele Tomasso</h1>
                <p className="cv-subtitle">Developer / UI/UX Designer / Grafico</p>
                <div className="cv-contact">
                    <span>tomasso.job@gmail.com</span>
                    <span>+39 346 9578393</span>
                    <span>Cinisello Balsamo, Italia</span>
                </div>
            </section>

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
                        <h3>Developer Stagista</h3>
                        <span className="cv-date">Maggio 2025 - Luglio 2025</span>
                    </div>
                    <p className="cv-company">NewMediaADV - Milano, Italia</p>
                    <ul>
                        <li>Sviluppo di tool che utilizzano AI generativa</li>
                        <li>Sviluppo di agenti AI tramite tecnologia n8n</li>
                        <li>Ricerche nel campo AI sulle ultime novità e applicazioni pratiche</li>
                    </ul>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>Junior Graphic Designer</h3>
                        <span className="cv-date">Maggio 2023 - Maggio 2024</span>
                    </div>
                    <p className="cv-company">Il Pertini centro Culturale - Cinisello Balsamo, Italia</p>
                    <ul>
                        <li>Progettazione di manifesti, locandine e post per i social dei vari eventi proposti nella biblioteca</li>
                        <li>Organizzazione eventi</li>
                        <li>Helpdesk biblioteca</li>
                    </ul>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>Operaio metalmeccanico magazziniere</h3>
                        <span className="cv-date">Maggio 2016 - Aprile 2019</span>
                    </div>
                    <p className="cv-company">Albertin Alcide snc - Cinisello Balsamo, Italia</p>
                    <ul>
                        <li>Controllo qualità di matrici per stampa a caldo in magnesio ed ottone</li>
                        <li>Imballo merci, inventario del magazzino</li>
                        <li>Produzione tramite lavorazione in resina epossidica</li>
                    </ul>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>Inventarista</h3>
                        <span className="cv-date">Marzo 2015 - Novembre 2016</span>
                    </div>
                    <p className="cv-company">Centro ortopedico COR - Cinisello Balsamo, Italia</p>
                    <ul>
                        <li>Passaggio a inventario digitale con software gestionale Sigao</li>
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
                    <h3>Programming</h3>
                    <div className="skills-tags">
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">C#</span>
                        <span className="skill-tag">Unity</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">XML</span>
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">REST API</span>
                        <span className="skill-tag">SQL</span>
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">GitHub</span>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Graphic</h3>
                    <div className="skills-tags">
                        <span className="skill-tag">Photoshop</span>
                        <span className="skill-tag">Illustrator</span>
                        <span className="skill-tag">inDesign</span>
                        <span className="skill-tag">Figma</span>
                        <span className="skill-tag">Premiere</span>
                        <span className="skill-tag">Blender</span>
                        <span className="skill-tag">Procreate</span>
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
