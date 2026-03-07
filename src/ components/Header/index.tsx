export function Header() {
  return (
    <>
      <section className="flex w-full h-15 items-center justify-between relative sticky top-0  z-1 ">
        <div className="ml-4 rounded-xl border w-12 h-12"><img src="" alt="Logo" /></div>
        <div className=" grid grid-flow-col justify-items-center gap-3  ">
          <div><button className="cursor-pointer ">Inicio</button></div>
          <div><button className="cursor-pointer ">Serviços</button></div>
          <div><button className="cursor-pointer ">Contato</button></div>
        </div>
        <div>
          <button className="border rounded-lg cursor-pointer bg-[#AD0023] text-[#FFFFFF] w-52 h-8 text-sm mr-4 ">orcameto sem compromisso</button>
        </div>
      </section>
      <header></header>
    </>
  );
}