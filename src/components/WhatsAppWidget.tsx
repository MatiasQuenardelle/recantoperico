"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const message = encodeURIComponent(
    "Olá Niceia! Gostaria de saber mais sobre o Recanto do Perico em Guarda do Embaú."
  );

  return (
    <a
      href={`https://wa.me/5500000000000?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
