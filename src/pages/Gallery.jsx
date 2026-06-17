import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { gallery } from "../data/profile";

const TABS = ["Game", "Graphic", "Website"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 18, scale: 0.97, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

function Gallery() {
  const [tab, setTab] = useState("Game");
  const [active, setActive] = useState(null);
  const items = gallery[tab] || [];
  const modalRef = useRef(null);
  const triggerRef = useRef(null); // card che ha aperto la modale, per riportarci il focus

  const openProject = (p, e) => {
    triggerRef.current = e.currentTarget;
    setActive(p);
  };
  const closeModal = () => {
    setActive(null);
    triggerRef.current?.focus?.();
  };

  // all'apertura porta il focus nella modale (così Esc/tab restano dentro)
  useEffect(() => {
    if (active) modalRef.current?.focus();
  }, [active]);

  return (
    <>
      <title>Gallery — Gabriele Tomasso</title>
      <meta name="description" content="Progetti di Gabriele Tomasso: game, graphic e website." />
      <p className="page-head">// PROJECT_ARCHIVE · {items.length} FILES</p>

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

      <Motion.div
        className="gallery-grid"
        variants={container}
        initial="hidden"
        animate="show"
        key={tab}
      >
        {items.map((p, i) => (
          <Motion.div
            className="gcard"
            role="button"
            tabIndex={0}
            aria-label={`Apri dettagli: ${p.title}`}
            key={p.title + i}
            variants={item}
            onClick={(e) => openProject(p, e)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openProject(p, e);
              }
            }}
            whileHover={{ y: -4 }}
          >
            {p.image ? (
              <img className="gcard__img" src={p.image} alt={p.title} loading="lazy" decoding="async" />
            ) : (
              <div className="gcard__img-fallback" aria-hidden="true">
                <span className="gcard__nosig">NO_SIGNAL</span>
                <span className="gcard__nosig-title">{p.title}</span>
              </div>
            )}
            <div className="gcard__body">
              <div className="gcard__title">{p.title}</div>
              <div className="gcard__role">{p.role}</div>
              <div className="gcard__tools">{p.tools}</div>
            </div>
          </Motion.div>
        ))}
      </Motion.div>

      {/* portal: il wrapper di rotta ha filter inline (containing block per
          fixed) — su body il backdrop copre davvero il viewport, sopra header/nav */}
      {createPortal(
        <AnimatePresence>
        {active && (
          <Motion.div
            className="gmodal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <Motion.div
              className="gmodal"
              ref={modalRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                // Esc chiude la modale e NON propaga (altrimenti useTabKeys porta a home)
                if (e.key === "Escape") {
                  e.stopPropagation();
                  closeModal();
                }
              }}
            >
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
            </Motion.div>
          </Motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

export default Gallery;
