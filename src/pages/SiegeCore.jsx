import { useState } from "react";
import IconItem from "../components/IconItem";
import * as siegecore from "../assets/siegecore";

// Software Logos
import illustrator from "../assets/Logo-Illustrator.png";
import photoshop from "../assets/Logo-Photoshop.png";
import indesign from "../assets/Logo-inDesign.png";
import figma from "../assets/Logo-Figma.png";

// Destructure SiegeCore assets for easier access
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

function SiegeCore() {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="siegecore-page">
            <div className="scroll-snap-container">
                <section className="siegecore-section siegecore-header">
                    <div>
                        <h1>SiegeCore</h1>
                        <p>Gioco di carte strategico su griglia ambientato in un futuro rappresentato da varie sfaccettature del genere cyberpunk.</p>
                    </div>

                    <div>
                        <h2>Programmi usati</h2>
                        <div>
                            <img src={illustrator} alt="Logo Illustrator" />
                            <img src={photoshop} alt="Logo Photoshop" />
                            <img src={indesign} alt="Logo InDesign" />
                            <img src={figma} alt="Logo Figma" />
                        </div>
                    </div>
                </section>

                <section className="siegecore-section card-anatomy">
                    <h2>Anatomia della Carta</h2>
                    <div className="card-anatomy-content">
                        <div className={`card ${isActive ? 'active' : ''}`}>
                            <img className="card-anatomy-illustration" src={cardAnatomyIllustration} alt="" />
                            <img className="card-anatomy-effect" src={cardAnatomyEffect} alt="" />
                            <img className="card-anatomy-layout" src={cardAnatomyLayout} alt="" />
                            <img className="card-anatomy-stats" src={cardAnatomyStats} alt="" />
                            <img className="card-anatomy-movement" src={cardAnatomyMovement} alt="" />
                        </div>
                    </div>
                    <button className={`card-btn ${isActive ? 'active' : ''}`} onClick={handleToggle}>
                        {isActive ? 'Chiudi' : 'Scopri di più'}
                    </button>
                </section>

                <section className="siegecore-section card-explenation">
                    <h2>Elementi delle carte</h2>
                    <div>
                        <h3>Icone</h3>
                        <div className="card-icons-grid">
                            <IconItem src={attaccoAutomatico} alt="Attacco automatico" label="Attacco automatico" />
                            <IconItem src={aumentoForza} alt="Aumento forza" label="Aumento forza" />
                            <IconItem src={aumentoVelocita} alt="Aumento velocità" label="Aumento velocità" />
                            <IconItem src={congelamento} alt="Congelamento" label="Congelamento" />
                            <IconItem src={cura} alt="Cura" label="Cura" />
                            <IconItem src={danneggiamento} alt="Danneggiamento" label="Danneggiamento" />
                            <IconItem src={esplosione} alt="Esplosione" label="Esplosione" />
                            <IconItem src={pesca} alt="Pesca" label="Pesca" />
                            <IconItem src={rangeAzione} alt="Range azione" label="Range azione" />
                            <IconItem src={schivata} alt="Schivata" label="Schivata" />
                            <IconItem src={segnalinoScudo} alt="Segnalino Scudo" label="Segnalino Scudo" />
                            <IconItem src={stordimento} alt="Stordimento" label="Stordimento" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SiegeCore;