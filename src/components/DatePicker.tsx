"use client";

import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale";
import { FaWhatsapp } from "react-icons/fa";

export default function DatePickerBar() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const handleWhatsApp = () => {
    const checkinStr = checkIn
      ? checkIn.toLocaleDateString("pt-BR")
      : "não selecionado";
    const checkoutStr = checkOut
      ? checkOut.toLocaleDateString("pt-BR")
      : "não selecionado";
    const message = encodeURIComponent(
      `Olá Niceia! Gostaria de verificar a disponibilidade no Recanto do Pericó.\n\nCheck-in: ${checkinStr}\nCheck-out: ${checkoutStr}`
    );
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-t-2xl md:rounded-t-3xl shadow-2xl px-6 py-5 max-w-3xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
        <div className="flex flex-col flex-1 w-full md:w-auto">
          <label className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
            Check-in
          </label>
          <ReactDatePicker
            selected={checkIn}
            onChange={(date: Date | null) => setCheckIn(date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={new Date()}
            locale={ptBR}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione a data"
            className="px-4 py-2.5 rounded-lg text-gray-900 border border-gray-200 w-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
          />
        </div>
        <div className="flex flex-col flex-1 w-full md:w-auto">
          <label className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
            Check-out
          </label>
          <ReactDatePicker
            selected={checkOut}
            onChange={(date: Date | null) => setCheckOut(date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn || new Date()}
            locale={ptBR}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione a data"
            className="px-4 py-2.5 rounded-lg text-gray-900 border border-gray-200 w-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
          />
        </div>
        <button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 mt-2 md:mt-5 w-full md:w-auto justify-center"
        >
          <FaWhatsapp className="text-lg" />
          Consultar
        </button>
      </div>
    </div>
  );
}
