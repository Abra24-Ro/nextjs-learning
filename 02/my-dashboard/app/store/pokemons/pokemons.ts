import { SimplePokemons } from "@/app/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: { [key: string]: SimplePokemons };
}

const initialState: PokemonsState = { favorites: {} };

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritesPokemons: (state, action: PayloadAction<{ [key: string]: SimplePokemons }>) => {
      state.favorites = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemons>) => {
      const { id } = action.payload;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }
      state.favorites[id] = action.payload;
    },
  },
});

export const { toggleFavorite, setFavoritesPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;