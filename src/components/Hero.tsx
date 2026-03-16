import Image from "next/image";
import Link from "next/link";
import DatePickerBar from "@/components/DatePicker";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero/hero.png"
        alt="Recanto do Pericó — Guarda do Embaú"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <p className="text-lg md:text-xl mb-3 font-light tracking-widest uppercase opacity-90">
          Guarda do Embaú — Santa Catarina
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Recanto do Pericó
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-90 drop-shadow max-w-2xl mx-auto">
          Apartamentos modernos e aconchegantes com piscina, jacuzzi e
          churrasqueira. Seu refúgio no paraíso catarinense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#apartamentos"
            className="bg-white text-emerald-800 font-semibold px-8 py-3.5 rounded-full hover:bg-emerald-50 transition-colors text-lg"
          >
            Ver Apartamentos
          </Link>
          <Link
            href="/#contato"
            className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-lg"
          >
            Reservar Agora
          </Link>
        </div>
      </div>

      {/* Date picker floating at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <DatePickerBar />
      </div>
    </section>
  );
}
