import cardAnatomyEffect from "../assets/card-anatomy-effect.png";
import cardAnatomyLayout from "../assets/card-anatomy-layout.png";
import cardAnatomyStats from "../assets/card-anatomy-stats.png";
import cardAnatomyMovement from "../assets/card-anatomy-movement.png";
import cardAnatomyIllustration from "../assets/card-anatomy-illustration.png";

function SiegeCore() {
    return (
        <div className="siegecore-page">
            <section className="siegecore-header">
                <h1>SiegeCore</h1>
                <p>Gioco di carte strategico su griglia ambientato in un futuro rappresentato da varie sfaccettature del genere cyberpunk.</p>
            </section>
            <section className="card-anatomy">
                <h2>Anatomia della Carta</h2>
                <p>Le carte sono il fulcro del gioco e presentano diverse caratteristiche:</p>

                <div className="card">
                    <img className="card-anatomy-illustration" src={cardAnatomyIllustration} alt="" />
                    <img className="card-anatomy-effect" src={cardAnatomyEffect} alt="" />
                    <img className="card-anatomy-layout" src={cardAnatomyLayout} alt="" />
                    <img className="card-anatomy-stats" src={cardAnatomyStats} alt="" />
                    <img className="card-anatomy-movement" src={cardAnatomyMovement} alt="" />
                </div>

            </section>

        </div>
    );
}

export default SiegeCore;