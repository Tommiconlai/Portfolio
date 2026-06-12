import { NavLink } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { NAV_ORDER } from "../hooks/useTabKeys";

function HudNav() {
  return (
    <Motion.nav
      className="hud-nav"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
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
    </Motion.nav>
  );
}

export default HudNav;
