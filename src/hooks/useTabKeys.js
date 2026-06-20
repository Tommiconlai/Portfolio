import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NAV_ORDER = [
  { path: "/stats", label: "STATS" },
  { path: "/quests", label: "QUESTS" },
  { path: "/achievements", label: "ACHIEVEMENTS" },
  { path: "/gallery", label: "GALLERY" },
];

// Esc → torna alla hero.
export default function useTabKeys() {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);
}
