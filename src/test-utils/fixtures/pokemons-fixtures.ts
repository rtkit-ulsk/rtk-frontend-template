import { Pokemon } from 'services/api/types';

const createPokemonName = (n: string | number) => `Покемон №${n}`;

const createPokemon = (name: string | number): Pokemon => ({ name: createPokemonName(name) });

export const createPokemonsList = (len: number = 10) => {
  const arr = new Array(len).fill(undefined);

  return arr.map((_, index) => createPokemon(index));
};
