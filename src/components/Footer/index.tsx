import { BadgeCheck, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import logoWhatsapp from "../../assets/images/whatsapp.svg";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function Footer() {
  return (
    <footer className="bg-secondary" id="contato">
      <Container className="grid gap-12 py-16 sm:grid-cols-2">
        <Reveal className="flex max-w-md flex-col gap-5">
          <h2 className="text-xl font-bold text-white">Empresa</h2>
          <p className="text-sm leading-relaxed text-gray-500">
            A Moldgesso (Mold Gesso) é a referência em gesso e drywall em Coxim
            e região. Comprometimento, qualidade e pontualidade em cada
            projeto.
          </p>
          <div className="relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
            <motion.span
              className="absolute top-0 h-full w-14 -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent"
              initial={{ left: "-100%" }}
              animate={{ left: "200%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
                repeatDelay: 1.2,
              }}
              aria-hidden="true"
            />
            <BadgeCheck className="relative z-10 flex-shrink-0 text-primary" />
            <p className="relative z-10 text-sm font-semibold text-white">
              Garantia de 5 anos em todos os serviços
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="sm:justify-self-end">
          <h2 className="mb-6 text-xl font-bold text-white">Contato</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="https://maps.app.goo.gl/6LTtvV4tpPfZ5vvU9"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary transition-colors group-hover:bg-primary/15">
                  <MapPin size={18} />
                </span>
                R. Gen. Mendes de Morais, 1995 - Sr. Divino, Coxim - MS
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5567998336427"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-primary/15">
                  <img className="w-5" src={logoWhatsapp} alt="" />
                </span>
                (67) 99833-6427
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/moldgesso_decoracoes"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary transition-colors group-hover:bg-primary/15">
                  <Instagram size={18} />
                </span>
                moldgesso_decoracoes
              </a>
            </li>
            <li>
              <a
                href="tel:+5567999182277"
                className="group flex items-center gap-3 text-sm text-white transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary transition-colors group-hover:bg-primary/15">
                  <Phone size={18} />
                </span>
                (67) 99918-2277
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@moldgesso.com.br"
                className="group flex items-center gap-3 text-sm text-white transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary transition-colors group-hover:bg-primary/15">
                  <Mail size={18} />
                </span>
                contato@moldgesso.com.br
              </a>
            </li>
          </ul>
        </Reveal>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MOLD GESSO (MOLDGESSO). Todos os
            direitos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
