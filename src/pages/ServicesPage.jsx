function ServicesPage() {
    const services = [
        {
            title: "Sviluppo Web",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sviluppo di applicazioni web moderne con React, Node.js e integrazione di API REST.",
            features: ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing", "Elit sed do"]
        },
        {
            title: "UI/UX Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Progettazione di interfacce utente moderne, intuitive e centrate sull'esperienza dell'utente finale.",
            features: ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing", "Elit sed do"]
        },
        {
            title: "Grafica & Branding",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Creazione di identità visive, loghi vettoriali e materiali grafici per stampa e digitale.",
            features: ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing", "Elit sed do"]
        },
        {
            title: "AI & Automazione",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sviluppo di tool basati su AI generativa e agenti automatizzati con tecnologia n8n.",
            features: ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing", "Elit sed do"]
        },
        {
            title: "Game Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sviluppo di videogiochi 2D e 3D con Unity e C#, dalla prototipazione al rilascio.",
            features: ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing", "Elit sed do"]
        },
        {
            title: "Consulenza",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Supporto tecnico e creativo per definire la strategia digitale del tuo progetto.",
            features: ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing", "Elit sed do"]
        }
    ];

    return (
        <div className="services-page">
            <section className="services-header">
                <h1>I Miei Servizi</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Una panoramica dei servizi che offro per portare le tue idee dal concept al prodotto finale.</p>
            </section>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-item" key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ul className="service-features">
                            {service.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <section className="services-cta">
                <h2>Interessato a collaborare?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contattami per discutere del tuo prossimo progetto.</p>
                <a href="mailto:tomasso.job@gmail.com" className="btn btn-primary">Contattami</a>
            </section>
        </div>
    );
}

export default ServicesPage;
