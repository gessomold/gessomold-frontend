import { ChevronRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-black/20 blur-3xl"
      />

      <Container className="relative z-10 flex flex-col items-center gap-y-6 py-16 text-center sm:py-20">
        <Reveal className="flex max-w-2xl flex-col gap-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para transformar seu ambiente?
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            Não perca tempo com amadores. Contrate quem tem mais de{" "}
            {new Date().getFullYear() - 2001} anos de experiência e garantia
            comprovada.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="https://api.whatsapp.com/send?phone=5567998336427"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lift transition-colors hover:bg-gray-50"
          >
            <MessageCircle size={18} />
            Falar com um especialista agora
            <ChevronRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </Reveal>
      </Container>
    </section>
  );
}
