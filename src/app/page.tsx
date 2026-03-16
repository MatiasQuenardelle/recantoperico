import Hero from "@/components/Hero";
import DatePickerSection from "@/components/DatePicker";
import ApartamentoCard from "@/components/ApartamentoCard";
import Sobre from "@/components/Sobre";
import GoogleMapSection from "@/components/GoogleMap";
import ContatoForm from "@/components/ContatoForm";
import { apartamentos } from "@/data/apartamentos";

export default function Home() {
  return (
    <main>
      <Hero />

      <DatePickerSection />

      {/* Apartamentos */}
      <section id="apartamentos" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Nossos Apartamentos
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conheça nossos 6 apartamentos, todos preparados com carinho pela
            Niceia para garantir o máximo conforto durante sua estadia.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartamentos.map((apt) => (
              <ApartamentoCard key={apt.id} apt={apt} />
            ))}
          </div>
        </div>
      </section>

      <Sobre />

      <GoogleMapSection />

      <ContatoForm />
    </main>
  );
}
