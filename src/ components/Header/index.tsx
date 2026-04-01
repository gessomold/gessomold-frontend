import Logo from "../../assets/images/logo.jpg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuAberto(false);
  };

  return (
    <header
      className="flex w-full p-2 items-center justify-between bg-white sticky top-0 z-50 shadow-sm"
      id="inicio"
    >
      <img className="w-16 h-16 rounded-xl" src={Logo} alt="Logo" />

      <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8">
        <li>
          <button
            onClick={() => scrollTo("inicio")}
            className="text-gray-600 hover:text-black font-semibold transition"
          >
            Início
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollTo("servicos")}
            className="text-gray-600 hover:text-black font-semibold transition"
          >
            Serviços
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollTo("contato")}
            className="text-gray-600 hover:text-black font-semibold transition"
          >
            Contato
          </button>
        </li>
      </ul>

      <section className="flex items-center gap-x-2">
        <a
          href="https://api.whatsapp.com/send?phone=5567998336427"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-primary hover:bg-primary/90 transition-all text-sm font-semibold rounded-lg text-white px-4 py-2"
        >
          Orçamento Sem Compromisso
        </a>
        <button
          className="md:hidden z-50"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${
            menuAberto ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuAberto(false)}
        />
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl flex flex-col p-6 gap-6 transform transition-transform duration-300 md:hidden ${
            menuAberto ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => scrollTo("inicio")}
            className="text-gray-700 font-semibold text-lg"
          >
            Início
          </button>
          <button
            onClick={() => scrollTo("servicos")}
            className="text-gray-700 font-semibold text-lg"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollTo("contato")}
            className="text-gray-700 font-semibold text-lg"
          >
            Contato
          </button>
        </div>
      </section>
    </header>
  );
}
