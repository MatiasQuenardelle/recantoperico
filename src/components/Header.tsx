"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-emerald-800">
            Recanto do Perico
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-emerald-700 transition-colors"
            >
              Início
            </Link>
            <Link
              href="/#apartamentos"
              className="text-gray-700 hover:text-emerald-700 transition-colors"
            >
              Apartamentos
            </Link>
            <Link
              href="/#sobre"
              className="text-gray-700 hover:text-emerald-700 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/#localizacao"
              className="text-gray-700 hover:text-emerald-700 transition-colors"
            >
              Localização
            </Link>
            <Link
              href="/#contato"
              className="text-gray-700 hover:text-emerald-700 transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-emerald-700"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            href="/#apartamentos"
            className="text-gray-700 hover:text-emerald-700"
            onClick={() => setMenuOpen(false)}
          >
            Apartamentos
          </Link>
          <Link
            href="/#sobre"
            className="text-gray-700 hover:text-emerald-700"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="/#localizacao"
            className="text-gray-700 hover:text-emerald-700"
            onClick={() => setMenuOpen(false)}
          >
            Localização
          </Link>
          <Link
            href="/#contato"
            className="text-gray-700 hover:text-emerald-700"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}
