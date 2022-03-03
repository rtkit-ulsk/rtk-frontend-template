import { Pokemon } from 'services/api/types';

interface IPokemonsListProps {
  data: Pokemon[];
}
const PokemonsList = (props: IPokemonsListProps) => {
  const { data } = props;
  return (
    <ul>
      {data.map(pokemon => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonsList;
