import Link from "next/link";
import Image from "next/image";
import { SimplePokemons } from "../interfaces/simple-pokemons";
import {
  IoGridOutline,
  IoHeartOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";

interface Props {
  pokemon: SimplePokemons;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const paddedId = String(id).padStart(3, "0");

  return (
    <div className="w-full bg-[#f8f7f4] border border-[#e4e1d7] rounded-md overflow-hidden hover:shadow-md transition duration-200">
      {/* HEADER */}
      <div className="flex flex-col items-center py-8 px-6 border-b border-[#e4e1d7] bg-[#1f2a24]">
        <div className="w-20 h-20 rounded-full bg-[#2c3a31] border border-[#3e4d42] flex items-center justify-center mb-4">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            width={64}
            height={64}
            alt={name}
            className="object-contain"
            priority={false}
          />
        </div>

        <span className="text-[11px] tracking-[0.2em] text-[#7a847c] mb-1">
          Nº {paddedId}
        </span>

        <h3 className="capitalize text-[15px] text-[#e8e6df] font-medium tracking-wide mb-4">
          {name}
        </h3>

        <Link
          href={`/dashboard/pokemons/${name}`}
          className="text-[11px] tracking-[0.18em] uppercase border border-[#3e4d42] px-4 py-1 text-[#9aa69d] hover:bg-[#2c3a31] hover:text-[#e8e6df] transition"
        >
          Ver detalle
        </Link>
      </div>

      {/* ACTIONS */}
      <div className="divide-y divide-[#e4e1d7]">
        <Link
          href={`/dashboard/pokemon/${id}`}
          className="flex items-center gap-3 px-5 py-4 hover:bg-[#f1efe9] transition"
        >
          <IoGridOutline className="text-[#6b756d]" size={18} />
          <div>
            <p className="text-[13px] text-[#2b2f2c] font-medium">Campañas</p>
            <span className="text-[11px] text-[#8c877a]">
              Ver campañas activas
            </span>
          </div>
        </Link>

        <Link
          href={`/dashboard/pokemon/${id}`}
          className="flex items-center gap-3 px-5 py-4 hover:bg-[#f1efe9] transition"
        >
          <IoHeartOutline className="text-[#6b756d]" size={18} />
          <div>
            <p className="text-[13px] text-[#2b2f2c] font-medium">Donaciones</p>
            <span className="text-[11px] text-[#8c877a]">
              Últimas donaciones
            </span>
          </div>
        </Link>
      </div>

      {/* FOOTER */}
      <Link
        href={`/dashboard/pokemon/${name}`}
        className="flex items-center px-5 py-4 text-[12px] tracking-[0.15em] uppercase text-[#7a847c] hover:bg-[#f1efe9] transition"
      >
        Dashboard
        <IoArrowForwardOutline className="ml-auto text-[#a8a39a]" size={14} />
      </Link>
    </div>
  );
};
