import { PokemonGrid, PokemonsResponse, SimplePokemons } from "@/app/pokemons";


const getPokemons = async ({
  limit = 20,
  offset = 0,
}): Promise<SimplePokemons[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());

 

  return data.results.map((result) => ({
    id: result.url.split("/").slice(-2, -1)[0],
    name: result.name,
  }));
};

export default async function PokemonsPage() {
  
  const pokemons = await getPokemons({ limit: 151, offset: 0 });

  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8 font-serif">
      
    
      <div className="max-w-7xl mx-auto space-y-10">

      
        <header className="border-b border-[#e4e1d7] pb-6 space-y-2">
          
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#7a847c]">
            Pokédex · Primera Generación
          </p>

          <div className="flex flex-wrap items-center gap-3">
            
            <h1 className="text-2xl md:text-3xl text-[#1f2a24] font-normal tracking-tight">
              Listado de Pokémons
            </h1>

            <span className="text-[10px] tracking-[0.15em] uppercase text-[#7a847c] border border-[#e4e1d7] bg-[#f1efe9] px-2 py-[2px]">
              Estáticos · {pokemons.length}
            </span>

          </div>
        </header>

        {/* GRID */}
        <PokemonGrid pokemons={pokemons} />

      </div>
    </div>
  );
}