import React, { useReducer, useState } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const indexCounterReducer = (indexCounter, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      if (indexCounter.max >= action.maxLength) {
        return {
          ...indexCounter,
          min: action.maxLength - indexCounter.count,
          max: action.maxLength,
        };
      } else {
        return {
          ...indexCounter,
          min: indexCounter.min + indexCounter.count,
          max: indexCounter.max + indexCounter.count,
        };
      }
    case ACTIONS.DECREMENT:
      if (indexCounter.min - indexCounter.count <= 0) {
        return {
          ...indexCounter,
          min: 0,
          max: 10,
        };
      } else {
        return {
          ...indexCounter,
          min: indexCounter.min - indexCounter.count,
          max: indexCounter.max - indexCounter.count,
        };
      }
    default:
      return;
  }
};

export default function PokemonList({ pokemon, handleSelectedPokemon }) {
  const [indexCounter, dispatch] = useReducer(indexCounterReducer, {
    min: 0,
    max: 10,
    count: 10,
  });
  const [search, setSearch] = useState("");

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Chercher un pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {pokemon
        .filter((value) => {
          return value.name.includes(search);
        })
        .slice(indexCounter.min, indexCounter.max)
        .map((p) => (
          <p key={p.id} onClick={handleSelectedPokemon(p)}>
            {p.name}
          </p>
        ))}
      {!search ? (
        <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
          prev
        </button>
      ) : null}
      {!search ? (
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.INCREMENT, maxLength: pokemon.length - 1 })
          }
        >
          next
        </button>
      ) : null}
    </>
  );
}
