export default function Banner() {
  return (
    <section className="flex flex-col items-center bg-primary text-white gap-y-5 p-4">
      <div className="flex flex-col gap-y-2">
        <p className="text-center text-xl font-semibold">
          Pronto para transformar seu ambiente?
        </p>
        <p className="text-center text-sm">
          Não perca tempo com amadores. Contrate quem tem mais de {""}
          {new Date().getFullYear() - 2001} anos de experiência e garantia
          comprovada
        </p>
      </div>

      <a
        href="#"
        className="text-primary transition-all text-sm font-semibold rounded-lg bg-white px-4 py-2 cursor-pointer"
      >
        Falar com um especialista agora
      </a>
    </section>
  );
}
