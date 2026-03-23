export function Header() {
  return (
    <>
      <header className="flex w-full p-4 items-center justify-between bg-white sticky top-0 z-1">
        <div className="ml-4 rounded-xl border w-12 h-12">
          <img src="" alt="Logo" />
        </div>
        <div className="grid grid-flow-col justify-items-center gap-3  ">
          <div>
            <a href="">
              <button className="cursor-pointer text-gray-500 font-semibold">
                Inicio
              </button>
            </a>
          </div>
          <div>
            <a href="">
              <button className="cursor-pointer text-gray-500 font-semibold">
                Serviços
              </button>
            </a>
          </div>
          <div>
            <a href="">
              <button className="cursor-pointer text-gray-500 font-semibold">
                Contato
              </button>
            </a>
          </div>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=5567998336427"
            target="_blank"
            className="bg-primary hover:bg-primary/90 transition-all text-sm font-semibold rounded-lg text-white px-4 py-2 cursor-pointer"
          >
            Orçamento sem compromisso
          </a>
        </div>
      </header>
    </>
  );
}
