import { BadgeCheck, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoWhatsapp from "../../assets/images/whatsapp.svg";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <section className="grid sm:grid-cols-2 p-4 gap-4">
        <div className="max-w-120 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white">Empresa</h2>
          <img src="" alt="logo" className="w-13 h-13" />
          <p className="text-gray-500">
            A referência em gesso e drywall em Coxim e região. Comprometimento,
            qualidade e pontualidade em cada projeto.
          </p>
          <div className="flex gap-2 max-w-82 rounded-3xl p-2 bg-secondary border border-[#353535] items-center text-sm">
            <BadgeCheck className="text-primary" />
            <p className="text-white text-sm font-semibold">
              Garantia de 5 anos em todos os serviços
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white">Contato</h2>
          <ul className="text-white flex flex-col gap-4">
            <li>
              <a
                href="https://maps.app.goo.gl/6LTtvV4tpPfZ5vvU9"
                target="_blank"
                className="flex gap-2"
              >
                <MapPin className="text-primary" />
                R. Gen. Mendes de Morais, 1995 - Sr. Divino, Coxim - MS
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5567998336427"
                target="_blank"
                className="flex gap-2"
              >
                <img className="w-6" src={logoWhatsapp} alt="Whatsapp" />
                (67) 99833-6427
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/moldgesso_decoracoes"
                target="_blank"
                className="flex gap-2"
              >
                <Instagram className="text-primary" />
                moldgesso_decoracoes
              </a>
            </li>
            <li>
              <a className="flex gap-2">
                <Phone className="text-primary" />
                3291-5872
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@moldgesso.com.br"
                target="_blank"
                className="flex gap-2"
              >
                <Mail className="text-primary" />
                contato@moldgesso.com.br
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="border-t border-t-gray-500">
        <p className="text-gray-500 text-center py-4">
          © {new Date().getFullYear()} MOLD GESSO. Todos os direitos reservados.
        </p>
      </section>
    </footer>
  );
}
