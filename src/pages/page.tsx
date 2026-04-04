import Banner from "../ components/Banner";
import Footer from "../ components/Footer";
import Header from "../ components/Header";
import CardServico from "../ components/Card-Servico";
import Hero from "../ components/Hero";
import { animate, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";
import ModalServico from "../ components/modal/ModalServico";

// Decorações
import decoracoesEmGeral0 from '../assets/images/decoracoes-em-geral0.jpeg';
import decoracoesEmGeral1 from '../assets/images/decoracoes-em-geral1.jpeg';
import decoracoesEmSanca0 from '../assets/images/decoracoes-em-sanca0.jpeg';
import decoracoesIluminadas0 from '../assets/images/decoracoes-iluminadas0.jpeg';
import decoracoes0 from '../assets/images/decoracoes0.jpeg';

// Divisórias Decoradas
import divisoriasDrywallDecoradas0 from '../assets/images/divisorias-drywall-decoradas0.jpeg';
import divisoriasDrywallDecoradas1 from '../assets/images/divisorias-drywall-decoradas1.jpeg';
import divisoriasDrywallDecoradas2 from '../assets/images/divisorias-drywall-decoradas2.jpeg';

// Divisórias Padrão
import divisoriasEmDrywall0 from '../assets/images/divisorias-em-drywall0.jpeg';
import divisoriasEmDrywall1 from '../assets/images/divisorias-em-drywall1.jpeg';
import divisoriasEmDrywall2 from '../assets/images/divisorias-em-drywall2.jpeg';

// Forros
import forroDrywallInclinado0 from '../assets/images/forro-drywall-inclinado0.jpeg';
import forroDrywall0 from '../assets/images/forro-drywall0.jpeg';
import forroDrywall1 from '../assets/images/forro-drywall1.jpeg';
import forroDrywall2 from '../assets/images/forro-drywall2.jpeg';
import forroDrywall3 from '../assets/images/forro-drywall3.jpeg';

export function Page() {
  const count = useMotionValue(0);
  const servicosData = [
    {
      id: 1,
      imagens: [
        forroDrywall0, 
        forroDrywall1, 
        forroDrywall2, 
        forroDrywall3
      ],
      titulo: "Forro Drywall",
      descricao: "Acabamento liso e moderno, com excelente isolamento acústico e térmico para residências e comércios."
    },
    {
      id: 2,
      imagens: [
        forroDrywallInclinado0
      ],
      titulo: "Forro Drywall Inclinado",
      descricao: "Acompanha o caimento do telhado, garantindo um visual arrojado e sensação de amplitude ao ambiente."
    }, 
    {
      id: 3,
      imagens: [
        decoracoesEmGeral0,
        decoracoesEmGeral1,
        decoracoes0,
      ],
      titulo: "Decorações em Geral",
      descricao: "Painéis, nichos e detalhes sob medida em gesso que transformam qualquer espaço com muita sofisticação."
    },
    {
      id: 4,
      imagens: [
        decoracoesEmSanca0
      ],
      titulo: "Decorações em Sanca",
      descricao: "Acabamento elegante no contorno do teto, ideal para criar luzes indiretas e valorizar a sua sala."
    }, 
    {
      id: 5,
      imagens: [
        decoracoesIluminadas0
      ],
      titulo: "Decorações Iluminadas",
      descricao: "Projetos de gesso pensados estrategicamente para embutir fitas de LED e spots, criando ambientes aconchegantes."
    },
    {
      id: 6,
      imagens: [
        divisoriasEmDrywall0,
        divisoriasEmDrywall1,
        divisoriasEmDrywall2,
      ],
      titulo: "Divisórias Padrão",
      descricao: "Instalação rápida e sem sujeira. A solução perfeita e econômica para criar novos cômodos e escritórios."
    }, 
    {
      id: 7,
      imagens: [
        divisoriasDrywallDecoradas0,
        divisoriasDrywallDecoradas1,
        divisoriasDrywallDecoradas2,
      ],
      titulo: "Divisórias Decoradas",
      descricao: "Separação de ambientes com design personalizado, unindo a funcionalidade da parede com a beleza de recortes únicos."
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
      <section id="servicos" className="w-full py-8">
        <h2 className="flex justify-center font-semibold pb-8 text-2xl">
          Nossos Serviços
        </h2>
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
