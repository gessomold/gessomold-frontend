import { motion, useScroll, useSpring } from "motion/react";

/** Barra fina de progresso de leitura fixa no topo da página. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-linear-to-r from-primary to-primary-dark"
      style={{ scaleX }}
    />
  );
}
