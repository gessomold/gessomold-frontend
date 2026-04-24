import Banner from "../ components/Banner";
import Footer from "../ components/Footer";
import Header from "../ components/Header";
import CardServico from "../ components/Card-Servico";
import Hero from "../ components/Hero";
import { animate, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";
import ModalServico from "../ components/modal/ModalServico";

// Decorações
import decoracoesEmGeral0 from '../assets/images/decoracoes-em-geral0.webp';
import decoracoesEmGeral1 from '../assets/images/decoracoes-em-geral1.webp';
import decoracoesEmSanca0 from '../assets/images/decoracoes-em-sanca0.webp';
import decoracoesEmSanca1 from '../assets/images/decoracoes-em-sanca1.webp';
import decoracoesEmSanca2 from '../assets/images/decoracoes-em-sanca2.webp';
import decoracoesEmSanca3 from '../assets/images/decoracoes-em-sanca3.webp';
import decoracoesEmSanca4 from '../assets/images/decoracoes-em-sanca4.webp';
import decoracoesEmSanca5 from '../assets/images/decoracoes-em-sanca5.webp';
import decoracoesEmSanca6 from '../assets/images/decoracoes-em-sanca6.webp';
import decoracoesEmSanca7 from '../assets/images/decoracoes-em-sanca7.webp';


import decoracoesIluminadas0 from '../assets/images/decoracoes-iluminadas0.webp';
import decoracoes0 from '../assets/images/decoracoes0.webp';

// Divisórias Decoradas
import divisoriasDrywallDecoradas0 from '../assets/images/divisorias-drywall-decoradas0.webp';
import divisoriasDrywallDecoradas1 from '../assets/images/divisorias-drywall-decoradas1.webp';
import divisoriasDrywallDecoradas2 from '../assets/images/divisorias-drywall-decoradas2.webp';

// Divisórias Padrão
import divisoriasEmDrywall0 from '../assets/images/divisorias-em-drywall0.webp';
import divisoriasEmDrywall1 from '../assets/images/divisorias-em-drywall1.webp';
import divisoriasEmDrywall2 from '../assets/images/divisorias-em-drywall2.webp';
import divisorias0 from '../assets/images/divisorias0.webp'
import divisorias1 from '../assets/images/divisorias1.webp'
import divisorias3 from '../assets/images/divisorias3.webp'

// Forros
import forroDrywallInclinado0 from '../assets/images/forro-drywall-inclinado0.webp';
import forroDrywall0 from '../assets/images/forro-drywall0.webp';
import forroDrywall1 from '../assets/images/forro-drywall1.webp';
import forroDrywall2 from '../assets/images/forro-drywall2.webp';
import forroDrywall3 from '../assets/images/forro-drywall3.webp'

//Molduras e placas 3D
import moldurasplacas3D0 from '../assets/images/molduras-placas3D0.webp'
import moldurasplacas3D1 from '../assets/images/molduras-placas3D1.webp'

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
        decoracoesEmSanca0,
        decoracoesEmSanca1,
        decoracoesEmSanca2,
        decoracoesEmSanca3,
        decoracoesEmSanca4,
        decoracoesEmSanca5,
        decoracoesEmSanca6,
        decoracoesEmSanca7,

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
        divisorias0,
        divisorias1,
        divisorias3
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
    }, {
      id: 8,
      imagens: [
        moldurasplacas3D1,
        moldurasplacas3D0
      ],
      titulo: "Molduras e Placas 3D",
      descricao: "Acabamentos elegantes e revestimentos de parede em alto-relevo que trazem textura, movimento e muita personalidade ao seu ambiente."
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
