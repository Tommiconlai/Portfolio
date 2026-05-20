import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie-consent';

function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) {
            setVisible(true);
        }
    }, []);

    const handleChoice = (choice) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            choice,
            timestamp: new Date().toISOString()
        }));
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Consenso cookie">
            <div className="cookie-banner-content">
                <h3>Cookies</h3>
                <p>
                    Questo sito utilizza cookie tecnici essenziali per il suo funzionamento.
                    Continuando la navigazione accetti l'utilizzo dei cookie.
                </p>
            </div>
            <div className="cookie-banner-actions">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleChoice('rejected')}
                >
                    Rifiuta
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleChoice('accepted')}
                >
                    Accetta
                </button>
            </div>
        </div>
    );
}

export default CookieBanner;
