import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function QuickTips() {
  const [open, setOpen] = useState(false);
  return (
    <div className="quick-tips">
      <button
        className="quick-tips__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        QUICK TIPS
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="quick-tips__panel"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <h4>COMANDI</h4>
            <ul>
              <li><kbd>Q</kbd> sezione precedente</li>
              <li><kbd>E</kbd> sezione successiva</li>
              <li><kbd>←</kbd><kbd>→</kbd> alias frecce</li>
              <li><kbd>Esc</kbd> torna alla hero</li>
              <li><kbd>🖱</kbd> click sulle tab</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QuickTips;
