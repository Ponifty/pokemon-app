import axios from "axios";
import { useEffect, useState } from "react";
import * as GQL from "../graphQL/index";

const urlAPI = "https://beta.pokeapi.co/graphql/v1beta";

export const useGetPokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();

  useEffect(() => {
    setLoading(true);
    const getPokemonList = async () => {
      await axios
        .post(urlAPI, {
          query: GQL.NAME_REQUEST,
          signal: controller.signal,
        })
        .then((data) => {
          setLoading(false);
          setPokemonList(data.data.data.pokemon_v2_pokemon);
        })
        .catch((error) => console.log(error));
    };
    getPokemonList();

    return () => {
      controller.abort();
    };
  }, []);

  return { pokemonList, loading };
};
