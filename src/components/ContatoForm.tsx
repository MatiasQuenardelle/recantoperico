"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContatoForm() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá Niceia! Meu nome é ${nome}.\n\n${mensagem}`
    );
    window.open(`https://wa.me/5500000000000?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Entre em Contato
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Tem alguma dúvida ou quer fazer uma reserva? Fale diretamente com a
          Niceia pelo WhatsApp!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Seu Nome
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-gray-900"
              placeholder="Como podemos te chamar?"
            />
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-none text-gray-900"
              placeholder="Datas de interesse, número de hóspedes, dúvidas..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
          >
            <FaWhatsapp className="text-xl" />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
