import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import SmartImage from "../ui/SmartImage";

type CardServicoProps = {
  imagem?: string;
  titulo: string;
  descricao: string;
  onClick?: () => void;
};

export default function CardServico({
  imagem,
  titulo,
  descricao,
  onClick,
}: CardServicoProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="h-full"
    >
      <button
        type="button"
        onClick={onClick}
        className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-soft transition-all duration-300 hover:shadow-card"
        aria-label={`Ver detalhes do serviço ${titulo}`}
      >
        <div className="relative h-48 flex-shrink-0 overflow-hidden bg-gray-100">
          {imagem ? (
            <SmartImage
              src={imagem}
              alt={`Imagem do serviço ${titulo}`}
              wrapperClassName="h-full w-full"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
              Sem imagem
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5">
          <span className="block text-lg font-bold text-gray-900">
            {titulo}
          </span>
          <p className="text-sm leading-relaxed text-gray-600">{descricao}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary">
            Ver detalhes
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </button>
    </motion.div>
  );
}
