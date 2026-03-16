import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white">
      {/* Background overlay - will be replaced with actual image */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Placeholder for background image - swap bg-gradient with Image component later */}
      <div className="absolute inset-0 bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Recanto do Perico
        </h1>
        <p className="text-xl md:text-2xl mb-2 font-light drop-shadow">
          Guarda do Embaú — Santa Catarina
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow">
          Seu refúgio no paraíso catarinense
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#apartamentos"
            className="bg-white text-emerald-800 font-semibold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors"
          >
            Ver Apartamentos
          </Link>
          <Link
            href="/#contato"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            Fale Conosco
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
