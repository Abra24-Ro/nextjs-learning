"use server";

import { revalidateTag } from "next/cache";

export async function revalidatePokemons() {
  revalidateTag("pokemons", "max");
}