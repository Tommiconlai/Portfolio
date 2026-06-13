import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

// 404 in stile HUD: stesso linguaggio del fallback "NO_SIGNAL" della gallery.
function NotFound() {
  return (
    <>
      <title>404 — Gabriele Tomasso</title>
      <meta name="description" content="Pagina non trovata." />
      <p className="page-head">// SIGNAL_LOST · ERROR_404</p>

      <Motion.div
        className="notfound"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Motion.span className="notfound__code" variants={item}>404</Motion.span>
        <Motion.h2 className="notfound__title" variants={item}>Segnale perso</Motion.h2>
        <Motion.p className="notfound__msg" variants={item}>
          La rotta richiesta non esiste o è stata spostata. Torna alla base per
          continuare l'esplorazione.
        </Motion.p>
        <Motion.div variants={item}>
          <Link className="notfound__back" to="/stats">↩ TORNA ALLA BASE</Link>
        </Motion.div>
      </Motion.div>
    </>
  );
}

export default NotFound;
