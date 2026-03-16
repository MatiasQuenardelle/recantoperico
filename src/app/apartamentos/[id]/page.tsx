import { notFound } from "next/navigation";
import Image from "next/image";
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
  FaTv,
  FaSwimmingPool,
  FaHotTub,
  FaMicrophone,
  FaBlender,
  FaDoorOpen,
} from "react-icons/fa";
import { MdMicrowave, MdBalcony } from "react-icons/md";
import { GiGasStove } from "react-icons/gi";
import type { Metadata } from "next";

const iconMap: Record<string, React.ReactNode> = {
  "Wi-Fi de alta velocidade": <FaWifi />,
  "Ar condicionado": <FaSnowflake />,
  "Cozinha completa": <FaUtensils />,
  "Micro-ondas": <MdMicrowave />,
  Fogão: <GiGasStove />,
  Geladeira: <FaDoorOpen />,
  "Roupa de cama e banho": <FaBath />,
  "TV com Smart TV": <FaTv />,
  "Sofá-cama": <FaCouch />,
  Varanda: <MdBalcony />,
  "Varanda com vista": <MdBalcony />,
  Estacionamento: <FaCar />,
  "Piscina compartilhada": <FaSwimmingPool />,
  Jacuzzi: <FaHotTub />,
  "Churrasqueira compartilhada": <FaFire />,
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
    title: `${apt.nome} — Recanto do Pericó | Guarda do Embaú`,
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
    `Olá Niceia! Tenho interesse no ${apt.nome} no Recanto do Pericó. Poderia me informar sobre disponibilidade?`
  );

  return (
    <main className="pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back button */}
        <Link
          href="/#apartamentos"
          className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8 mt-4"
        >
          <FaArrowLeft />
          Voltar aos apartamentos
        </Link>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="relative h-72 md:h-96 md:col-span-2 rounded-2xl overflow-hidden">
            <Image
              src={apt.imagens[0]}
              alt={`${apt.nome} — foto principal`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            {apt.imagens.slice(1, 3).map((img, i) => (
              <div
                key={i}
                className="relative h-36 md:h-[calc(12rem-0.5rem)] rounded-xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`${apt.nome} — foto ${i + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            {/* If less than 3 images, show pool area */}
            {apt.imagens.length < 3 && (
              <div className="relative h-36 md:h-[calc(12rem-0.5rem)] rounded-xl overflow-hidden">
                <Image
                  src="/images/areas/pool.png"
                  alt="Área de lazer — piscina"
                  fill
                  className="object-cover"
                />
              </div>
            )}
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

            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              {apt.descricao}
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Amenidades
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-10">
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

            {/* Area photos */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Área de Lazer
            </h2>
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/images/areas/pool.png"
                  alt="Piscina"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/images/areas/jacuzzi.png"
                  alt="Jacuzzi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/images/areas/pool2.png"
                  alt="Espreguiçadeiras"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 bg-emerald-50 rounded-2xl p-6">
              <p className="text-sm text-gray-500 mb-1">Diárias a partir de</p>
              <p className="text-2xl font-bold text-emerald-800 mb-2">
                {apt.preco}
              </p>
              <p className="text-xs text-gray-500 mb-6">
                Valores variam conforme temporada
              </p>

              <a
                href={`https://wa.me/5500000000000?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 mb-4"
              >
                <FaWhatsapp className="text-xl" />
                Reservar via WhatsApp
              </a>

              <p className="text-xs text-gray-500 text-center mb-6">
                Fale diretamente com a Niceia
              </p>

              <div className="border-t border-emerald-200 pt-4">
                <h3 className="font-semibold text-gray-800 mb-3 text-sm">
                  Destaques
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaSwimmingPool className="text-emerald-600" />
                    Piscina com cascata
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHotTub className="text-emerald-600" />
                    Jacuzzi
                  </li>
                  <li className="flex items-center gap-2">
                    <FaWifi className="text-emerald-600" />
                    Wi-Fi rápido
                  </li>
                  <li className="flex items-center gap-2">
                    <FaSnowflake className="text-emerald-600" />
                    Ar condicionado
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCar className="text-emerald-600" />
                    Estacionamento
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
