import { ChevronRight, Dot } from "lucide-react";
import Banner from "../ components/Banner";
import Footer from "../ components/Footer";
import { Header } from "../ components/Header";
import CardServico from "../ components/Card-Servico";

export function Page() {
  return (
    <>
      <Header />
      <section className="w-full h-75 bg-secondary text-white">
        <div className=" w-118 h-49 grid gap-2  grid-cols-1 ml-4  absolute top-20 ">
          <div className=" flex border gap-5 rounded-3xl w-60 items-center  text-sm bg-secondary">
            <Dot className="text-primary" />
            <p>LÍDER EM COXIM E REGIÃO</p>
          </div>
          <h1 className=" text-4xl font-bold">MAIS DE 25 ANOS DE EXCELENCIA</h1>
          <div className="text-gray-500">
            <p>
              Transformamos ambientes com precisão e elegância. Atendemos Coxim
              e região com material de primeira linha e acabamento impecável.
            </p>
          </div>
        </div>
        <div className=" flex justify-start items-center gap-2  absolute top-75 ml-4">
          <button className="flex justify-center items-center rounded-lg cursor-pointer bg-primary text-white px-4 py-2 text-sm">
            Orçamento sem compromisso <ChevronRight />
          </button>
          <p className="text-xs text-gray-500">Ou ligue agora: </p>{" "}
          <button className="text-white cursor-pointer">(67) 0000-9999</button>
        </div>
      </section>
      <section className="p-4 ">
        <h2 className="flex pb-3 justify-center font-semibold text-xl">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 justify-items-center">
          <CardServico imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQWcvhEDTwE3C0n5sMnkG2qdeogKwiDi4Vw&s" titulo="Forro Draywall" descricao="Acabamento liso, moderno e com excelente isolamento acústico e térmico para residências e comércios" />
        </div>
      </section>
      <Banner />
      
      <Footer />
    </>
  );
}
