import { notFound } from "next/navigation";
import Link from "next/link";
import { apartamentos } from "@/data/apartamentos";
import {
  FaBed,
  FaUsers,
  FaWifi,
  FaSnowflake,
  FaUtensils,
  FaCar,
  FaFire,
  FaCouch,
  FaBath,
  FaWhatsapp,
  FaArrowLeft,
} from "react-icons/fa";
import type { Metadata } from "next";

const iconMap: Record<string, React.ReactNode> = {
  "Wi-Fi": <FaWifi />,
  "Ar condicionado": <FaSnowflake />,
  "Cozinha completa": <FaUtensils />,
  "Roupa de cama e banho": <FaBath />,
  Estacionamento: <FaCar />,
  "Churrasqueira compartilhada": <FaFire />,
  "Sofá-cama": <FaCouch />,
};

export async function generateStaticParams() {
  return apartamentos.map((apt) => ({ id: apt.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const apt = apartamentos.find((a) => a.id === id);
  if (!apt) return { title: "Apartamento não encontrado" };

  return {
    title: `${apt.nome} — Recanto do Perico | Guarda do Embaú`,
    description: apt.descricao,
  };
}

export default async function ApartamentoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const apt = apartamentos.find((a) => a.id === id);

  if (!apt) notFound();

  const message = encodeURIComponent(
    `Olá Niceia! Tenho interesse no ${apt.nome} no Recanto do Perico. Poderia me informar sobre disponibilidade?`
  );

  return (
    <main className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back button */}
        <Link
          href="/#apartamentos"
          className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8 mt-4"
        >
          <FaArrowLeft />
          Voltar aos apartamentos
        </Link>

        {/* Image gallery placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="h-72 md:h-96 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-2xl flex items-center justify-center text-emerald-700">
            <div className="text-center">
              <p className="text-xl font-medium">{apt.nome}</p>
              <p className="text-sm opacity-70">Foto principal em breve</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-[calc(12rem-0.5rem)] md:h-[calc(12rem-0.5rem)] bg-gradient-to-br from-emerald-100 to-teal-200 rounded-xl flex items-center justify-center text-emerald-600 text-sm"
              >
                Foto {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {apt.nome}
            </h1>

            <div className="flex items-center gap-6 text-gray-500 mb-6">
              <span className="flex items-center gap-2">
                <FaBed />
                {apt.quartos} quarto{apt.quartos > 1 ? "s" : ""}
              </span>
              <span className="flex items-center gap-2">
                <FaUsers />
                Até {apt.capacidade} pessoa{apt.capacidade > 1 ? "s" : ""}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {apt.descricao}
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Amenidades
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {apt.amenidades.map((a) => (
                <div
                  key={a}
                  className="flex items-center gap-3 text-gray-700 bg-gray-50 px-4 py-3 rounded-lg"
                >
                  <span className="text-emerald-600 text-lg">
                    {iconMap[a] || <FaWifi />}
                  </span>
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 bg-emerald-50 rounded-2xl p-6">
              <p className="text-sm text-gray-500 mb-1">A partir de</p>
              <p className="text-2xl font-bold text-emerald-800 mb-4">
                {apt.preco}
              </p>

              <a
                href={`https://wa.me/5500000000000?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mb-3"
              >
                <FaWhatsapp className="text-xl" />
                Reservar via WhatsApp
              </a>

              <p className="text-xs text-gray-500 text-center">
                Fale diretamente com a Niceia
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
