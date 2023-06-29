import React, { useState } from "react";
import PokemonList from "./PokemonList";
import { useGetPokemonList } from "../hooks/queriesHooks";

export default function HomePage() {
  // const [pokemonName, setPokemonName] = useState("");
  // const [pokemonInterval, setPokemonInterval] = useState(10);
  const { pokemonList, loading } = useGetPokemonList();
  console.log(pokemonList);
  console.log(loading);

  return (
    <article className="home-page">
      <h1>Home Page</h1>
      {/* <form>
        <label htmlFor="pokemon" className="">
          Search Pokemon
        </label>
        <input
          id="pokemon"
          type="text"
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </form> */}
      <PokemonList pokemon={pokemonList} />
    </article>
  );
}
