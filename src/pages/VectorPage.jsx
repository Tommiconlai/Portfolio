import illustrator from "../assets/Logo-Illustrator.png";

function VectorPage() {
    return (
        <div className="siegecore-page">
            <div className="scroll-snap-container">

                {/* ── HEADER ── */}
                <section className="siegecore-section siegecore-header">
                    <div>
                        <h1>Vettorizzazione Loghi</h1>
                        <p>
                            Ridisegno e vettorizzazione di loghi per aziende e organizzazioni,
                            garantendo qualità scalabile e fedeltà al brand originale.
                        </p>
                    </div>

                    <div>
                        <h2>Programmi usati</h2>
                        <div>
                            <img src={illustrator} alt="Logo Illustrator" style={{ width: "40px", height: "40px" }} />
                        </div>
                    </div>
                </section>

                {/* ── GALLERIA LOGHI ── */}
                <section className="siegecore-section card-explenation">
                    <h2>Loghi Vettorizzati</h2>
                    <p style={{ color: "var(--text-secondary, #aaa)", marginBottom: "2rem" }}>
                        Ogni logo è stato ridisegnato da zero in formato vettoriale SVG/AI
                        partendo da riferimenti fotografici o logotipi a bassa risoluzione.
                    </p>

                    {/* Placeholder grid – sostituisci con import reali delle immagini */}
                    <div className="card-icons-grid">
                        <div className="vector-placeholder">Logo 1</div>
                        <div className="vector-placeholder">Logo 2</div>
                        <div className="vector-placeholder">Logo 3</div>
                        <div className="vector-placeholder">Logo 4</div>
                        <div className="vector-placeholder">Logo 5</div>
                        <div className="vector-placeholder">Logo 6</div>
                    </div>
                </section>

                {/* ── PROCESSO ── */}
                <section className="siegecore-section card-explenation">
                    <h2>Processo di Lavoro</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "600px" }}>
                        <div>
                            <h3>1 · Analisi del materiale</h3>
                            <p>Raccolta di riferimenti, analisi delle proporzioni e dei colori originali del logo.</p>
                        </div>
                        <div>
                            <h3>2 · Tracciamento vettoriale</h3>
                            <p>Ridisegno manuale in Adobe Illustrator con penne e curve di Bézier per la massima precisione.</p>
                        </div>
                        <div>
                            <h3>3 · Ottimizzazione e consegna</h3>
                            <p>Export nei formati richiesti (SVG, AI, PDF, PNG) con palette colori in CMYK e RGB.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default VectorPage;
