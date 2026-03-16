import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Recanto do Perico</h3>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Guarda do Embaú, Palhoça — SC
              <br />
              Seu refúgio no paraíso catarinense.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2 text-sm text-emerald-200">
              <Link href="/" className="hover:text-white transition-colors">
                Início
              </Link>
              <Link
                href="/#apartamentos"
                className="hover:text-white transition-colors"
              >
                Apartamentos
              </Link>
              <Link
                href="/#sobre"
                className="hover:text-white transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/#contato"
                className="hover:text-white transition-colors"
              >
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-2 text-sm text-emerald-200">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaInstagram />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-sm text-emerald-300">
          <p>
            &copy; {new Date().getFullYear()} Recanto do Perico. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
