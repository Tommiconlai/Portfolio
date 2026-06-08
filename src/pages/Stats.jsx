import { motion as Motion } from "framer-motion";
import { Mail, Code2, Briefcase, Palette, Globe } from "lucide-react";
import Panel from "../components/Panel";
import HexIcon from "../components/HexIcon";
import { identity, contacts, skills } from "../data/profile";

// lucide ha rimosso le icone brand: mappo i nomi-profilo a icone generiche.
const ICONS = { Mail, Github: Code2, Linkedin: Briefcase, Dribbble: Palette, Globe };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function Stats() {
  return (
    <>
      <title>Stats — Gabriele Tomasso</title>
      <meta name="description" content="Skills e contatti di Gabriele Tomasso: design, sviluppo, game e soft skills." />
      <p className="page-head">// PERSONAL_INFORMATION</p>

      <Motion.div className="stats-grid" variants={container} initial="hidden" animate="show">
        <Panel label="PROFILE" className="profile-card">
          <img className="profile-card__photo" src={identity.photo} alt={identity.name} />
          <span className="profile-card__name">{identity.name}</span>
          <span className="profile-card__roles">{identity.roles.join(" · ")}</span>
          <span className="profile-card__level">LEVEL <b>{identity.level}</b></span>
          <p className="quote">{identity.quote}</p>
        </Panel>

        <div className="skill-cols">
          {skills.map((s) => (
            <Panel key={s.group} label={s.group}>
              <div className="skill-block__items">
                {s.items.map((it) => (
                  <span key={it} className="skill-chip">{it}</span>
                ))}
              </div>
            </Panel>
          ))}

          <Panel label="CONTACTS" className="contacts-panel">
            <div className="contacts-row">
              {contacts.map((c) => {
                const Icon = ICONS[c.icon] || Globe;
                const ext = c.href.startsWith("http");
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={ext ? "_blank" : undefined}
                    rel={ext ? "noopener noreferrer" : undefined}
                    aria-label={c.label}
                  >
                    <HexIcon label={c.label}>
                      <Icon size={24} />
                    </HexIcon>
                  </a>
                );
              })}
            </div>
          </Panel>
        </div>
      </Motion.div>
    </>
  );
}

export default Stats;
