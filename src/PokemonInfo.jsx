import React from 'react';

const PokemonInfo = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height / 20} m</p>
      <p>Peso: {pokemon.weight / 20} kg</p>
      <h3>Tipos:</h3>
      <ul>
        {pokemon.types.map((typeInfo) => (
          <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
        ))}
      </ul>
    </div>
  );
  
  
};

export default PokemonInfo;
