import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-white font-bold text-lg">
          Dimil<span className="text-purple-500">.</span>
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-white transition">
            Sobre
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projetos
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contato
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-6 flex flex-col gap-4 text-gray-300">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Sobre
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projetos
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contato
          </a>
        </div>
      )}
    </header>
  );
}