import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.webp";

const NAV_ITEMS = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "contato", label: "Contato" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolado, setRolado] = useState(false);
  const [ativo, setAtivo] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setRolado(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAtivo(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAberto(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuAberto]);

  const scrollTo = (id: string) => {
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuAberto(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          rolado
            ? "border-gray-100 bg-white/90 shadow-soft backdrop-blur-md"
            : "border-transparent bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="relative flex w-full items-center px-4 py-3 sm:px-6 lg:px-12">
          <button
            onClick={() => scrollTo("inicio")}
            className="shrink-0 transition-transform duration-300 hover:scale-[1.03]"
            aria-label="Ir para o início"
          >
            <img src={Logo} alt="Logo Mold Gesso" className="w-30" />
          </button>

          <nav
            aria-label="Navegação principal"
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
          >
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    aria-current={ativo === item.id ? "page" : undefined}
                    className={`group relative py-2 text-sm font-semibold transition-colors ${
                      ativo === item.id ? "text-primary" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300 ${
                        ativo === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://api.whatsapp.com/send?phone=5567998336427"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-dark sm:inline-flex"
            >
              Orçamento Sem Compromisso
            </motion.a>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-800 transition-colors hover:bg-gray-100 md:hidden"
              onClick={() => setMenuAberto(!menuAberto)}
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
            >
              {menuAberto ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
    </motion.header>

    <AnimatePresence>
      {menuAberto && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm md:hidden"
          onClick={() => setMenuAberto(false)}
        />
      )}
    </AnimatePresence>

    <AnimatePresence>
      {menuAberto && (
        <motion.nav
          key="drawer"
          id="menu-mobile"
          aria-label="Menu mobile"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 320, damping: 34 }}
          className="fixed right-0 top-0 z-50 flex h-full w-72 max-w-[85vw] flex-col gap-2 bg-white p-6 shadow-lift md:hidden"
        >
          <button
            onClick={() => setMenuAberto(false)}
            className="mb-6 flex h-10 w-10 items-center justify-center self-end rounded-full text-gray-800 transition-colors hover:bg-gray-100"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>

          {NAV_ITEMS.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.3 }}
              onClick={() => scrollTo(item.id)}
              className={`rounded-xl px-4 py-3 text-left text-lg font-semibold transition-colors ${
                ativo === item.id
                  ? "bg-primary/5 text-primary"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.a
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            href="https://api.whatsapp.com/send?phone=5567998336427"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-dark sm:hidden"
          >
            Orçamento Sem Compromisso
          </motion.a>
        </motion.nav>
      )}
    </AnimatePresence>
    </>
  );
}
