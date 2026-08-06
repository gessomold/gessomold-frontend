import { motion } from "motion/react";
import whatsapp from "../../assets/images/whatsapp.svg";

/** Botão flutuante de WhatsApp, sempre acessível em qualquer tela. */
export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=5567998336427"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 220, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift"
    >
      <img src={whatsapp} alt="" className="h-8 w-8" />
    </motion.a>
  );
}
