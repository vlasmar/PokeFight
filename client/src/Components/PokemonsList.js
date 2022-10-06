import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const PokemonsList = ({pokemons}) => {
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();

  const chooseRandom = (e) => {
    const chosenPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    setPlayer1(chosenPokemon.name.english);
  }

  return (
    <div>
      <button onClick={chooseRandom}>Click to choose Random Pokemons</button>
      {player1}
        {pokemons.map((pokemon) => {
          return(
            <p>
            <NavLink to={`/pokemons/${pokemon.id}`}>{pokemon.name.english}</NavLink>
            </p>
          )
        })}
    </div>
  );
}

export default PokemonsList;