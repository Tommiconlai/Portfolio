import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function Intro() {
  const navigate = useNavigate();
  const introRef = useRef(null);
  const rafRef = useRef(0);

  // tilt 3D di pagina: ogni elemento [data-tilt] ruota verso il puntatore
  // rispetto al proprio centro (clamp a ±mezzo elemento = angolo massimo).
  // CSS vars --rx/--ry consumate da wrapper/regola .tilt-3d, così non
  // confliggono con i transform di framer; data-tilt = moltiplicatore.
  const tiltMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { clientX, clientY } = e;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const els = introRef.current?.querySelectorAll("[data-tilt]") ?? [];
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        const k = Number(el.dataset.tilt) || 1;
        const x = clamp((clientX - r.left - r.width / 2) / r.width, -0.5, 0.5);
        const y = clamp((clientY - r.top - r.height / 2) / r.height, -0.5, 0.5);
        el.style.setProperty("--ry", `${(x * 18 * k).toFixed(2)}deg`);
        el.style.setProperty("--rx", `${(-y * 14 * k).toFixed(2)}deg`);
      });
    });
  };
  const tiltReset = () => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    introRef.current?.querySelectorAll("[data-tilt]").forEach((el) => {
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--rx", "0deg");
    });
  };
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <Motion.div
      ref={introRef}
      className="intro"
      onMouseMove={tiltMove}
      onMouseLeave={tiltReset}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <title>Gabriele Tomasso — Portfolio</title>

      {/* barra di "tear" orizzontale che spazza lo schermo a intervalli */}
      <span className="intro__tear" aria-hidden="true" />

      <span className="intro__readout intro__readout--tl tilt-3d" data-tilt="0.7">
        SYS_BOOT // OK<br />CHARGE ▰▰▰▰▰ 100%<br />ENERGY_LEAK: NONE
      </span>
      <span className="intro__tip tilt-3d" data-tilt="0.7">
        Best experienced with your <b>mouse</b>
      </span>
      <span className="intro__readout intro__readout--br tilt-3d" data-tilt="0.7">
        PORTFOLIO_v.26<br />STATUS: ONLINE
      </span>

      <Motion.p
        className="intro__small"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* wrapper tilt: framer anima il transform del <p>, il tilt vive qui */}
        <span className="tilt-3d" data-tilt="0.8">Welcome to</span>
      </Motion.p>
      <Motion.h1
        className="intro__title"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* glitch: base + due layer cromatici clip-slice (solo CSS) */}
        <span className="glitch tilt-3d" data-tilt="0.5">
          <span className="glitch__base">My <span className="accent">Portfolio</span></span>
          <span className="glitch__layer glitch__layer--r" aria-hidden="true">My <span className="accent">Portfolio</span></span>
          <span className="glitch__layer glitch__layer--c" aria-hidden="true">My <span className="accent">Portfolio</span></span>
        </span>
      </Motion.h1>

      <Motion.button
        className="intro__start"
        data-tilt
        onClick={() => navigate("/stats")}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* wrapper 3D: tilt dal puntatore, label su un piano Z più alto */}
        <span className="intro__start-3d">
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
        </span>
      </Motion.button>
      <p className="intro__hint tilt-3d" data-tilt="0.8">Click START to view</p>
    </Motion.div>
  );
}

export default Intro;
