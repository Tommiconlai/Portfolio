import { useState } from "react";
import IconItem from "../components/IconItem";
import RotationDemo from "../components/RotationDemo";
import * as siegecore from "../assets/siegecore";
import siegecoreLogo from "../assets/siegecore_logo.png";
import "../styles/siegecore.css";

const {
    cardAnatomyEffect,
    cardAnatomyLayout,
    cardAnatomyStats,
    cardAnatomyMovement,
    cardAnatomyIllustration,
    attaccoAutomatico,
    aumentoForza,
    aumentoVelocita,
    congelamento,
    cura,
    danneggiamento,
    esplosione,
    pesca,
    rangeAzione,
    schivata,
    segnalinoScudo,
    stordimento,
} = siegecore;

const EFFECT_ICONS = [
    { src: congelamento, label: "Congela" },
    { src: danneggiamento, label: "Danno" },
    { src: cura, label: "Cura" },
    { src: stordimento, label: "Stun" },
    { src: aumentoForza, label: "Buff POW" },
    { src: aumentoVelocita, label: "Buff Mov" },
    { src: schivata, label: "Schivata" },
    { src: esplosione, label: "Esplosione" },
    { src: attaccoAutomatico, label: "Attacco auto" },
    { src: rangeAzione, label: "Range" },
    { src: pesca, label: "Pesca" },
    { src: segnalinoScudo, label: "Scudo" },
];

// TODO(gabriele): colori esatti delle 4 fazioni. Frost = ciano (noto dalle carte),
// gli altri tre sono segnaposto in attesa dei valori reali.
const FACTIONS = [
    { name: "RINNOVO", color: "#3fd97a", desc: "Proteggi e cura: porta le tue unità a destinazione, vive." },
    { name: "FROST", color: "#00cfff", desc: "Congela e rallenta: controlla il campo finché il nemico non può più muoversi." },
    { name: "INGRANAGGIO", color: "#f0962d", desc: "Danneggia tutto, anche te stesso: ogni rotazione è un'opportunità." },
    { name: "CYBERPUNK", color: "#b14cff", desc: "Il potenziale di tutte le fazioni, bloccato: sblocca gli effetti con l'Impianto." },
];

