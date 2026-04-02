import Link from "next/link";

interface Props {
  id?: string;
}

export default function PokemonNotFound({ id }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#f8f7f4] font-serif">

      <div className="max-w-xl w-full text-center space-y-8">

        {/* Label */}
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#7a847c]">
          Pokédex · Registro no encontrado
        </p>

        {/* Código */}
        <h1 className="text-5xl md:text-6xl text-[#1f2a24] font-normal tracking-tight">
          —
        </h1>

        {/* Mensaje */}
        <div className="space-y-3">

          <p className="text-lg text-[#2b2f2c]">
            No existe información para este Pokémon.
          </p>

          <p className="text-sm text-[#8c877a]">
            {id
              ? `El identificador "${id}" no corresponde a ningún registro en la Pokédex.`
              : "El recurso solicitado no se encuentra disponible en este momento."}
          </p>

        </div>

        {/* Acción */}
        <div className="pt-4 flex justify-center gap-3">

          <Link
            href="/dashboard/pokemons"
            className="
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

          <Link
            href="/dashboard"
            className="
              px-6 py-2
              text-[12px] tracking-[0.15em] uppercase
              text-[#7a847c]
              hover:text-[#1f2a24]
              transition
            "
          >
            Dashboard
          </Link>

        </div>

      </div>
    </div>
  );
}