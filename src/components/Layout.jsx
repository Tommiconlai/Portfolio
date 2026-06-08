import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HudFrame from "./HudFrame";
import HudHeader from "./HudHeader";
import HudNav from "./HudNav";
import QuickTips from "./QuickTips";
import useTabKeys from "../hooks/useTabKeys";

// Shell persistente: frame/header/nav fissi, solo l'Outlet anima al cambio rotta.
export default function Layout() {
  const location = useLocation();
  useTabKeys();

  return (
    <div className="app-shell">
      <HudFrame />
      <HudHeader />
      <QuickTips />

      <main className="hud-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <HudNav />
    </div>
  );
}
