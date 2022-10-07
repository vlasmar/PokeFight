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
    <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemonInfo.english}/>
        {pokemonInfo && (
        <div>
          {info === "name" ? (
              <div>
                {pokemonInfo.english}
                {pokemonInfo.japanese}
                {pokemonInfo.chinese}
                {pokemonInfo.french}
              </div>
            ) : info === "base" ? (
                <div>
                  {pokemonInfo.HP}
                  {pokemonInfo.Attack}
                  {pokemonInfo.Defense}
                  {pokemonInfo['Sp. Attack']}
                  {pokemonInfo['Sp. Defense']}
                  {pokemonInfo.Speed}
                </div>
              ) : info === "type" ? (
                <div>
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
