import { ChevronRight, Dot } from "lucide-react";
import Banner from "../ components/Banner";
import Footer from "../ components/Footer";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export function Page() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const ano = new Date().getFullYear() - 2001;

  useEffect(() => {
    const controls = animate(count, ano, { duration: 2 });
    return () => controls.stop();
  }, [count, ano]);

  return (
    <>
      <section className="w-full h-75 bg-secondary text-white">
        <div className=" w-118 h-49 grid gap-2 grid-cols-1 ml-4 absolute top-20 ">
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

            <Dot className="text-primary relative z-10" />
            <p className="text-white text-sm font-semibold relative z-10">
              LÍDER EM COXIM E REGIÃO
            </p>
          </div>

          <h1 className="text-4xl font-bold">
            MAIS DE <motion.span>{rounded}</motion.span> ANOS DE EXCELENCIA
          </h1>
          <div className="text-gray-500">
            <p>
              Transformamos ambientes com precisão e elegância. Atendemos Coxim
              e região com material de primeira linha e acabamento impecável.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 absolute top-75 ml-4">
          <a
            href="https://api.whatsapp.com/send?phone=5567998336427"
            target="_blank"
            className="bg-primary hover:bg-primary/90 transition-all text-sm font-semibold rounded-lg flex gap-1 items-center text-white px-4 py-2 cursor-pointer"
          >
            Orçamento sem compromisso <ChevronRight />
          </a>
          <p className="text-xs text-gray-500">Ou ligue agora: </p>{" "}
          <a
            href="tel:+5567998336427"
            className="text-white cursor-pointer hover:text-primary"
          >
            (67) 99833-6427
          </a>
        </div>
      </section>

      <section>
        <h2 className="flex justify-center font-semibold text-xl">
          Nossos Serviços
        </h2>
      </section>

      <Banner />

      <Footer />
    </>
  );
}
