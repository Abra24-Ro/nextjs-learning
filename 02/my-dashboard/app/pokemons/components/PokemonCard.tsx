"use client";
import Link from "next/link";
import Image from "next/image";
import { SimplePokemons } from "../interfaces/simple-pokemons";
import { IoArrowForwardOutline, IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { toggleFavorite } from "@/app/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemons;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const paddedId = String(id).padStart(3, "0");
  const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  const onToggleFavorite = () => {
     dispatch(toggleFavorite(pokemon))
  }
  return (
    <div className="w-full bg-[#f8f7f4] border border-[#e4e1d7] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* BANNER */}
      <div className="h-20 bg-[#1f2a24] relative">
        <span className="absolute bottom-2 right-3 text-[11px] text-[#5a6b5d] tracking-[0.15em] font-mono">
          #{paddedId}
        </span>
      </div>
      {/* BODY */}
      <div className="px-4 pb-4">
        {/* Avatar + favorito */}
        <div className="flex items-center justify-between -mt-8 mb-4 z-10 relative">
          <div className="w-16 h-16 rounded-xl bg-[#2c3a31] border-[3px] border-[#f8f7f4] flex items-center justify-center shadow-sm">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              width={52}
              height={52}
              alt={name}
              className="object-contain"
              priority={false}
            />
          </div>
          <button onClick={onToggleFavorite} className="cursor-pointer rounded-full text-[#a8a39a] hover:text-red-500 transition-colors p-1 mt-8">
            {
              isFavorite ? (
                <IoHeart size={20} className="text-red-500" />
              )
              : (
                <IoHeartOutline size={20} />
              )
            }
          </button>
        </div>

        {/* Nombre */}
        <p className="capitalize text-[15px] font-medium text-[#1f2a24] tracking-wide mb-0.5">
          {name}
        </p>
        <p className="text-[12px] text-[#8c9e8f] font-mono mb-4">
          @{name.toLowerCase()}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-[#f0ede8] rounded-lg px-3 py-2">
            <p className="text-[13px] font-medium text-[#1f2a24]">—</p>
            <p className="text-[10px] text-[#a8a39a] tracking-widest uppercase">
              Campañas
            </p>
          </div>
          <div className="bg-[#f0ede8] rounded-lg px-3 py-4">
            <p className="text-[13px] font-medium text-[#1f2a24]">—</p>
            <p className="text-[10px] text-[#a8a39a] tracking-widest uppercase">
              Seguidores
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/dashboard/pokemons/${name}`}
          className="block text-center bg-[#1f2a24] text-[#c8d4ca] text-[12px] tracking-[0.12em] uppercase py-2.5 rounded-lg hover:bg-[#2c3a31] transition-colors"
        >
          Ver perfil
        </Link>
      </div>

      {/* FOOTER */}
      <Link
        href={`/dashboard/pokemon/${name}`}
        className="flex items-center justify-between px-4 py-3 text-[11px] text-[#8c9e8f] tracking-[0.12em] uppercase border-t border-[#e4e1d7] hover:bg-[#f0ede8] transition-colors"
      >
        Dashboard
        <IoArrowForwardOutline size={13} />
      </Link>
    </div>
  );
};
