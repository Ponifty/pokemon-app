import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id}>
          <span>{p.id}</span>
          <p>{p.name}</p>
        </div>
      ))}
    </div>
  );
}
