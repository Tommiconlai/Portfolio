import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiFigma,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiUnity,
    SiAdobeindesign,
    SiAdobepremierepro,
    SiBlender
} from "react-icons/si";
import {
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import IconCV from "../components/IconCV";


function CVPage() {
    return (
        <div className="cv-page">
            <title>CV — Gabriele Tomasso</title>
            <meta name="description" content="Curriculum vitae di Gabriele Tomasso: esperienze, formazione, competenze tecniche e lingue." />
            <meta property="og:title" content="CV — Gabriele Tomasso" />
            <meta property="og:description" content="Curriculum vitae di Gabriele Tomasso: esperienze, formazione, competenze tecniche e lingue." />
            <section className="cv-header">
                <div>
                    <h1>Gabriele Tomasso</h1>
                    <p className="cv-subtitle">UI/UX Designer - Graphic Designer - Developer</p>
                    <div className="cv-contact">
                        <p>tomasso.job@gmail.com</p>
                        <p>+39 346 9578393</p>
                        <p>Cinisello Balsamo, Italia</p>
                        <p>
                            <a href="https://github.com/tommiconlai" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/gabrieletomasso/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </p>
                    </div>
                </div>
                <section className="cv-section">
                    <h2>Profilo</h2>
                    <p>
                        Developer con background in design grafico che in combo mi permette di passare
                        dal wireframe al codice di produzione senza handoff intermedi. Stack principale
                        React + Node.js (SQL/NoSQL); esperienza recente in AI generativa e agenti n8n
                        durante lo stage in NewMediaADV. Background in C#/Unity dagli anni di game design
                        e formazione completa in Adobe Suite (Photoshop, Illustrator, InDesign) + Figma.
                    </p>
                </section>
            </section>


            <section className="cv-section">
                <h2>Esperienze Lavorative</h2>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>Developer Intern</h3>
                        <span className="cv-date">Maggio 2025 - Luglio 2025</span>
                    </div>
                    <p className="cv-company">NewMediaADV - Milano, Italia</p>
                    <ul>
                        <li>Sviluppo di tool AI per scraping email a scopo di marketing</li>
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
                        <li>Progettazione di materiale grafico e digitale per oltre 30 eventi proposti nella biblioteca</li>
                        <li>Organizzazione eventi</li>
                        <li>Helpdesk biblioteca</li>
                    </ul>
                </div>

                <div className="cv-item">
                    <div className="cv-item-header">
                        <h3>Esperienze precedenti</h3>
                        <span className="cv-date">2015 - 2019</span>
                    </div>
                    <ul>
                        <li><strong>Operaio metalmeccanico magazziniere</strong> — Albertin Alcide snc, Cinisello Balsamo (Mag 2016 – Apr 2019)</li>
                        <li><strong>Inventarista</strong> — Centro ortopedico COR, Cinisello Balsamo (Mar 2015 – Nov 2015)</li>
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
                        <IconCV Icon={SiReact} label="React" color="white" />
                        <IconCV Icon={FaJava} label="Java" color="white" />
                        <IconCV Icon={SiJavascript} label="JavaScript" color="white" />
                        <IconCV Icon={SiNodedotjs} label="Node.js" color="white" />
                        <IconCV Icon={SiMongodb} label="MongoDB" color="white" />
                        <IconCV Icon={SiUnity} label="Unity" color="white" />
                        <IconCV Icon={TbBrandCSharp} label="C#" color="white" />
                        <IconCV Icon={FaHtml5} label="HTML" color="white" />
                        <IconCV Icon={FaCss3Alt} label="CSS" color="white" />
                        <IconCV Icon={DiMysql} label="MySQL" color="white" />
                        <IconCV Icon={FaGitAlt} label="Git" color="white" />
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Graphic</h3>
                    <div className="skills-tags">
                        <IconCV Icon={SiFigma} label="Figma" color="white" />
                        <IconCV Icon={SiAdobephotoshop} label="Photoshop" color="white" />
                        <IconCV Icon={SiAdobeillustrator} label="Illustrator" color="white" />
                        <IconCV Icon={SiAdobeindesign} label="inDesign" color="white" />
                        <IconCV Icon={SiAdobepremierepro} label="Premiere" color="white" />
                        <IconCV Icon={SiBlender} label="Blender" color="white" />
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
                        <strong>Inglese:</strong> Intermedio (B1)
                    </div>
                    <div className="language-item">
                        <strong>Spagnolo:</strong> Base (A1)
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CVPage;
