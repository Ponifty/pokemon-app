import axios from "axios";
import React from "react";

// Url to check images links cause API images with QraphQL are not yed dealed (https://unpkg.com/css-chain-test@1.0.8/src/PokeApi-Explorer.html)

export function CheckImage(path) {
  axios
    .get(path)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

export default function PokemonCard(props) {
  const { pokemon, clearHandler } = props;
  //   const pokemonImgPath = JSON.parse(
  //     pokemon.pokemon_v2_pokemonsprites[0].sprites
  //   );
  //   console.log("path:", pokemonImgPath);
  const pokemonImgUrl1 = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
  const pokemonImgUrl2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const pokemonImgUrl3 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  return (
    <div>
      <p>#{pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <img src={pokemonImgUrl1} alt={pokemon.name} />
      <div onClick={clearHandler}>x</div>
    </div>
  );
}
