import React, { useState, useEffect } from "react";
import { useGetPokemonList } from "../hooks/queriesHooks";

export default function HomePage() {
  const [pokemonName, setPokemonName] = useState("");
  const pokemonList = useGetPokemonList();
  console.log(pokemonList);

  return (
    <article className="home-page">
      <h1>Home Page</h1>
      <form>
        <label htmlFor="pokemon" className="">
          Search Pokemon
        </label>
        <input
          id="pokemon"
          type="text"
          onChange={(e) => setPokemonName(e.target.value)}
        />
        {pokemonList.map(pokemon => <p key={pokemon.id}>{pokemon.name}</p>)}
      </form>
    </article>
  );
}
