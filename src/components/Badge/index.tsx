import type { ReactNode } from "react";

type BadgeProps = {
  icon: ReactNode;
  titulo: string;
  descricao: string;
};

export default function Badge({ icon, titulo, descricao }: BadgeProps) {
  return (
    <div className="flex gap-x-3">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-white">{titulo}</p>
        <p className="text-sm text-gray-500">{descricao}</p>
      </div>
    </div>
  );
}
