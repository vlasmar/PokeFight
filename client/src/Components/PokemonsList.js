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
    <div className="containerCards">
      <button className="buttonList" onClick={chooseRandom}>Click to choose Random Pokemons</button>
      <div className="chosen-pokemons">
      {player1 && player2 && (
        <div className="random-pokemons">
          <div className="pokemon-card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player1.id}.png`} alt={player1.id}/>
            <h1>{player1.name.english}</h1>
            <h3>Type:</h3>
            {player1.type.map((type) => {
              return (
                <p>{type}</p>
              )
            })}
            <div>
              <h3>Stats:</h3>
              <p>HP: {player1.base.HP}</p>
              <p>Attack: {player1.base.Attack}</p>
              <p>Defense: {player1.base.Defense}</p>
              <p>Sp. Attack: {player1.base['Sp. Attack']}</p>
              <p>Sp. Defense: {player1.base['Sp. Defense']}</p>
              <p>Speed: {player1.base.Speed}</p>
            </div>
          </div>
          <div className="pokemon-card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player2.id}.png`} alt={player2.id}/>
            <h1>{player2.name.english}</h1>
            <h3>Type:</h3>
            {player2.type.map((type) => {
              return (
                <p>{type}</p>
              )
            })}
            <div>
              <h3>Type:</h3>
              <p>HP: {player2.base.HP}</p>
              <p>Attack: {player2.base.Attack}</p>
              <p>Defense: {player2.base.Defense}</p>
              <p>Sp. Attack: {player2.base['Sp. Attack']}</p>
              <p>Sp. Defense: {player2.base['Sp. Defense']}</p>
              <p>Speed: {player2.base.Speed}</p>
            </div>
          </div>
        </div>
      )}
      </div>
      <div className="pokeprofile">
        {pokemons.map((pokemon) => {
          return(
            <div className="pokemons">
            <NavLink to={`/pokemons/${pokemon.id}`}>
              <div className="pokemon-item">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.id}/>
              <h1>{pokemon.name.english}</h1>
              </div>
            </NavLink>
            </div>
          )
        })}
        </div>
    </div>
  );
}

export default PokemonsList;