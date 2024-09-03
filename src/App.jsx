import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import PokemonInfo from './PokemonInfo';

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const fetchPokemon = async (name) => {
    setError(null);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(response.data);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      setError('No se pudo conectar con la pokedex. Inténtalo de nuevo más tarde.');
      setPokemon(null);
    }
  };

  return (
    <div>
      <h1>Buscador de Pokémon</h1>
      <SearchForm onSearch={fetchPokemon} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <PokemonInfo pokemon={pokemon} />
    </div>
  );
  
};

export default App;
