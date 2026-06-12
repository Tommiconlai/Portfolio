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

// Direzioni di movimento base (carta dritta). Set asimmetrico così la
// rotazione cambia in modo visibile le caselle raggiungibili.
const BASE_DIRS = ["N", "NE", "E"];

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

  const destroyed = damage >= 3;
  const state = STATES[damage];
  const reachable = destroyed ? [] : rotateDirs(BASE_DIRS, damage).map((d) => DIR_TO_CELL[d]);

  const hit = () => setDamage((d) => Math.min(3, d + 1));
  const heal = () => setDamage((d) => Math.max(0, d - 1));
  const reset = () => setDamage(0);

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
              <span className="rotdemo__arrow rotdemo__arrow--n">▲</span>
              <span className="rotdemo__arrow rotdemo__arrow--ne">◥</span>
              <span className="rotdemo__arrow rotdemo__arrow--e">▶</span>
            </div>
          )}
        </div>
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
