import { useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Code2, Briefcase, Globe } from "lucide-react";
import Panel from "../components/Panel";
import HexIcon from "../components/HexIcon";
import { identity, contacts, skills, bio } from "../data/profile";

// lucide ha rimosso le icone brand: mappo i nomi-profilo a icone generiche.
const ICONS = { Mail, Github: Code2, Linkedin: Briefcase, Globe };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// Nel profilo compaiono tutti i contatti tranne il portfolio (è questo sito).
const PROFILE_CONTACTS = contacts.filter((c) => c.label !== "Portfolio");

function Stats() {
  // click sul nome -> burst glitch + swap nome/alias
  const [showAlias, setShowAlias] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const timers = useRef([]);

  const toggleName = () => {
    if (glitching) return;
    setGlitching(true);
    timers.current = [
      setTimeout(() => setShowAlias((a) => !a), 180),
      setTimeout(() => setGlitching(false), 520),
    ];
  };

  const displayName = showAlias ? identity.alias : identity.name;
  const displayPhoto = showAlias ? identity.photoAlias : identity.photo;
  const glitchCls = `glitch glitch--click ${glitching ? "is-glitching" : ""}`;

  return (
    <>
      <title>Stats — Gabriele Tomasso</title>
      <meta name="description" content="Profilo, bio, skills e contatti di Gabriele Tomasso: design, sviluppo, game e soft skills." />
      <p className="page-head">// PERSONAL_INFORMATION</p>

      <Motion.div className="stats-grid" variants={container} initial="hidden" animate="show">
        <Panel label="PROFILE" className="profile-card">
          <div className={`profile-card__photo-wrap ${glitchCls}`}>
            <img className="profile-card__photo glitch__base" src={displayPhoto} alt={identity.name} />
            <img className="profile-card__photo glitch__layer glitch__layer--r" src={displayPhoto} alt="" aria-hidden="true" />
            <img className="profile-card__photo glitch__layer glitch__layer--c" src={displayPhoto} alt="" aria-hidden="true" />
          </div>
          <button
            type="button"
            className={`profile-card__name profile-card__name--toggle ${showAlias ? "is-alias" : ""}`}
            onClick={toggleName}
            aria-label={showAlias ? "Mostra nome" : "Mostra nickname"}
          >
            <span className={glitchCls}>
              <span className="glitch__base">{displayName}</span>
              <span className="glitch__layer glitch__layer--r" aria-hidden="true">{displayName}</span>
              <span className="glitch__layer glitch__layer--c" aria-hidden="true">{displayName}</span>
            </span>
          </button>
          <span className="profile-card__roles">{identity.roles.join(" · ")}</span>
          <span className="profile-card__level">LEVEL <b>{identity.level}</b></span>
          <div className="contacts-row contacts-row--compact">
            {PROFILE_CONTACTS.map((c) => {
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
                    <Icon size={20} />
                  </HexIcon>
                </a>
              );
            })}
          </div>
        </Panel>

        <div className="skill-cols">
          <Panel label="BIO" className="bio-panel">
            {bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Panel>

          {skills.map((s) => (
            <Panel key={s.group} label={s.group}>
              <div className="skill-block__items">
                {s.items.map((it) => (
                  <span key={it} className="skill-chip">{it}</span>
                ))}
              </div>
            </Panel>
          ))}
        </div>
      </Motion.div>
    </>
  );
}

export default Stats;
