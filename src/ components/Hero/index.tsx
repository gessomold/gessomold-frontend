import {
  BrickWallShield,
  ChevronRight,
  Dot,
  PencilRuler,
  ShieldCheck,
} from "lucide-react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import Badge from "../Badge";

export default function Hero() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const ano = new Date().getFullYear() - 2001;

  useEffect(() => {
    const controls = animate(count, ano, { duration: 2 });
    return () => controls.stop();
  }, [count, ano]);

  return (
    <>
      <section
        className="
    relative
    min-h-screen
    flex
    items-center
    px-6 md:px-12 lg:px-20
    bg-[url('../assets/images/fachada.jpeg')]
    bg-cover
    bg-right
    bg-no-repeat
    overflow-hidden
  "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#06121e]/95 via-[#06121e]/80 to-transparent"></div>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-3xl flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <div className="relative overflow-hidden flex gap-1 max-w-fit rounded-3xl px-3 py-1 bg-secondary/70 border border-white/10 items-center text-sm backdrop-blur-sm">
              <motion.div
                className="absolute top-0 h-full w-12 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ left: "-100%" }}
                animate={{ left: "200%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />
              <Dot className="text-primary size-3" />
              <p className="text-white text-sm font-semibold">
                LÍDER EM COXIM E REGIÃO
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-2xl">
              MAIS DE{" "}
              <motion.span className="bg-primary tabular-nums rounded-md">{rounded}</motion.span> ANOS
              DE EXCELÊNCIA
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Transformamos ambientes com precisão e elegância. Atendemos Coxim
              e região com material de primeira linha e acabamento impecável.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap items-center">
            <a
              href="https://api.whatsapp.com/send?phone=5567998336427"
              target="_blank"
              className="bg-primary hover:bg-primary/90 transition-all text-sm font-semibold rounded-lg flex gap-2 items-center text-white px-6 py-3 shadow-xl"
            >
              Solicitar Visita Técnica <ChevronRight />
            </a>

            <div className="flex gap-x-1 items-center">
              <p className="text-sm text-gray-400">Ou ligue agora:</p>
              <a
                href="tel:+5567998336427"
                className="text-white hover:text-primary text-sm"
              >
                (67) 99833-6427
              </a>
            </div>
          </div>

          <span className="w-full max-w-3xl h-px bg-white/10"></span>

          <div className="flex flex-wrap gap-8">
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
          </div>
        </div>
      </section>
    </>
  );
}
