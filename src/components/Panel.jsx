import { motion } from "framer-motion";

// Pannello HUD con bordi tagliati + label mono opzionale.
function Panel({ label, children, className = "", ...rest }) {
  return (
    <motion.div
      className={`panel ${className}`}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0 },
      }}
      {...rest}
    >
      {label && <span className="panel__label">{label}</span>}
      {children}
    </motion.div>
  );
}

export default Panel;
