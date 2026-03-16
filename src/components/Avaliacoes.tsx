import { FaStar, FaGoogle } from "react-icons/fa";

interface Avaliacao {
  nome: string;
  texto: string;
  tempo: string;
}

const avaliacoes: Avaliacao[] = [
  {
    nome: "Camila S.",
    texto:
      "Lugar incrível! Muito limpo, organizado e a Niceia é uma anfitriã maravilhosa. A piscina e a jacuzzi são um diferencial enorme. Voltaremos com certeza!",
    tempo: "2 meses atrás",
  },
  {
    nome: "Rafael M.",
    texto:
      "Apartamento muito confortável e completo, com tudo que precisávamos. A localização é perfeita, pertinho da praia. A Niceia nos recebeu super bem!",
    tempo: "3 meses atrás",
  },
  {
    nome: "Juliana P.",
    texto:
      "Melhor hospedagem que já ficamos em Guarda do Embaú! O apartamento é moderno, a área de lazer com piscina e jacuzzi é maravilhosa. Recomendo demais!",
    tempo: "4 meses atrás",
  },
  {
    nome: "Fernando L.",
    texto:
      "Excelente custo-benefício. Apartamento limpo, bem equipado, com Wi-Fi rápido e ar condicionado. A Niceia é muito atenciosa. Nota 10!",
    tempo: "5 meses atrás",
  },
  {
    nome: "Ana Carolina R.",
    texto:
      "Que lugar especial! Ficamos no apartamento 2 e amamos. A vista da varanda, a piscina, tudo perfeito. A Niceia faz a gente se sentir em casa.",
    tempo: "6 meses atrás",
  },
  {
    nome: "Lucas T.",
    texto:
      "Hospedagem nota 5 estrelas! Apartamento impecável, localização excelente e a anfitriã é super prestativa. Já estamos planejando voltar!",
    tempo: "7 meses atrás",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-sm" />
      ))}
    </div>
  );
}

export default function Avaliacoes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaGoogle className="text-2xl text-blue-500" />
            <span className="text-lg font-semibold text-gray-700">
              Avaliações do Google
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos hóspedes dizem
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-500">
              — {avaliacoes.length} avaliações
            </span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avaliacoes.map((av) => (
            <div
              key={av.nome}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">
                    {av.nome
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {av.nome}
                    </p>
                    <p className="text-xs text-gray-400">{av.tempo}</p>
                  </div>
                </div>
                <FaGoogle className="text-gray-300" />
              </div>
              <Stars />
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                &ldquo;{av.texto}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Recanto+Pericó+Guarda+do+Embaú/@-27.8954143,-48.5938893,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium"
          >
            <FaGoogle />
            Ver todas as avaliações no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
