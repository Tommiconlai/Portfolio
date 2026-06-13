import { useNavigate, useLocation } from "react-router-dom";
import { NAV_ORDER } from "../hooks/useTabKeys";

function HudHeader({ windowMode = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  const idx = NAV_ORDER.findIndex((n) => n.path === location.pathname);
  const current = idx === -1 ? NAV_ORDER[0] : NAV_ORDER[idx];

  // Modalità "finestra PC": barra del titolo + soli window controls.
  if (windowMode) {
    const seg = location.pathname.split("/").filter(Boolean).pop() || "app";
    const winTitle = `${seg.toUpperCase()}.EXE`;
    return (
      <header className="hud-header hud-header--window">
        <span className="hud-header__winname">{winTitle}</span>
        <div className="hud-winctl">
          <button aria-label="Indietro" onClick={() => navigate(-1)}>_</button>
          <button aria-label="Massimizza" tabIndex={-1}>□</button>
          <button aria-label="Chiudi (torna alla hero)" onClick={() => navigate("/")}>×</button>
        </div>
      </header>
    );
  }

  return (
    <header className="hud-header">
      <span className="hud-header__crumb">
        CV / <b>GABRIELE_TOMASSO</b>
      </span>

      <h1 className="hud-header__title">{current.label}</h1>

      <div className="hud-progress" aria-hidden="true">
        {NAV_ORDER.map((n, i) => (
          <span key={n.path} className={i <= idx ? "on" : ""} />
        ))}
      </div>

      <div className="hud-winctl">
        <button aria-label="Minimizza" tabIndex={-1}>_</button>
        <button aria-label="Massimizza" tabIndex={-1}>□</button>
        <button aria-label="Chiudi (torna alla hero)" onClick={() => navigate("/")}>×</button>
      </div>
    </header>
  );
}

export default HudHeader;
