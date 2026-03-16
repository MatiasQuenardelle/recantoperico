"use client";

export default function GoogleMapSection() {
  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Localização
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Estamos em Guarda do Embaú, Palhoça — Santa Catarina. Uma vila de
          pescadores cercada por Mata Atlântica, rio e mar.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.0!2d-48.5938893!3d-27.8954143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527292b215c86e9%3A0xbf0e877a8800a047!2sRecanto%20Peric%C3%B3%20Guarda%20do%20Emba%C3%BA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Recanto do Pericó — Guarda do Embaú"
          />
        </div>
      </div>
    </section>
  );
}
