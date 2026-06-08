import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Intro() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <title>Gabriele Tomasso — Portfolio</title>

      <span className="intro__readout intro__readout--tl">
        SYS_BOOT // OK<br />CHARGE ▰▰▰▰▰ 100%<br />ENERGY_LEAK: NONE
      </span>
      <span className="intro__tip">
        Interoperable with keyboard <b>Q</b> | <b>E</b> and your mouse
      </span>
      <span className="intro__readout intro__readout--br">
        BUGMOTH_STUDIO<br />PORTFOLIO_v.26<br />STATUS: ONLINE
      </span>

      <motion.p
        className="intro__small"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to
      </motion.p>
      <motion.h1
        className="intro__title"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        My <span className="accent">Portfolio</span>
      </motion.h1>

      <motion.button
        className="intro__start"
        onClick={() => navigate("/stats")}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        START
      </motion.button>
      <p className="intro__hint">Click START to view</p>
    </motion.div>
  );
}

export default Intro;
