import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_ORDER } from "../hooks/useTabKeys";

function HudNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const idx = NAV_ORDER.findIndex((n) => n.path === location.pathname);

  const go = (delta) => {
    const base = idx === -1 ? 0 : idx;
    const next = (base + delta + NAV_ORDER.length) % NAV_ORDER.length;
    navigate(NAV_ORDER[next].path);
  };

  return (
    <motion.nav
      className="hud-nav"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <button className="hud-key" onClick={() => go(-1)} aria-label="Sezione precedente">
        <kbd>Q</kbd> PREV
      </button>

      <div className="hud-nav__tabs">
        {NAV_ORDER.map((n, i) => (
          <NavLink
            key={n.path}
            to={n.path}
            className={({ isActive }) => `hud-tab ${isActive ? "active" : ""}`}
          >
            <span className="hud-tab__idx">{String(i + 1).padStart(2, "0")}</span>
            {n.label}
          </NavLink>
        ))}
      </div>

      <button className="hud-key" onClick={() => go(1)} aria-label="Sezione successiva">
        <kbd>E</kbd> NEXT
      </button>
    </motion.nav>
  );
}

export default HudNav;
