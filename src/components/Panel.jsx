import { motion as Motion } from "framer-motion";

// Entrata "modulo HUD che si accende": sale, scala e si toglie il blur con un
// ease deciso. Lo stagger arriva dal contenitore della pagina.
const panelVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.97, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

// Sheen rosso che attraversa il pannello una volta, in sync con la sua entrata
// (eredita lo stato "show" dal Panel padre, quindi segue lo stagger).
const sweepVariants = {
  hidden: { x: "-180%" },
  show: {
    // il bar e' largo 45% + overhang dello skew: serve x oltre ~270% per
    // uscire del tutto a destra, altrimenti resta una scia visibile.
    x: "300%",
    transition: { duration: 0.95, ease: [0.5, 0, 0.2, 1], delay: 0.08 },
  },
};

// Pannello HUD con bordi tagliati + label mono opzionale.
function Panel({ label, children, className = "", ...rest }) {
  return (
    <Motion.div className={`panel ${className}`} variants={panelVariants} {...rest}>
      <span className="panel__sweep" aria-hidden="true">
        <Motion.span className="panel__sweep-bar" variants={sweepVariants} />
      </span>
      {label && <span className="panel__label">{label}</span>}
      {children}
    </Motion.div>
  );
}

export default Panel;
