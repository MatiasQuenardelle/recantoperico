export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="h-80 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-2xl flex items-center justify-center text-emerald-600">
            <div className="text-center">
              <p className="text-lg font-medium">Foto da Niceia</p>
              <p className="text-sm opacity-70">Em breve</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre o Recanto do Perico
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Bem-vindo ao <strong>Recanto do Perico</strong>, um pequeno
              complexo de apartamentos localizado em{" "}
              <strong>Guarda do Embaú</strong>, uma das praias mais bonitas e
              preservadas do litoral catarinense.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Administrado com muito carinho pela <strong>Niceia</strong>, que
              possui anos de experiência em hospitalidade, o Recanto do Perico
              oferece a combinação perfeita entre conforto, simplicidade e
              contato com a natureza.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              São 6 apartamentos aconchegantes, a maioria com 1 quarto, ideais
              para casais e pequenos grupos que buscam tranquilidade, praia, surf
              e trilhas incríveis.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aqui você é recebido como da família. A Niceia cuida de cada
              detalhe para que sua estadia seja inesquecível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
