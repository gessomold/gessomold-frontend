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
      <section className="flex flex-col gap-y-3 w-full min-h-75 bg-secondary text-white p-4">
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-col gap-y-1">
            <div className="relative overflow-hidden flex gap-1 max-w-58 rounded-3xl px-2 py-1 bg-secondary border border-[#353535] items-center text-sm">
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
              <Dot className="text-primary" />
              <p className="text-white text-sm font-semibold">
                LÍDER EM COXIM E REGIÃO
              </p>
            </div>
            <h1 className="text-4xl font-bold w-85">
              MAIS DE <motion.span>{rounded}</motion.span> ANOS DE EXCELENCIA
            </h1>
          </div>
          <div className="text-gray-500 w-85">
            <p>
              Transformamos ambientes com precisão e elegância. Atendemos Coxim
              e região com material de primeira linha e acabamento impecável.
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap items-center">
          <a
            href="https://api.whatsapp.com/send?phone=5567998336427"
            target="_blank"
            className="bg-primary hover:bg-primary/90 transition-all text-sm font-semibold rounded-lg flex gap-1 items-center text-white px-4 py-2 cursor-pointer"
          >
            Orçamento sem compromisso <ChevronRight />
          </a>
          <div className="flex gap-x-1 items-center">
            <p className="text-sm text-gray-500">Ou ligue agora: </p>{" "}
            <a
              href="tel:+5567998336427"
              className="text-white cursor-pointer hover:text-primary text-sm"
            >
              (67) 99833-6427
            </a>
          </div>
        </div>

        <span className="w-full h-0.5 bg-gray-500 my-5"></span>

        <div className="flex flex-wrap gap-5">
          <Badge
            titulo="5 Anos de Garantia"
            descricao="Segurança Total"
            icon={<ShieldCheck />}
          />
          <Badge
            titulo="Material Premium"
            descricao="Melhores Marcas"
            icon={<BrickWallShield />}
          />
          <Badge
            titulo="Acabamento Fino"
            descricao="Detalhe Perfeccionista"
            icon={<PencilRuler />}
          />
        </div>
      </section>
    </>
  );
}
