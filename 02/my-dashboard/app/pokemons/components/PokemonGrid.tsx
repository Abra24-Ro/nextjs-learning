import { SimplePokemons } from "../interfaces/simple-pokemons";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemons[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div
      className="
        grid
        gap-y-8
        gap-x-6
        sm:gap-x-8
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
      
      "
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
