"use client";

import { useAppSelector } from "@/app/store";
import { PokemonGrid } from "./PokemonGrid";

export const FavoritesPokemons = () => {
  const pokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites),
  );

  console.log(pokemons);
  if (pokemons.length === 0) return <NoFavorites />;

  return <PokemonGrid pokemons={pokemons} />;
};

const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#f0ede8] flex items-center justify-center mb-5">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a8a39a"
          strokeWidth="1.5"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
      <p className="text-[15px] text-[#1f2a24] font-medium mb-1">
        Sin favoritos aún
      </p>
      <p className="text-[13px] text-[#a8a39a] max-w-xs leading-relaxed">
        Marca pokémons con el corazón para verlos aquí.
      </p>
    </div>
  );
};
