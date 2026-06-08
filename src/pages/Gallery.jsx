import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "../data/profile";

const TABS = ["Game", "Graphic", "Website"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function Gallery() {
  const [tab, setTab] = useState("Game");
  const [active, setActive] = useState(null);
  const items = gallery[tab] || [];

  return (
    <>
      <title>Gallery — Gabriele Tomasso</title>
      <meta name="description" content="Progetti di Gabriele Tomasso: game, graphic e website." />
      <p className="page-head">// PROJECT_ARCHIVE</p>

      <div className="gallery-tabs">
        {TABS.map((t) => (
          <button
            key={t}
            className={`gallery-tab ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <motion.div
        className="gallery-grid"
        variants={container}
        initial="hidden"
        animate="show"
        key={tab}
      >
        {items.map((p, i) => (
          <motion.div
            className="gcard"
            key={p.title + i}
            variants={item}
            onClick={() => setActive(p)}
            whileHover={{ y: -4 }}
          >
            {p.image ? (
              <img className="gcard__img" src={p.image} alt={p.title} />
            ) : (
              <div className="gcard__img-fallback">{p.title}</div>
            )}
            <div className="gcard__body">
              <div className="gcard__title">{p.title}</div>
              <div className="gcard__role">{p.role}</div>
              <div className="gcard__tools">{p.tools}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="gmodal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="gmodal"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="gmodal__close" onClick={() => setActive(null)} aria-label="Chiudi">
                ×
              </button>
              {active.image && <img className="gmodal__img" src={active.image} alt={active.title} />}
              <h2>{active.title}</h2>
              <div className="gmodal__meta">{active.role} — {active.tools}</div>
              <p>{active.desc}</p>
              {active.link &&
                (active.link.startsWith("http") ? (
                  <a className="gmodal__link" href={active.link} target="_blank" rel="noopener noreferrer">
                    OPEN_PROJECT →
                  </a>
                ) : (
                  <Link className="gmodal__link" to={active.link}>
                    OPEN_PROJECT →
                  </Link>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Gallery;
