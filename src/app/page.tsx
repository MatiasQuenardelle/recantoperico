import Hero from "@/components/Hero";
import DatePickerSection from "@/components/DatePicker";
import Destaques from "@/components/Destaques";
import ApartamentoCard from "@/components/ApartamentoCard";
import Sobre from "@/components/Sobre";
import GoogleMapSection from "@/components/GoogleMap";
import ContatoForm from "@/components/ContatoForm";
import { apartamentos } from "@/data/apartamentos";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />

      <DatePickerSection />

      <Destaques />

      {/* Apartamentos */}
      <section id="apartamentos" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Nossos Apartamentos
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            6 apartamentos modernos e totalmente equipados, preparados com
            carinho pela Niceia para garantir o máximo conforto durante sua
            estadia.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartamentos.map((apt) => (
              <ApartamentoCard key={apt.id} apt={apt} />
            ))}
          </div>
        </div>
      </section>

      {/* Pool & Jacuzzi highlight strip */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Piscina, Jacuzzi & Área de Lazer
              </h2>
              <p className="text-emerald-100 leading-relaxed mb-4">
                Após um dia explorando as trilhas e praias de Guarda do Embaú,
                relaxe na nossa área de lazer completa. Piscina com cascata,
                jacuzzi aquecida, deck de madeira com espreguiçadeiras e
                pergolado.
              </p>
              <p className="text-emerald-100 leading-relaxed mb-6">
                Temos também churrasqueira disponível para nossos hóspedes — o
                lugar perfeito para reunir a família ou amigos ao fim do dia.
              </p>
              <ul className="space-y-2 text-emerald-200">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Piscina com cascata
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Jacuzzi
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Deck com espreguiçadeiras
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Churrasqueira
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Pergolado coberto
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-52 rounded-xl overflow-hidden">
                <Image
                  src="/images/areas/pool.png"
                  alt="Piscina do Recanto do Pericó"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded-xl overflow-hidden">
                <Image
                  src="/images/areas/jacuzzi.png"
                  alt="Jacuzzi do Recanto do Pericó"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded-xl overflow-hidden col-span-2">
                <Image
                  src="/images/areas/pool2.png"
                  alt="Área de lazer com espreguiçadeiras"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Sobre />

      <GoogleMapSection />

      <ContatoForm />
    </main>
  );
}
