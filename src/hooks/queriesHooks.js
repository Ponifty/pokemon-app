import axios from "axios";
import { useEffect, useState } from "react";

export const useGetPokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const getPokemonList =  () => {
       axios
        .post("https://beta.pokeapi.co/graphql/v1beta", {
          query: `query samplePokeAPIquery {
          pokemon_v2_pokemon {
            id
            name
          }
        }`,
        })
        // .then((response) => console.log(response))
        .then((data) => setPokemonList(data.data.data.pokemon_v2_pokemon))
        .catch((error) => console.log(error));
    };
    getPokemonList()
  }, []);

  return pokemonList;
};
