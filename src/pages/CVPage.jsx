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
            <section className="cv-header">
                <div>
                    <h1>Gabriele Tomasso</h1>
                    <p className="cv-subtitle">Developer - UI/UX Designer - Grafico</p>
                    <div className="cv-contact">
                        <p>tomasso.job@gmail.com</p>
                        <p>+39 346 9578393</p>
                        <p>Cinisello Balsamo, Italia</p>
                    </div>
                </div>
                <section className="cv-section">
                    <h2>Profilo</h2>
                    <p>
                        Attualmente specializzato nello sviluppo di applicazioni web moderne con React,
                        Node.js e database sia SQL che NoSQL. La mia esperienza come stagista developer
                        presso NewMediaADV mi ha permesso di approfondire il campo dell'AI generativa,
                        sviluppando tool innovativi e agenti AI tramite tecnologia n8n. Unisco competenze
                        tecniche di programmazione (Java, C#, Unity, React) a una solida formazione in
                        design grafico (Photoshop, Illustrator, Figma), permettendomi di creare soluzioni
                        complete che integrano funzionalità e estetica.
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
                        <IconCV Icon={FaGithub} label="GitHub" color="white" />
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
