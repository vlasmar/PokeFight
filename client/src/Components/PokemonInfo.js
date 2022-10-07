import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const Pokemon = () => {
    const [pokemonInfo, setPokemonInfo] = useState();
    const { id, info } = useParams();

    useEffect(() => {
        axios
          .get(`https://pokefight-project.herokuapp.com/pokemons/${id}/${info}`)
          .then((response) => {
            console.log(response.data);
            setPokemonInfo(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }, [id, info]);
    

  return (
    <div className="pokemon-page">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={id}/>
        {pokemonInfo && (
        <div>
          {info === "name" ? (
              <div>
                <h3>Names</h3>
                <p>English: {pokemonInfo.english}</p>
                <p>Japanese: {pokemonInfo.japanese}</p>
                <p>Chinese: {pokemonInfo.chinese}</p>
                <p>French: {pokemonInfo.french}</p>
              </div>
            ) : info === "base" ? (
                <div>
                  <h3>Stats</h3>
                  <p>HP: {pokemonInfo.HP}</p>
                  <p>Attack: {pokemonInfo.Attack}</p>
                  <p>Defense: {pokemonInfo.Defense}</p>
                  <p>Sp. Attack: {pokemonInfo['Sp. Attack']}</p>
                  <p>Sp. Defense: {pokemonInfo['Sp. Defense']}</p>
                  <p>Speed: {pokemonInfo.Speed}</p>
                </div>
              ) : info === "type" ? (
                <div>
                  <h3>Type</h3>
                    {pokemonInfo.map((type) => {
                      return (
                        <p>{type}</p>
                      )
                      })}
                </div>
              ) : (
              <div> Data not found </div>
            )}
        </div>
      )}
    </div>
  );
}

export default Pokemon;
