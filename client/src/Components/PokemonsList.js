import React from "react";
import { NavLink } from "react-router-dom";

const PokemonsList = ({pokemons}) => {
  return (
    <div>
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