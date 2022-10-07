import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";


const Pokemon = () => {
    const [pokemon, setPokemon] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios
          .get(`https://pokefight-project.herokuapp.com/pokemons/${id}`)
          .then((response) => {
            setPokemon(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }, [id]);
    

  return (
    <div className="pokemon-page">
        {pokemon && (
        <>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name.english}/>
          <NavLink to={`/pokemons/${id}/name`}><h1>{pokemon.name.english}</h1></NavLink>
          <div>
            <p>Japanese: {pokemon.name.japanese}</p>
            <p>Chinese: {pokemon.name.chinese}</p>
            <p>French: {pokemon.name.french}</p>
          </div>
          <NavLink to={`/pokemons/${id}/type`}><h2>Type</h2></NavLink>
          {pokemon.type.map((type) => {
                      return (
                        <p>{type}</p>
                      )
                      })}
          <NavLink to={`/pokemons/${id}/base`}><h2>Stats</h2></NavLink>
          <div>
            <p>HP: {pokemon.base.HP}</p>
            <p>Attack: {pokemon.base.Attack}</p>
            <p>Sp. Attack: {pokemon.base["Sp. Attack"]}</p>
            <p>Sp. Defense: {pokemon.base["Sp. Defense"]}</p>
            <p>Speed: {pokemon.base.Speed}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Pokemon;
