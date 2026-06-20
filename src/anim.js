// variants per orchestrare l'entrata staggered dei figli
export const stagger = (each, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren: delay } },
});
