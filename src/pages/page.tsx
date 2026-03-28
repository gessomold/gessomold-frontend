import Banner from "../ components/Banner";
import Footer from "../ components/Footer";
import Header from "../ components/Header";
import CardServico from "../ components/Card-Servico";
import Hero from "../ components/Hero";

export function Page() {

  return (
    <>
      <Header />
    
      <Hero />

      <section id="servicos">
        <h2 className="flex justify-center font-semibold text-xl">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 justify-items-center">
          <CardServico
            imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQWcvhEDTwE3C0n5sMnkG2qdeogKwiDi4Vw&s"
            titulo="Forro Draywall"
            descricao="Acabamento liso, moderno e com excelente isolamento acústico e térmico para residências e comércios"
          />
        </div>
      </section>
      <Banner />

      <Footer />
    </>
  );
}
