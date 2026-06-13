import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

function Intro() {
  const navigate = useNavigate();

  return (
    <Motion.div
      className="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <title>Gabriele Tomasso — Portfolio</title>

      {/* barra di "tear" orizzontale che spazza lo schermo a intervalli */}
      <span className="intro__tear" aria-hidden="true" />

      <span className="intro__readout intro__readout--tl">
        SYS_BOOT // OK<br />CHARGE ▰▰▰▰▰ 100%<br />ENERGY_LEAK: NONE
      </span>
      <span className="intro__tip">
        Best experienced with your <b>mouse</b>
      </span>
      <span className="intro__readout intro__readout--br">
        PORTFOLIO_v.26<br />STATUS: ONLINE
      </span>

      <Motion.p
        className="intro__small"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to
      </Motion.p>
      <Motion.h1
        className="intro__title"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* glitch: base + due layer cromatici clip-slice (solo CSS) */}
        <span className="glitch">
          <span className="glitch__base">My <span className="accent">Portfolio</span></span>
          <span className="glitch__layer glitch__layer--r" aria-hidden="true">My <span className="accent">Portfolio</span></span>
          <span className="glitch__layer glitch__layer--c" aria-hidden="true">My <span className="accent">Portfolio</span></span>
        </span>
      </Motion.h1>

      <Motion.button
        className="intro__start"
        onClick={() => navigate("/stats")}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* sagoma sci-fi: outline trapezio + pannello interno + ali sui lati */}
        <svg
          className="intro__start-svg"
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className="start-outline" d="M16 6 L384 6 L318 88 L82 88 Z" />
          <path className="start-fill" d="M48 16 L352 16 L302 78 L98 78 Z" />
          <path className="start-wing" d="M29 20 L43 20 L95 84 L81 84 Z" />
          <path className="start-wing" d="M371 20 L357 20 L305 84 L319 84 Z" />
        </svg>
        <span className="intro__start-label">START</span>
      </Motion.button>
      <p className="intro__hint">Click START to view</p>
    </Motion.div>
  );
}

export default Intro;
