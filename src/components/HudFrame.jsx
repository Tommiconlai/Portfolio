import { motion } from "framer-motion";

// Overlay decorativo fisso: cornice, angoli a L, tacche, scanline, vignetta.
function HudFrame() {
  return (
    <div className="hud-frame" aria-hidden="true">
      <motion.div
        className="hud-frame__border"
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="hud-bracket hud-bracket--tl" />
      <span className="hud-bracket hud-bracket--tr" />
      <span className="hud-bracket hud-bracket--bl" />
      <span className="hud-bracket hud-bracket--br" />
      <span className="hud-tick hud-tick--top" />
      <div className="hud-scanline" />
      <div className="hud-vignette" />
    </div>
  );
}

export default HudFrame;
