import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const PokemonsList = ({pokemons}) => {
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();

  const chooseRandom = (e) => {
    const chosenPokemon1 = pokemons[Math.floor(Math.random() * pokemons.length)];
    setPlayer1(chosenPokemon1);
    const chosenPokemon2 = pokemons[Math.floor(Math.random() * pokemons.length)];
    setPlayer2(chosenPokemon2);
  }

  return (
    <div>
      <button onClick={chooseRandom}>Click to choose Random Pokemons</button>
      {player1 && player2 && (
        <div>
          <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player1.id}.png`} alt={player1.id}/>
            <h3>{player1.name.english}</h3>
            <h4>Type:</h4>
            {player1.type.map((type) => {
              return (
                <p>{type}</p>
              )
            })}
            <div>
              {player1.base.HP}
              {player1.base.Attack}
              {player1.base.Defense}
              {player1.base['Sp. Attack']}
              {player1.base['Sp. Defense']}
              {player1.base.Speed}
            </div>
          </div>
          <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player2.id}.png`} alt={player2.id}/>
            <h3>{player2.name.english}</h3>
            <h4>Type:</h4>
            {player2.type.map((type) => {
              return (
                <p>{type}</p>
              )
            })}
            <div>
              {player2.base.HP}
              {player2.base.Attack}
              {player2.base.Defense}
              {player2.base['Sp. Attack']}
              {player2.base['Sp. Defense']}
              {player2.base.Speed}
            </div>
          </div>
          <button>Begin Fight!</button>
        </div>
      )}
        {pokemons.map((pokemon) => {
          return(
            <p>
            <NavLink to={`/pokemons/${pokemon.id}`}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.id}/>
              {pokemon.name.english}
            </NavLink>
            </p>
          )
        })}
    </div>
  );
}

export default PokemonsList;