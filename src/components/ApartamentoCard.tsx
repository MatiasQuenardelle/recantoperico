import Link from "next/link";
import { FaBed, FaUsers } from "react-icons/fa";
import type { Apartamento } from "@/data/apartamentos";

export default function ApartamentoCard({ apt }: { apt: Apartamento }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
      {/* Image placeholder */}
      <div className="h-56 bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center text-emerald-700 relative overflow-hidden">
        <div className="text-center">
          <p className="text-lg font-medium">{apt.nome}</p>
          <p className="text-sm opacity-70">Foto em breve</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{apt.nome}</h3>
        <p className="text-gray-600 mb-4 text-sm">{apt.descricaoCurta}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <FaBed />
            {apt.quartos} quarto{apt.quartos > 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1">
            <FaUsers />
            Até {apt.capacidade} pessoa{apt.capacidade > 1 ? "s" : ""}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {apt.amenidades.slice(0, 3).map((a) => (
            <span
              key={a}
              className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full"
            >
              {a}
            </span>
          ))}
          {apt.amenidades.length > 3 && (
            <span className="text-xs text-gray-400">
              +{apt.amenidades.length - 3} mais
            </span>
          )}
        </div>

        <Link
          href={`/apartamentos/${apt.id}`}
          className="inline-block w-full text-center bg-emerald-700 text-white py-2.5 rounded-full font-medium hover:bg-emerald-800 transition-colors"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}
