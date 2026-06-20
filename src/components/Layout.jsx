import { Outlet, useLocation } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import HudFrame from "./HudFrame";
import HudHeader from "./HudHeader";
import HudNav from "./HudNav";
import useTabKeys from "../hooks/useTabKeys";

// Shell persistente: frame/header/nav fissi, solo l'Outlet anima al cambio rotta.
export default function Layout() {
  const location = useLocation();
  useTabKeys();

  // Le route di dettaglio progetto diventano una "finestra PC":
  // niente nav bassa, header ridotto ai soli window controls.
  const windowMode = location.pathname.startsWith("/projects");

  return (
    <div className={`app-shell ${windowMode ? "app-shell--window" : ""}`}>
      <HudFrame />
      <HudHeader windowMode={windowMode} />

      <main className={`hud-content ${windowMode ? "hud-content--window" : ""}`}>
        {/* key sul pathname: ogni rotta rimonta e rigioca l'entrata. Niente
            AnimatePresence: con <Outlet/> il wrapper uscente mostrerebbe
            comunque la rotta nuova (doppione) e l'exit ri-triggererebbe i panel. */}
        <Motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </Motion.div>
      </main>

      {!windowMode && <HudNav />}
    </div>
  );
}
