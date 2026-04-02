import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#f8f7f4] font-serif">

      <div className="max-w-xl w-full text-center space-y-8">

        {/* Label */}
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#7a847c]">
          Recurso no encontrado
        </p>

        {/* Código */}
        <h1 className="text-5xl md:text-6xl text-[#1f2a24] font-normal tracking-tight">
          404
        </h1>

        {/* Mensaje */}
        <div className="space-y-3">
          <p className="text-lg text-[#2b2f2c]">
            La página solicitada no está disponible.
          </p>

          <p className="text-sm text-[#8c877a]">
            Es posible que el recurso haya sido eliminado o que la URL sea incorrecta.
          </p>
        </div>

        {/* Acción */}
        <div className="pt-4">
          <Link
            href="/dashboard/pokemons"
            className="
              inline-block
              px-6 py-2
              text-[12px] tracking-[0.15em] uppercase
              border border-[#d6d2c4]
              text-[#3e4d42]
              hover:bg-[#2c3a31] hover:text-[#f8f7f4]
              transition
            "
          >
            Volver al listado
          </Link>
        </div>

      </div>
    </div>
  );
}