import { motion as Motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// Entrata "modulo HUD": parte da un quadrato rosso (come l'angolo in alto a
// sinistra gia' presente) e si ingrandisce fino a riempire il pannello; poi il
// rosso sfuma rivelando sfondo + contenuti. Lo stagger arriva dalla pagina.
const panelVariants = {
  hidden: {
    backgroundColor: "rgba(18, 18, 24, 0)",
    borderColor: "rgba(229, 35, 43, 0)",
    "--rv": 0,
  },
  show: {
    backgroundColor: "rgba(18, 18, 24, 0.82)", // = var(--panel)
    borderColor: "#2a2a32", // = var(--line)
    "--rv": 1,
    transition: {
      backgroundColor: { duration: 0.3, delay: 0.42 },
      borderColor: { duration: 0.3, delay: 0.42 },
      "--rv": { duration: 0.3, delay: 0.44 },
    },
  },
};

// Il quadrato rosso: scala da 12px fino a superare il pannello (clippato dal
// wrapper), poi sfuma. transform + opacity = OK con reduced-motion globale.
const growVariants = {
  hidden: { scale: 1, opacity: 1 },
  show: {
    scale: 70,
    opacity: 0,
    transition: {
      scale: { duration: 0.52, ease: [0.42, 0, 0.2, 1] },
      opacity: { duration: 0.22, delay: 0.44 },
    },
  },
};

// prefers-reduced-motion: niente crescita/transform, solo un fade pulito.
const reducedVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25, ease: EASE } },
};

// Pannello HUD con bordi tagliati + label mono opzionale.
function Panel({ label, children, className = "", ...rest }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Motion.div className={`panel ${className}`} variants={reducedVariants} {...rest}>
        {label && <span className="panel__label">{label}</span>}
        {children}
      </Motion.div>
    );
  }

  return (
    <Motion.div className={`panel panel--grow ${className}`} variants={panelVariants} {...rest}>
      <span className="panel__growclip" aria-hidden="true">
        <Motion.span className="panel__grow" variants={growVariants} />
      </span>
      {label && <span className="panel__label">{label}</span>}
      {children}
    </Motion.div>
  );
}

export default Panel;
