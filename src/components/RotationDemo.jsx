import { useState } from "react";

/*
 * Demo interattiva della meccanica firma di SiegeCore.
 * Lo stato di salute di un'unità è il suo ORIENTAMENTO: ogni danno ruota
 * la carta di 90° (orario), cambiando le direzioni in cui può muoversi.
 *
 * Niente librerie: la rotazione è un singolo `transform: rotate`, gestito
 * via CSS transition. `prefers-reduced-motion` disattiva l'animazione
 * tramite la media query in CSS (non serve logica JS).
 *
 * `cardImage` = asset reale della carta unità (ruota con il danno). Senza
 * immagine viene mostrata una carta vettoriale segnaposto.
 */

// Direzioni di movimento base (carta dritta): la carta unità reale ha
// frecce a sinistra, in alto e a destra (W, N, E).
const BASE_DIRS = ["W", "N", "E"];

// Rotazione oraria di 90°: ogni direzione (8-vie) avanza di due passi da 45°.
const ROT_CW = { N: "E", E: "S", S: "W", W: "N", NE: "SE", SE: "SW", SW: "NW", NW: "NE" };

// Direzione -> indice cella nella griglia 3×3 (centro = 4).
const DIR_TO_CELL = { NW: 0, N: 1, NE: 2, W: 3, E: 5, SW: 6, S: 7, SE: 8 };

function rotateDirs(dirs, steps) {
  let out = dirs;
  for (let i = 0; i < steps; i++) out = out.map((d) => ROT_CW[d]);
  return out;
}

const STATES = {
  0: { label: "DRITTA — 0 danni", angle: 0 },
  1: { label: "RUOTATA — 1 danno", angle: 90 },
  2: { label: "CAPOVOLTA — 2 danni", angle: 180 },
  3: { label: "DISTRUTTA", angle: 270 },
};

function RotationDemo({ cardImage }) {
  const [damage, setDamage] = useState(0);
  // effetto SVG transitorio: { type: 'hit' | 'heal' | 'destroy', key } —
  // key incrementale per riavviare l'animazione a ogni azione.
  const [fx, setFx] = useState(null);

  const destroyed = damage >= 3;
  const state = STATES[damage];
  const reachable = destroyed ? [] : rotateDirs(BASE_DIRS, damage).map((d) => DIR_TO_CELL[d]);

  const trigger = (type) => setFx((f) => ({ type, key: (f?.key ?? 0) + 1 }));

  const hit = () =>
    setDamage((d) => {
      const next = Math.min(3, d + 1);
      trigger(next >= 3 ? "destroy" : "hit");
      return next;
    });
  const heal = () =>
    setDamage((d) => {
      if (d > 0) trigger("heal");
      return Math.max(0, d - 1);
    });
  const reset = () => {
    setFx(null);
    setDamage(0);
  };

  return (
    <div className="rotdemo">
      <div className="rotdemo__stage">
        {/* griglia 3×3: caselle raggiungibili evidenziate */}
        <div className="rotdemo__grid" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={`rotdemo__cell ${reachable.includes(i) ? "on" : ""} ${i === 4 ? "center" : ""}`}
            />
          ))}
        </div>

        {/* carta unità: ruota con il danno */}
        <div
          className={`rotdemo__card ${destroyed ? "destroyed" : ""}`}
          style={{ "--angle": `${state.angle}deg` }}
        >
          {cardImage ? (
            <img className="rotdemo__card-img" src={cardImage} alt="Carta unità SiegeCore" />
          ) : (
            <div className="rotdemo__card-inner">
              <span className="rotdemo__lv">Lv 3</span>
              <span className="rotdemo__pow">POW 2</span>
              <span className="rotdemo__name">Viandante di Cryo</span>
              <span className="rotdemo__arrow rotdemo__arrow--w">◀</span>
              <span className="rotdemo__arrow rotdemo__arrow--n">▲</span>
              <span className="rotdemo__arrow rotdemo__arrow--e">▶</span>
            </div>
          )}
        </div>

        {/* filtro SVG riusato dall'animazione di distruzione (CSS filter: url) */}
        <svg className="rotdemo__defs" width="0" height="0" aria-hidden="true">
          <defs>
            <filter id="rotdemo-shred">
              <feTurbulence type="fractalNoise" baseFrequency="0 0.12" numOctaves="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>

        {/* overlay effetti: rimontato a ogni azione via key per riavviare l'animazione */}
        {fx && (
          <svg
            key={fx.key}
            className={`rotdemo__fx rotdemo__fx--${fx.type}`}
            viewBox="0 0 100 100"
            aria-hidden="true"
            onAnimationEnd={() => setFx(null)}
          >
            {fx.type === "hit" && (
              <>
                <line className="fx-slash fx-slash--1" x1="22" y1="18" x2="78" y2="82" />
                <line className="fx-slash fx-slash--2" x1="72" y1="20" x2="28" y2="76" />
                <g className="fx-sparks">
                  <circle cx="30" cy="34" r="1.6" />
                  <circle cx="68" cy="28" r="1.2" />
                  <circle cx="74" cy="64" r="1.5" />
                  <circle cx="36" cy="72" r="1.1" />
                </g>
              </>
            )}
            {fx.type === "heal" && (
              <>
                <circle className="fx-ring" cx="50" cy="50" r="30" />
                <circle className="fx-ring fx-ring--inner" cx="50" cy="50" r="18" />
                <g className="fx-plus">
                  <path d="M50 30 v8 M46 34 h8" />
                  <path d="M30 52 v6 M27 55 h6" />
                  <path d="M70 50 v6 M67 53 h6" />
                </g>
              </>
            )}
            {fx.type === "destroy" && (
              <g className="fx-shatter">
                <path d="M50 50 L20 22" />
                <path d="M50 50 L82 30" />
                <path d="M50 50 L76 78" />
                <path d="M50 50 L26 80" />
                <path d="M50 50 L50 14" />
                <path d="M50 50 L14 54" />
              </g>
            )}
          </svg>
        )}
      </div>

      <p className="rotdemo__status" aria-live="polite">{state.label}</p>

      <div className="rotdemo__controls">
        {!destroyed ? (
          <>
            <button className="rotdemo__btn rotdemo__btn--dmg" onClick={hit}>
              「Infliggi danno」
            </button>
            <button
              className="rotdemo__btn rotdemo__btn--heal"
              onClick={heal}
              disabled={damage === 0}
            >
              「Cura」
            </button>
          </>
        ) : (
          <button className="rotdemo__btn rotdemo__btn--reset" onClick={reset}>
            Reset
          </button>
        )}
      </div>

      <p className="rotdemo__note">
        Niente segnalini vita, niente dadi: lo stato dell'unità è il suo orientamento.
      </p>
    </div>
  );
}

export default RotationDemo;
