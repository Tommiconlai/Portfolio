import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { NAV_ORDER } from "../hooks/useTabKeys";

function HudHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const idx = NAV_ORDER.findIndex((n) => n.path === location.pathname);
  const current = idx === -1 ? NAV_ORDER[0] : NAV_ORDER[idx];

  return (
    <header className="hud-header">
      <button className="hud-header__back" onClick={() => navigate(-1)} aria-label="Indietro">
        <ChevronLeft size={14} /> BACK
      </button>

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
