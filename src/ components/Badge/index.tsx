import type { ReactNode } from "react";

type BadgeProps = {
  icon: ReactNode;
  titulo: string;
  descricao: string;
};

export default function Badge({ icon, titulo, descricao }: BadgeProps) {
  return (
    <>
      <div className="flex gap-x-2">
        <div className="bg-[#1D1D1D] p-2 rounded-full">{icon}</div>
        <div>
          <p className="text-white font-semibold">{titulo}</p>
          <p className="text-gray-500 text-sm">{descricao}</p>
        </div>
      </div>
    </>
  );
}
