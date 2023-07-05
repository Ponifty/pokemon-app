import React from "react";

export default function PokemonCard(props) {
  const { pokemon, clearHandler } = props;
  console.log(pokemon);
  return (
    <div>
      <p>{pokemon.id}</p>
      <p>{pokemon.name}</p>
    </div>
  );
}
