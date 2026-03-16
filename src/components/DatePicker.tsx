"use client";

import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale";

export default function DatePickerSection() {
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
      `Olá Niceia! Gostaria de verificar a disponibilidade no Recanto do Perico.\n\nCheck-in: ${checkinStr}\nCheck-out: ${checkoutStr}`
    );
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");
  };

  return (
    <section className="bg-emerald-800 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Verifique a Disponibilidade
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <div className="flex flex-col">
            <label className="text-sm mb-1 opacity-80">Check-in</label>
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
              className="px-4 py-2.5 rounded-lg text-gray-900 w-48"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 opacity-80">Check-out</label>
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
              className="px-4 py-2.5 rounded-lg text-gray-900 w-48"
            />
          </div>
          <button
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors mt-4 md:mt-6"
          >
            Consultar via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
