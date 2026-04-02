import { Pokemon } from "@/app/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

//En build time, Next.js ejecutará esta función para generar las rutas estáticas para cada Pokémon. Esto es especialmente útil para mejorar el rendimiento y la SEO, ya que las páginas se generan de antemano y se sirven rápidamente a los usuarios.
export async function generateStaticParams() {
  const staticPokemons = Array.from({ length: 151 }).map((_, index) => ({
    id: (index + 1).toString(),
  }));

  return staticPokemons.map((pokemon) => ({
    id: pokemon.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, name } = await getPokemon((await params).id);
    return {
      title: `#${id} - ${name}`,
      description: `Details of Pokemon ${name}`,
    };
  } catch (error) {
    return {
      title: `Pokemon no encontrado`,
      description: `No se pudo encontrar el pokemon solicitado. Es posible que el recurso haya sido eliminado o que la URL sea incorrecta.`,
    };
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "force-cache",
    }).then((res) => res.json());

    return res;
  } catch (error) {
    notFound();
  }
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon((await params).id);

  return (
    <div className="min-h-screen bg-[#f8f7f4] px-6 py-12 font-serif">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* HEADER */}
        <header className="border-b border-[#e4e1d7] pb-6 space-y-2">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#7a847c]">
            Pokédex · Detalle
          </p>

          <h1 className="text-3xl md:text-4xl text-[#1f2a24] font-normal capitalize tracking-tight">
            #{pokemon.id} {pokemon.name}
          </h1>
        </header>

        {/* HERO */}
        <section className="flex flex-col items-center justify-center py-8 border border-[#e4e1d7] bg-white">
          <Image
            src={pokemon.sprites.other?.dream_world.front_default ?? ""}
            width={180}
            height={180}
            alt={`Imagen del pokemon ${pokemon.name}`}
            className="mb-4"
          />

          <div className="flex gap-3 text-[11px] tracking-[0.15em] uppercase text-[#7a847c]">
            {pokemon.types.map((type) => (
              <span key={type.slot}>{type.type.name}</span>
            ))}
          </div>
        </section>

        {/* INFO GRID */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* PESO */}
          <div className="border border-[#e4e1d7] bg-white px-6 py-5 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#7a847c]">
              Peso
            </p>
            <p className="text-lg text-[#1f2a24]">{pokemon.weight}</p>
          </div>

          {/* MOVES */}
          <div className="border border-[#e4e1d7] bg-white px-6 py-5 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#7a847c]">
              Movimientos
            </p>

            <div className="flex flex-wrap gap-2">
              {pokemon.moves.slice(0, 10).map((move) => (
                <span
                  key={move.move.name}
                  className="text-[11px] px-2 py-1 border border-[#e4e1d7] text-[#2b2f2c] capitalize"
                >
                  {move.move.name}
                </span>
              ))}
            </div>
          </div>

          {/* SPRITES */}
          <div className="border border-[#e4e1d7] bg-white px-6 py-5 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#7a847c]">
              Sprites
            </p>

            <div className="flex justify-center gap-6">
              <Image
                src={pokemon.sprites.front_default}
                width={80}
                height={80}
                alt="front"
              />
              <Image
                src={pokemon.sprites.back_default}
                width={80}
                height={80}
                alt="back"
              />
            </div>
          </div>

          {/* SHINY */}
          <div className="border border-[#e4e1d7] bg-white px-6 py-5 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#7a847c]">
              Shiny
            </p>

            <div className="flex justify-center gap-6">
              <Image
                src={pokemon.sprites.front_shiny}
                width={80}
                height={80}
                alt="shiny front"
              />
              <Image
                src={pokemon.sprites.back_shiny}
                width={80}
                height={80}
                alt="shiny back"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
