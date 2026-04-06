import { FavoritesPokemons } from "@/app/pokemons";

export const metadata = {
  title: "Pokémons Favoritos",
  description: "Listado de tus pokémons favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="w-full min-h-screen py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-8">

        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[#e4e1d7] pb-6">
          <div className="space-y-1">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#7a847c] font-mono">
              Pokédex · Favoritos
            </p>
            <h1 className="text-2xl md:text-3xl text-[#1f2a24] font-normal tracking-tight">
              Mis favoritos
            </h1>
          </div>

          <span className="self-start sm:self-auto text-[10px] tracking-[0.15em] uppercase text-[#7a847c] border border-[#e4e1d7] bg-[#f1efe9] px-3 py-1 rounded-full whitespace-nowrap">
            0 pokémons
          </span>
        </header>

        <FavoritesPokemons />
      </div>
    </div>
  );
}