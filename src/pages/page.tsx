import Banner from "../ components/Banner";
import Footer from "../ components/Footer";
import Header from "../ components/Header";
import CardServico from "../ components/Card-Servico";
import Hero from "../ components/Hero";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import ModalServico from "../ components/modal/ModalServico";

export function Page() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const servicosData = [
    {
      id: 1,
      imagens: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQWcvhEDTwE3C0n5sMnkG2qdeogKwiDi4Vw&s", // Imagem 1 (será a capa do card)
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR-9wGf9Tqj1b4m7K0zNf-74Y1Gf_6K1Lg&s", // Imagem 2 (aparece no modal)
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzE_6L_A8p0H9P-pY6D7jD9vE7b8A8s7A6A&s"  // Imagem 3 (aparece no modal)
      ],
      titulo: "Forro Drywall Padrão",
      descricao: "Acabamento liso, moderno e com excelente isolamento acústico e térmico para residências e comércios."
    },
    {
      id: 2,
      imagens: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR-9wGf9Tqj1b4m7K0zNf-74Y1Gf_6K1Lg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQWcvhEDTwE3C0n5sMnkG2qdeogKwiDi4Vw&s"
      ],
      titulo: "Sancas de Gesso Iluminadas",
      descricao: "Design sofisticado com iluminação embutida em fita de LED para valorizar a sua sala de estar."
    },
    {
      id: 3,
      imagens: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzE_6L_A8p0H9P-pY6D7jD9vE7b8A8s7A6A&s"
      ],
      titulo: "Divisórias Especiais",
      descricao: "Instalação rápida e limpa de divisórias para escritórios e separação de ambientes."
    },
  ];

  const ano = new Date().getFullYear() - 2001;

  useEffect(() => {
    const controls = animate(count, ano, { duration: 2 });
    return () => controls.stop();
  }, [count, ano]);
  const [servicoSelecionado, setServicoSelecionado] = useState<null | typeof servicosData[0]>(null);

  return (
    <>
      <Header />
    
      <Hero />

      <section id="servicos">
        <h2 className="flex justify-center font-semibold text-xl">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] p-4  gap-6 justify-items-center">

          {servicosData.map((servico) => (
            <CardServico
              key={servico.id}
              imagem={servico.imagens[0]}
              titulo={servico.titulo}
              descricao={servico.descricao}
              onClick={() => setServicoSelecionado(servico)}
            />
          ))}

        </div>
      </section>
      <Banner />

      <Footer />
      {servicoSelecionado && (
        <ModalServico
          tituloModal={servicoSelecionado.titulo}
          imagensModal={servicoSelecionado.imagens}
          descricaoModal={servicoSelecionado.descricao}
          onClose={() => setServicoSelecionado(null)}
          />
      )}
    </>
  );
}
