import { CircleX, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type ModalServicoProps = {
  tituloModal: string;
  imagensModal: string[];
  descricaoModal: string;
  onClose?: () => void;
};

export default function ModalServico({
  tituloModal,
  imagensModal,
  descricaoModal,
  onClose,
}: ModalServicoProps) {
  const [indiceImagem, setIndiceImagem] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const fecharRef = useRef<HTMLButtonElement>(null);

  const imagemAnterior = useCallback(() => {
    setIndiceImagem((prev) =>
      prev === 0 ? imagensModal.length - 1 : prev - 1,
    );
  }, [imagensModal.length]);

  const proximaImagem = useCallback(() => {
    setIndiceImagem((prev) =>
      prev === imagensModal.length - 1 ? 0 : prev + 1,
    );
  }, [imagensModal.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const focoAnterior = document.activeElement as HTMLElement | null;
    fecharRef.current?.focus();

    const handleKeyDown = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") onClose?.();
      if (evento.key === "ArrowLeft") imagemAnterior();
      if (evento.key === "ArrowRight") proximaImagem();

      if (evento.key === "Tab" && containerRef.current) {
        const focaveis = Array.from(
          containerRef.current.querySelectorAll<HTMLElement>(
            "button, a[href], input, [tabindex]:not([tabindex='-1'])",
          ),
        );
        if (focaveis.length === 0) return;

        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];

        if (evento.shiftKey && document.activeElement === primeiro) {
          evento.preventDefault();
          ultimo.focus();
        } else if (!evento.shiftKey && document.activeElement === ultimo) {
          evento.preventDefault();
          primeiro.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      focoAnterior?.focus();
    };
  }, [onClose, imagemAnterior, proximaImagem]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes do serviço: ${tituloModal}`}
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col gap-4 overflow-y-auto rounded-3xl bg-white p-4 shadow-lift sm:gap-5 sm:p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="relative flex items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
            {tituloModal}
          </h2>
          <button
            ref={fecharRef}
            onClick={onClose}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors hover:bg-primary hover:text-white"
            aria-label="Fechar modal"
          >
            <CircleX size={22} strokeWidth={1.8} />
          </button>
        </header>

        <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-gray-100 sm:h-[320px] md:h-[400px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={indiceImagem}
              src={imagensModal[indiceImagem]}
              alt={`Serviço: ${tituloModal} - Imagem ${indiceImagem + 1}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="h-full w-full object-contain"
            />
          </AnimatePresence>

          {imagensModal.length > 1 && (
            <>
              <button
                onClick={imagemAnterior}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-black/70 md:left-4"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={proximaImagem}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-black/70 md:right-4"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {imagensModal.length > 1 && (
          <div className="flex items-center justify-center gap-2">
            {imagensModal.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndiceImagem(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                aria-current={i === indiceImagem ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === indiceImagem
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

        <p className="px-1 text-sm leading-relaxed text-gray-700 md:text-base">
          {descricaoModal}
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=5567998336427"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-1 whitespace-nowrap rounded-full bg-primary px-4 py-3.5 text-xs font-bold uppercase text-white transition-colors hover:bg-primary-dark sm:w-auto sm:self-center sm:px-8 sm:text-sm sm:tracking-wide"
        >
          Solicitar Orçamento <span className="hidden sm:inline">(67)</span> 99833-6427
        </a>
      </motion.div>
    </motion.div>
  );
}
