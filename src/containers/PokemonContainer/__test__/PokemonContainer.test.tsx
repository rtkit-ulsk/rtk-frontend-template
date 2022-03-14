import { fireEvent, render, waitFor } from '@testing-library/react';
import App from 'containers/App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { apiUrl } from 'services/api/apiUrl';
import { BaseResponse, Pokemon } from 'services/api/types';
import { createPokemonsList } from 'test-utils/fixtures/pokemons-fixtures';
import { Queries } from 'test-utils/test.types';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const buildUi = (queries: Queries) => {
  return {
    loadButton: queries.getByText('Загрузить покемонов'),
    getPokemonRow: queries.getByText,
    findLoader: () => queries.findByTestId('loader'),
  };
};

describe('PokemonContainer', () => {
  it('renders correctly', () => {
    const queries = render(<App />);
    const ui = buildUi(queries);
    expect(ui.loadButton).toBeInTheDocument();
  });
  it('load pokemons', async () => {
    const pokemonsListFixture = createPokemonsList();
    server.use(
      rest.get<null, Record<string, string>, BaseResponse<Pokemon>>(
        `${apiUrl.BASE_API_URL}${apiUrl.pokemon()}`,
        (req, res, ctx) => {
          return res(
            ctx.delay(),
            ctx.json({
              count: pokemonsListFixture.length,
              next: '',
              previous: '',
              results: pokemonsListFixture,
            }),
          );
        },
      ),
    );
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
