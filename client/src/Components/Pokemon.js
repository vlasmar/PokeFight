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
    <div>
        {pokemon && (
        <>
          <NavLink to={`/pokemons/${id}/name`}><h1>{pokemon.name.english}</h1></NavLink>
          <ul>
            <li>{pokemon.name.japanese}</li>
            <li>{pokemon.name.chinese}</li>
            <li>{pokemon.name.french}</li>
          </ul>
          <NavLink to={`/pokemons/${id}/type`}><div>Types</div></NavLink>
          <div>{pokemon.type}</div>
          <NavLink to={`/pokemons/${id}/base`}><div>Base</div></NavLink>
          <ul>
            <li>{pokemon.base.HP}</li>
            <li>{pokemon.base.Attack}</li>
            <li>{pokemon.base["Sp. Attack"]}</li>
            <li>{pokemon.base["Sp. Defense"]}</li>
            <li>{pokemon.base.Speed}</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Pokemon;