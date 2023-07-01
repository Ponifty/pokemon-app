import React, { useReducer } from "react";

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

export default function PokemonList({ pokemon }) {
  const [indexCounter, dispatch] = useReducer(indexCounterReducer, {
    min: 0,
    max: 9,
    count: 10,
  });

  return (
    <>
      {pokemon.slice(indexCounter.min, indexCounter.max).map((p) => (
        <div key={p.id}>
          <span>{p.id}</span>
          <p>{p.name}</p>
        </div>
      ))}
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        prev
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.INCREMENT, maxLength: pokemon.length - 1 })
        }
      >
        next
      </button>
    </>
  );
}