function SiegeCore() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="siegecore-page siege-case">
            <title>SiegeCore — Gabriele Tomasso</title>
            <meta name="description" content="SiegeCore: gioco da tavolo strategico in cui la salute di un'unità è il suo orientamento. Case study di game design, identità visiva e iconografia di Gabriele Tomasso." />
            <meta property="og:title" content="SiegeCore — Il danno non uccide. Disorienta." />
            <meta property="og:description" content="Gioco da tavolo strategico 2–4 giocatori: ogni danno ruota la carta di 90° cambiando le sue mosse. Case study di game e graphic design." />
            {/* TODO(gabriele): aggiungere og:image con l'hero dedicata della pagina (1200×630). */}

            {/* ───────── 1. HERO ───────── */}
            <header className="siege-hero">
                {/* TODO(gabriele): immagine hero dedicata come sfondo (.siege-hero). */}
                <div className="siege-hero__band" aria-hidden="true" />
                <div className="siege-hero__content">
                    <h1 className="siege-hero__title">SIEGECORE</h1>
                    <p className="siege-hero__tagline">Il danno non uccide. Disorienta.</p>
                    <p className="siege-hero__role">
                        Game design · Graphic design · Iconografia — Progetto personale, Bugmoth Studio
                    </p>
                    <ul className="siege-chips">
                        <li>2–4 giocatori</li>
                        <li>13+</li>
                        <li>15–60 min</li>
                    </ul>
                </div>
            </header>

            {/* ───────── 2. INTRO ───────── */}
            <section className="siege-sec siege-intro">
                <p>
                    SiegeCore è un gioco da tavolo di strategia per 2 o 4 giocatori. Le unità non hanno
                    punti vita: la loro salute è il loro orientamento. Ogni danno ruota la carta di 90°,
                    cambiando le direzioni in cui può muoversi — e a volte ferire le proprie unità è la
                    mossa che apre la strada alla vittoria. Ho progettato il sistema di gioco, l'identità
                    visiva, le carte e l'intero set di iconografia degli effetti.
                </p>
            </section>

            {/* ───────── 3. DEMO ROTAZIONE ⭐ ───────── */}
            <section className="siege-sec siege-demo">
                <h2>La meccanica di rotazione</h2>
                <p className="siege-sec__lead">
                    Prova tu: ogni danno ruota l'unità e cambia le caselle che può raggiungere.
                </p>
                <RotationDemo />
            </section>

            {/* ───────── 4. ANATOMIA DELLA CARTA (esistente, refactor) ───────── */}
            <section className="siege-sec card-anatomy">
                <h2>Anatomia della Carta</h2>
                <p className="siege-sec__lead">
                    Ogni elemento è posizionato per restare leggibile in tutti e quattro gli orientamenti:
                    il <strong>Livello (Lv)</strong> e la <strong>POW</strong> agli angoli, le{" "}
                    <strong>frecce di direzione</strong> sul bordo, l'<strong>effetto</strong> al centro.
                    La gerarchia visiva è stata pensata attorno alla rotazione, non nonostante essa.
                </p>
                <div className="card-anatomy-content">
                    <div className={`card ${isActive ? "active" : ""}`}>
                        <img className="card-anatomy-illustration" src={cardAnatomyIllustration} alt="" />
                        <img className="card-anatomy-effect" src={cardAnatomyEffect} alt="" />
                        <img className="card-anatomy-layout" src={cardAnatomyLayout} alt="" />
                        <img className="card-anatomy-stats" src={cardAnatomyStats} alt="" />
                        <img className="card-anatomy-movement" src={cardAnatomyMovement} alt="" />
                    </div>
                </div>
                <button
                    className={`card-btn ${isActive ? "active" : ""}`}
                    onClick={() => setIsActive((v) => !v)}
                >
                    {isActive ? "Chiudi" : "Scopri di più"}
                </button>
            </section>

            {/* ───────── 5. LE QUATTRO FAZIONI ───────── */}
            <section className="siege-sec siege-factions">
                <h2>Le quattro fazioni</h2>
                <div className="faction-grid">
                    {FACTIONS.map((f) => (
                        <div className="faction" key={f.name} style={{ "--faction": f.color }}>
                            <span className="faction__band" aria-hidden="true" />
                            <div className="faction__body">
                                <h3 className="faction__name">{f.name}</h3>
                                <p>{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ───────── 6. IL PROCESSO DI DESIGN ───────── */}
            <section className="siege-sec siege-process">
                <h2>Il processo di design</h2>
                <div className="process-grid">
                    <article className="process">
                        {/* TODO(gabriele): foto del playtest o del prototipo fisico. */}
                        <div className="process__media process__media--placeholder">Sistema di gioco</div>
                        <h3>Sistema di gioco</h3>
                        <p>
                            Dalla meccanica di rotazione al bilanciamento di quattro fazioni asimmetriche.
                            Iterato a tavolino e in playtest sul circuito IDEAG.
                        </p>
                    </article>

                    <article className="process">
                        {/* TODO(gabriele): export delle icone su sfondo neutro. */}
                        <div className="process__media">
                            <div className="card-icons-grid process__icons">
                                {EFFECT_ICONS.slice(0, 6).map((ic) => (
                                    <IconItem key={ic.label} src={ic.src} alt={ic.label} label={ic.label} />
                                ))}
                            </div>
                        </div>
                        <h3>Iconografia</h3>
                        <p>
                            Un set di ~20 icone effetto (Congela, Frostbite, Hacking, Nerf, Stun, Impianto…)
                            progettato per restare leggibile a dimensione segnalino e in quattro orientamenti.
                        </p>
                    </article>

                    <article className="process">
                        {/* TODO(gabriele): immagine del campo/plancia schematizzato. */}
                        <div className="process__media process__media--placeholder">Plancia 6×6 + 4×(1×6)</div>
                        <h3>Sistema carte e plancia</h3>
                        <p>
                            Layout della carta leggibile in ogni rotazione; plancia modulare 6×6 con quattro
                            plance giocatore 1×6 che si agganciano ai lati.
                        </p>
                    </article>
                </div>
            </section>

            {/* ───────── 7. ICONOGRAFIA COMPLETA ───────── */}
            <section className="siege-sec card-explanation">
                <h2>Set di iconografia</h2>
                <div className="card-icons-grid">
                    {EFFECT_ICONS.map((ic) => (
                        <IconItem key={ic.label} src={ic.src} alt={ic.label} label={ic.label} />
                    ))}
                </div>
            </section>

            {/* ───────── 8. GALLERIA COMPONENTI ───────── */}
            <section className="siege-sec siege-gallery">
                <h2>Galleria componenti</h2>
                <div className="siege-gallery__grid">
                    {/* TODO(gabriele): aggiungere carta leader (Yinger/Roerien), unità, struttura, plancia. */}
                    <img src={siegecoreLogo} alt="Logo SiegeCore" />
                    <img src={cardAnatomyIllustration} alt="Illustrazione carta" />
                </div>
                <p className="siege-disclaimer">
                    Le illustrazioni del prototipo sono placeholder generati con AI; l'identità visiva, il
                    layout delle carte e l'iconografia sono progettati a mano.
                </p>
            </section>

            {/* ───────── 9. STATO + CTA ───────── */}
            <section className="siege-sec siege-cta">
                <p className="siege-status">
                    Regolamento v1.0 completo · Playtestato in cieco (circuito IDEAG) · In cerca di editore
                </p>
                <div className="siege-cta__buttons">
                    {/* TODO(gabriele): caricare /assets/Siegecore_SellSheet_IT.pdf e mostrare il bottone.
                        Finché il PDF non esiste, il bottone resta nascosto (niente link rotti). */}
                    <a className="btn-cta btn-cta--primary" href="mailto:tomasso.job@gmail.com?subject=SiegeCore">
                        Contattami
                    </a>
                </div>
            </section>
        </div>
    );
}

export default SiegeCore;
