import { useState } from "react";
import cardAnatomyEffect from "../assets/card-anatomy-effect.png";
import cardAnatomyLayout from "../assets/card-anatomy-layout.png";
import cardAnatomyStats from "../assets/card-anatomy-stats.png";
import cardAnatomyMovement from "../assets/card-anatomy-movement.png";
import cardAnatomyIllustration from "../assets/card-anatomy-illustration.png";
import illustrator from "../assets/Logo-Illustrator.png";
import photoshop from "../assets/Logo-Photoshop.png";
import indesign from "../assets/Logo-inDesign.png";
import figma from "../assets/Logo-Figma.png";

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
                </section>
            </div>
        </div>
    );
}

export default SiegeCore;