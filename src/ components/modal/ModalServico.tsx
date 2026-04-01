import { CircleX, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

type ModalServicoProps = {
    tituloModal: string;
    imagensModal: string[];
    descricaoModal: string;
    onClose?: () => void;
};

export default function ModalServico({ tituloModal, imagensModal, descricaoModal, onClose }: ModalServicoProps) {
    const [indiceImagem, setIndiceImagem] = useState(0);

    const imagemAnterior = () => {
        setIndiceImagem((prev) => (prev === 0 ? imagensModal.length - 1 : prev - 1));
    };

    const proximaImagem = () => {
        setIndiceImagem((prev) => (prev === imagensModal.length - 1 ? 0 : prev + 1));
    };


    useEffect(() => {

        document.body.style.overflow = "hidden";

        const handleKeyDown = (evento: KeyboardEvent) => {
            if (evento.key === "Escape" && onClose) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-white rounded-2xl md:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-2xl flex flex-col gap-4 sm:gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="relative flex items-center justify-center min-h-[32px] pt-8 sm:pt-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center px-2 sm:px-8">
              Detalhes do Serviço: {tituloModal}
            </h2>
            <button
              onClick={onClose}
              className="absolute top-0 right-0 sm:relative sm:top-auto sm:right-auto bg-primary text-white rounded-full cursor-pointer hover:bg-red-800 transition-colors"
              aria-label="Fechar"
            >
              <CircleX size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
            </button>
          </header>

          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden group mt-2 sm:mt-0">
            <img
              src={imagensModal[indiceImagem]}
              alt={`Serviço: ${tituloModal} - Imagem ${indiceImagem + 1}`}
              className="w-full h-full object-contain"
            />

            {imagensModal.length > 1 && (
              <>
                <button
                  onClick={imagemAnterior}
                  className="absolute left-2 md:left-4 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all cursor-pointer"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={proximaImagem}
                  className="absolute right-2 md:right-4 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all cursor-pointer"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>

                <div className="absolute bottom-2 md:bottom-4 bg-black/50 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">
                  {indiceImagem + 1} / {imagensModal.length}
                </div>
              </>
            )}
          </div>

          <footer className="flex flex-col items-center gap-4 sm:gap-6 mt-2">
            <p className="text-center text-gray-700 px-2 sm:px-4 text-sm md:text-base leading-relaxed">
              {descricaoModal}
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=5567998336427"
              className="bg-primary w-full sm:w-auto hover:bg-red-800 cursor-pointer text-white font-bold py-3 px-6 sm:px-8 rounded-full text-xs sm:text-sm uppercase tracking-wide transition-colors"
            >
              Solicitar Orçamento (67) 99833-6427
            </a>
          </footer>
        </div>
      </div>
    );
}