import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';


import PokemonsList from './Components/PokemonsList';
import Pokemon from './Components/Pokemon';
import PokemonInfo from './Components/PokemonInfo';

function App() {
  const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios
            .get("https://pokefight-project.herokuapp.com/pokemons")
            .then((response) => {
                console.log(response.data);
                setPokemons(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

  return (
    <Routes>
      <Route path='/pokemons' element={<PokemonsList pokemons={pokemons}/>}/>
      <Route path='/pokemons/:id' element={<Pokemon />}/>
      <Route path='/pokemons/:id/:info' element={<PokemonInfo />}/>
    </Routes>
  );
}

export default App;
