import { motion } from "framer-motion";
import { Code2, Gamepad2, GraduationCap, Trophy } from "lucide-react";
import Panel from "../components/Panel";
import HexIcon from "../components/HexIcon";
import { achievements } from "../data/profile";

const ICONS = { Code2, Gamepad2, GraduationCap };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Achievements() {
  return (
    <>
      <title>Achievements — Gabriele Tomasso</title>
      <meta name="description" content="Formazione di Gabriele Tomasso come trofei sbloccati." />
      <p className="page-head">// UNLOCKED_BADGES</p>

      <motion.div className="ach-grid" variants={container} initial="hidden" animate="show">
        {achievements.map((a, i) => {
          const Icon = ICONS[a.icon] || Trophy;
          return (
            <Panel key={i} label={`BADGE_${String(i + 1).padStart(2, "0")}`}>
              <div className="ach">
                <HexIcon>
                  <Icon size={24} />
                </HexIcon>
                <div>
                  <div className="ach__title">{a.title}</div>
                  <div className="ach__org">{a.org}</div>
                  <div className="ach__date">{a.date}</div>
                </div>
              </div>
            </Panel>
          );
        })}
      </motion.div>
    </>
  );
}

export default Achievements;
