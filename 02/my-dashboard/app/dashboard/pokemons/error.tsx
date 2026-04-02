"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#f8f7f4] font-serif">

      <div className="max-w-xl w-full text-center space-y-8">

        {/* Ilustración */}
        <div className="opacity-80">
          <svg
            className="w-full max-w-md mx-auto text-[#2c3a31]"
            viewBox="0 0 1119.60911 699"
          >
            {/* puedes dejar tu SVG pero sin colores fuertes */}
          </svg>
        </div>

        {/* Contenido */}
        <div className="space-y-4">

          <p className="text-[11px] tracking-[0.25em] uppercase text-[#7a847c]">
            Error del sistema
          </p>

          <h1 className="text-4xl md:text-5xl text-[#1f2a24] font-normal tracking-tight">
            500
          </h1>

          <p className="text-lg text-[#2b2f2c]">
            Ha ocurrido un problema inesperado en el servidor.
          </p>

          <p className="text-sm text-[#8c877a]">
            Nuestro equipo ha sido notificado. Intente nuevamente en unos momentos.
          </p>

        </div>

        {/* Acción */}
        <div className="pt-4">
          <button
            onClick={() => reset()}
            className="
            cursor-pointer
              px-6 py-2
              text-[12px] tracking-[0.15em] uppercase
              border border-[#d6d2c4]
              text-[#3e4d42]
              hover:bg-[#2c3a31] hover:text-[#f8f7f4]
              transition
            "
          >
            Reintentar
          </button>
        </div>

      </div>
    </div>
  );
}