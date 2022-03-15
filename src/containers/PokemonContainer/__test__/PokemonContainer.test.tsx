import { fireEvent, render, waitFor } from '@testing-library/react';
import App from 'containers/App';
import { pokemonsListMock } from 'test-utils/__mocks__/api';
import { createPokemonsList } from 'test-utils/fixtures/pokemons-fixtures';
import { Queries } from 'test-utils/test.types';

const buildUi = (queries: Queries) => {
  return {
    loadButton: queries.getByText('Загрузить покемонов'),
    getPokemonRow: queries.getByText,
    findLoader: () => queries.findByTestId('loader'),
  };
};

describe.only('PokemonContainer', () => {
  it('renders correctly', () => {
    const queries = render(<App />);
    const ui = buildUi(queries);
    expect(ui.loadButton).toBeInTheDocument();
  });
  it.only('load pokemons', async () => {
    const pokemonsListFixture = createPokemonsList();
    pokemonsListMock(pokemonsListFixture);

    const queries = render(<App />);
    const ui = buildUi(queries);

    fireEvent.click(ui.loadButton);

    await ui.findLoader();

    await waitFor(() => {
      pokemonsListFixture.forEach(pokemon => {
        expect(ui.getPokemonRow(pokemon.name)).toBeInTheDocument();
      });
    });
  });
});
