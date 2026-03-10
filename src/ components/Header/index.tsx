export function Header() {
  return (
    <>
      <header className="flex w-full h-15 items-center justify-between bg-white sticky top-0 z-1">
        <div className="ml-4 rounded-xl border w-12 h-12">
          <img src="" alt="Logo" />
        </div>
        <div className="grid grid-flow-col justify-items-center gap-3  ">
          <div>
            <a href="">
              <button className="cursor-pointer text-gray-500 font-semibold">Inicio</button>
            </a>
          </div>
          <div>
            <a href="">
              <button className="cursor-pointer text-gray-500 font-semibold">Serviços</button>
            </a>
          </div>
          <div>
            <a href="">
              <button className="cursor-pointer text-gray-500 font-semibold">Contato</button>
            </a>
          </div>
        </div>
        <div>
          <button className="border rounded-lg cursor-pointer bg-primary text-white px-4 py-2 text-sm mr-4 ">
            Orçamento sem compromisso
          </button>
        </div>
      </header>
    </>
  );
}
