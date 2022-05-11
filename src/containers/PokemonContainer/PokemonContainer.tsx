import Button from 'components/Button';
import PokemonsList from 'components/PokemonsList';
import { useLazyGetListOfPokemonsQuery } from 'services/api/pokemon.api';

const PokemonContainer = () => {
  const [loadPokemons, { data, error, isLoading }] = useLazyGetListOfPokemonsQuery();

  return (
    <div>
      <Button onClick={() => loadPokemons()}>Загрузить покемонов</Button>
      <br />
      {isLoading && <span data-testid="loader">Загрузка...</span>}
      {!!error && 'Ошибка'}
      {data && <PokemonsList data={data.results} />}
    </div>
  );
};
export default PokemonContainer;
