import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pool / property image */}
          <div className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/areas/pool.png"
              alt="Área de lazer do Recanto do Pericó"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre o Recanto do Pericó
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Bem-vindo ao <strong>Recanto do Pericó</strong>, um charmoso
              complexo de apartamentos localizado em{" "}
              <strong>Guarda do Embaú</strong>, uma das praias mais bonitas e
              preservadas do litoral de Santa Catarina.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Administrado com muito carinho pela <strong>Niceia</strong>, que
              possui anos de experiência em hospitalidade, o Recanto oferece
              apartamentos modernos com cozinha completa, ar condicionado, Wi-Fi
              de alta velocidade e Smart TV.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Além dos apartamentos, contamos com uma incrível{" "}
              <strong>área de lazer com piscina, jacuzzi, pergolado e churrasqueira</strong>
              {" "}— perfeita para relaxar após um dia de praia, surf ou trilhas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aqui você é recebido como da família. A Niceia cuida de cada
              detalhe para que sua estadia seja inesquecível.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-700">6</p>
                <p className="text-sm text-gray-600">Apartamentos</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-700">5 min</p>
                <p className="text-sm text-gray-600">Da praia</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-700">100%</p>
                <p className="text-sm text-gray-600">Equipados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
