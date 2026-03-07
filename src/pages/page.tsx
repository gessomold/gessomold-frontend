import { ChevronRight, Dot } from "lucide-react";

export function Page() {
  return (
    <>
      <section className=" w-full h-75  bg-[#141414]  text-[#FFFFFF]  ">
        <div className=" w-118 h-49  flex grid gap-2  grid grid-cols-1 ml-4  absolute top-20 ">
          <div className=" flex  border gap-5 rounded-3xl w-60 items-center  text-sm bg-[#1E1E1E]">
            <Dot color="#AD0023" />
            <p>LÍDER EM COXIM E REGIÃO</p>
          </div>
          <h1 className=" text-4xl font-bold">MAIS DE 25 ANOS DE EXCELENCIA</h1>
          <div className="  ">
            <p>Transformamos ambientes com precisão e elegância.
              Atendemos Coxim e região com material de primeira linha
              e acabamento impecável.</p>
          </div>
        </div>
        <div className=" flex justify-start items-center gap-2  absolute top-75 ml-4">
          <button className="flex justify-center items-center rounded-lg cursor-pointer bg-[#AD0023] text-[#FFFFFF] w-60 h-8 text-sm  " >orcameto sem compromisso <ChevronRight /></button>
          <p className="text-xs text-[#DFDFDF]">Ou ligue agora: </p> <button className="text-[#FFFFFF] cursor-pointer">(67) 0000-9999</button>
        </div>
      </section>

      <section>
        <h2 className="flex justify-center font-semibold text-xl">Nossos Serviços</h2>

      </section>

    </>
  );
}