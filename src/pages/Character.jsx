import { motion } from "framer-motion";
import { Palette, MapPin, Heart } from "lucide-react";
import Panel from "../components/Panel";
import HexIcon from "../components/HexIcon";
import { identity, bio, miniStats } from "../data/profile";

const ICONS = { Palette, MapPin, Heart };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function Character() {
  return (
    <>
      <title>Character — Gabriele Tomasso</title>
      <meta name="description" content="Bio di Gabriele Tomasso: UI/UX designer e sviluppatore con background in game design." />
      <p className="page-head">// CHARACTER_DOSSIER</p>

      <motion.div className="char-grid" variants={container} initial="hidden" animate="show">
        <Panel label="ID" className="profile-card">
          <img className="profile-card__photo" src={identity.photo} alt={identity.name} />
          <span className="profile-card__name">{identity.name}</span>
          <span className="profile-card__roles">{identity.location}</span>
        </Panel>

        <Panel label="BIO">
          <div className="char-bio">
            {bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="char-ministats">
            {miniStats.map((m) => {
              const Icon = ICONS[m.icon] || Palette;
              return (
                <HexIcon key={m.label} label={m.label}>
                  <Icon size={22} />
                </HexIcon>
              );
            })}
          </div>
        </Panel>
      </motion.div>
    </>
  );
}

export default Character;
