const getPokemonById = (id, pokemonList) => {
  return pokemonList.find((pokemon) => {
    return pokemon.id === parseInt(id);
  });
};


module.exports = getPokemonById