import { render } from '@testing-library/react';
import { createPokemonsList } from 'test-utils/fixtures/pokemons-fixtures';
import { Queries } from 'test-utils/test.types';

import PokemonsList from '../';

const buildUi = (queries: Queries) => {
  return {
    getPokemonRow: queries.getByText,
  };
};

describe('PokemonsList', () => {
  it('renders correctly', () => {
    const pokemonsListFixture = createPokemonsList();
    const queries = render(<PokemonsList data={pokemonsListFixture} />);
    const ui = buildUi(queries);

    pokemonsListFixture.forEach(pokemon => {
      expect(ui.getPokemonRow(pokemon.name)).toHaveTextContent(pokemon.name);
    });
  });
});
