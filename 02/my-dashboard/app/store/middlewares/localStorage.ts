import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";
import { toggleFavorite } from "../pokemons/pokemons";

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (toggleFavorite.match(action)) {
    const { pokemons } = store.getState() as RootState;
    localStorage.setItem("favorites-pokemons", JSON.stringify(pokemons.favorites));
  }

  return result;
};