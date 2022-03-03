export const BASE_API_URL = 'https://pokeapi.co/api/v2/';

export const apiUrl = {
  pokemon() {
    return 'pokemon';
  },
  pokemonByName(name: string) {
    return `${this.pokemon()}/${name}`;
  },
};
