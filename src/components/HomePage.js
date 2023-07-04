import React from "react";
import PokemonList from "./PokemonList";
import { useGetPokemonList } from "../hooks/queriesHooks";

export default function HomePage() {
  const { pokemonList, loading } = useGetPokemonList();

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
      {!loading ? <PokemonList pokemon={pokemonList} /> : <p>Loading...</p>}
    </article>
  );
}
