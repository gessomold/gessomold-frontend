import {
  BrickWallShield,
  ChevronRight,
  Dot,
  PencilRuler,
  ShieldCheck,
} from "lucide-react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import type { Variants } from "motion/react";
import { useEffect } from "react";
import Badge from "../Badge";
import fachada from "../../assets/images/fachada.webp";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const ano = new Date().getFullYear() - 2001;

  useEffect(() => {
    const controls = animate(count, ano, { duration: 2 });
    return () => controls.stop();
  }, [count, ano]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink bg-cover bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${fachada})` }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/75 to-ink/20" />
      <div className="absolute inset-0 bg-black/25" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 pt-28 pb-24 sm:px-12 lg:px-20"
      >
        <div className="max-w-3xl">
          <motion.div
            variants={item}
            className="relative mb-6 flex max-w-fit items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <motion.span
              className="absolute top-0 h-full w-14 -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent"
              initial={{ left: "-100%" }}
              animate={{ left: "200%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
                repeatDelay: 1.2,
              }}
              aria-hidden="true"
            />
            <Dot className="size-3 text-primary" />
            <p className="relative z-10 text-sm font-semibold tracking-wide text-white">
              MOLD GESSO · MOLDGESSO · LÍDER EM COXIM E REGIÃO
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            <span className="mb-3 block text-2xl font-bold tracking-wide text-primary-light sm:text-3xl">
              MOLD GESSO – MOLDGESSO
            </span>
            MAIS DE{" "}
            <motion.span className="inline-block min-w-[2ch] rounded-xl bg-primary px-2 py-0.5 text-center tabular-nums shadow-lift">
              {rounded}
            </motion.span>{" "}
            ANOS <br />
            DE EXCELÊNCIA EM GESSO E DRYWALL
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300"
          >
            A Moldgesso transforma ambientes com precisão e elegância.
            Atendemos Coxim e região com material de primeira linha e
            acabamento impecável em gesso e drywall.
          </motion.p>
        </div>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://api.whatsapp.com/send?phone=5567998336427"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lift transition-colors hover:bg-primary-dark"
          >
            Solicitar Visita Técnica
            <ChevronRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>

          <div className="flex items-center gap-x-1.5">
            <p className="text-sm text-gray-400">Ou ligue agora:</p>
            <a
              href="tel:+5567998336427"
              className="text-sm font-semibold text-white transition-colors hover:text-primary-light"
            >
              (67) 99833-6427
            </a>
          </div>
        </motion.div>

        <motion.span
          variants={item}
          className="h-px w-full max-w-3xl bg-white/10"
        />

        <motion.div variants={item} className="flex flex-wrap gap-x-10 gap-y-6">
          <Badge
            titulo="5 Anos de Garantia"
            descricao="Segurança Total"
            icon={<ShieldCheck color="#FFF" />}
          />
          <Badge
            titulo="Material Premium"
            descricao="Melhores Marcas"
            icon={<BrickWallShield color="#FFF" />}
          />
          <Badge
            titulo="Acabamento Fino"
            descricao="Detalhe Perfeccionista"
            icon={<PencilRuler color="#FFF" />}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-white/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
