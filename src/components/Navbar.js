// src/components/Navbar.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Evita erro de hidratação no Next.js
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-bg-light/70 dark:bg-bg-dark/70 backdrop-blur-md border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Name com SVG Integrado */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-gray-900 dark:text-white hover:opacity-80 transition-opacity font-mono"
        >
          <Image
            src="/logotipo_dimildesigner.svg"
            alt="Logotipo dimildesigner"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <span>
            dimildesigner
            <span className="text-primary-light dark:text-accent">.portfolio</span>
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 items-center">
            {["Sobre", "Stack", "Projetos"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative py-1 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-accent transition-colors duration-300 group"
              >
                {item}
                {/* Linha deslizante no hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary-light dark:bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-gray-200 dark:bg-white/10" />

          {/* Currículo Técnico */}
          <a
            href="/curriculo_edimilson_teixeira2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-primary-light/50 dark:border-accent/40 text-primary-light dark:text-accent hover:bg-primary-light hover:text-white dark:hover:bg-accent dark:hover:text-bg-dark text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 active:scale-95 shadow-sm"
          >
            Currículo
          </a>

          {/* Alternador de Tema */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Alternar tema visual"
            className="p-2 rounded-full border border-gray-200/50 dark:border-white/5 bg-gray-50/50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-accent transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-gray-200/50 dark:border-white/5 bg-gray-50/50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile com Visual Glassmorphic */}
      {isOpen && (
        <div className="md:hidden border-b border-border-light dark:border-border-dark bg-bg-light/95 dark:bg-bg-dark/95 backdrop-blur-lg px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {["Sobre", "Stack", "Projetos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-2.5 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="/curriculo_edimilson_teixeira2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-2.5 mt-2 border border-primary-light text-primary-light dark:border-accent dark:text-accent text-xs uppercase tracking-widest font-bold rounded-full transition-all"
            onClick={() => setIsOpen(false)}
          >
            Currículo
          </a>
        </div>
      )}
    </nav>
  );
}
