import { motion as Motion } from "framer-motion";
import Panel from "../components/Panel";
import { stagger } from "../anim";
import { achievements } from "../data/profile";

const container = stagger(0.08);

function Achievements() {
  return (
    <>
      <title>Achievements — Gabriele Tomasso</title>
      <meta name="description" content="Formazione di Gabriele Tomasso come trofei sbloccati." />
      <p className="page-head">// UNLOCKED_BADGES · {achievements.length} CLEARED</p>

      <Motion.div className="quest-list" variants={container} initial="hidden" animate="show">
        {achievements.map((a, i) => (
          <Panel key={i} label={`BADGE_${String(i + 1).padStart(2, "0")}`}>
            <div className="quest">
              <div className="quest__top">
                <span className="quest__title">{a.title}</span>
                <span className="quest__status quest__status--done">UNLOCKED</span>
                <span className="quest__date">{a.date}</span>
              </div>
              <span className="quest__org">{a.org}</span>
            </div>
          </Panel>
        ))}
      </Motion.div>
    </>
  );
}

export default Achievements;
