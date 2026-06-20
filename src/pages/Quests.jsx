import { motion as Motion } from "framer-motion";
import Panel from "../components/Panel";
import { stagger } from "../anim";
import { quests } from "../data/profile";

const container = stagger(0.09);

function Quests() {
  return (
    <>
      <title>Quests — Gabriele Tomasso</title>
      <meta name="description" content="Esperienze lavorative di Gabriele Tomasso come missioni." />
      <p className="page-head">// MISSION_LOG · {quests.length} ENTRIES</p>

      <Motion.div className="quest-list" variants={container} initial="hidden" animate="show">
        {quests.map((q, i) => (
          <Panel key={i} label={`QUEST_${String(i + 1).padStart(2, "0")}`}>
            <div className="quest">
              <div className="quest__top">
                <span className="quest__title">{q.title}</span>
                <span
                  className={`quest__status ${
                    q.status === "active" ? "quest__status--active" : "quest__status--done"
                  }`}
                >
                  {q.status === "active" ? "ACTIVE" : "COMPLETED"}
                </span>
                <span className="quest__date">{q.date}</span>
              </div>
              <span className="quest__org">{q.org}</span>
              <ul>
                {q.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </Panel>
        ))}
      </Motion.div>
    </>
  );
}

export default Quests;
