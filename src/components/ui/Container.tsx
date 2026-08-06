import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Wrapper centralizador com largura máxima consistente em toda a aplicação. */
export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
