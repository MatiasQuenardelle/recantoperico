import Image from "next/image";

const destaques = [
  {
    imagem: "/images/areas/pool.png",
    titulo: "Piscina & Jacuzzi",
    descricao:
      "Área de lazer completa com piscina, jacuzzi e espreguiçadeiras para relaxar após um dia de praia.",
  },
  {
    imagem: "/images/areas/trilha.png",
    titulo: "Trilhas & Praias",
    descricao:
      "A poucos passos das melhores trilhas e praias preservadas do litoral catarinense.",
  },
  {
    imagem: "/images/areas/happy-guests.png",
    titulo: "Hospitalidade",
    descricao:
      "Recebidos com carinho pela Niceia, nossos hóspedes se sentem em casa desde o primeiro momento.",
  },
  {
    imagem: "/images/areas/jacuzzi.png",
    titulo: "Área de Lazer",
    descricao:
      "Pergolado, deck de madeira e espaço para churrasco. Tudo para sua estadia ser perfeita.",
  },
];

export default function Destaques() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          O que nos torna especial
        </h2>
        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          Mais do que apartamentos — uma experiência completa em um dos destinos
          mais bonitos do Brasil.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destaques.map((d) => (
            <div
              key={d.titulo}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={d.imagem}
                  alt={d.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {d.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {d.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
