import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const NAV_ORDER = [
  { path: "/stats", label: "STATS" },
  { path: "/character", label: "CHARACTER" },
  { path: "/quests", label: "QUESTS" },
  { path: "/achievements", label: "ACHIEVEMENTS" },
  { path: "/gallery", label: "GALLERY" },
];

// Q = tab precedente, E = successiva. Frecce alias. Esc → hero.
export default function useTabKeys() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      const idx = NAV_ORDER.findIndex((n) => n.path === location.pathname);

      if (e.key === "Escape") {
        navigate("/");
        return;
      }
      if (idx === -1) return;

      let next = null;
      if (e.key === "q" || e.key === "Q" || e.key === "ArrowLeft") {
        next = (idx - 1 + NAV_ORDER.length) % NAV_ORDER.length;
      } else if (e.key === "e" || e.key === "E" || e.key === "ArrowRight") {
        next = (idx + 1) % NAV_ORDER.length;
      }
      if (next !== null) {
        e.preventDefault();
        navigate(NAV_ORDER[next].path);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, location.pathname]);
}
