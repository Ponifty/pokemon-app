import React, { useState } from "react";
import PokemonList from "./PokemonList";
import { useGetPokemonList } from "../hooks/queriesHooks";
import PokemonCard from "./PokemonCard";

export default function HomePage() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { pokemonList, loading } = useGetPokemonList();

  return (
    <article className="home-page">
      <h1>Home Page</h1>
      {selectedPokemon ? (
        <PokemonCard />
      ) : !loading ? (
        <PokemonList pokemon={pokemonList} />
      ) : (
        <p>Loading...</p>
      )}
      {/* {!loading ? <PokemonList pokemon={pokemonList} /> : <p>Loading...</p>} */}
    </article>
  );
}
