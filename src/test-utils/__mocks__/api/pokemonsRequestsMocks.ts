import { rest } from 'msw';
import { apiUrl } from 'services/api/apiUrl';
import { BaseResponse, Pokemon } from 'services/api/types';

import { ServerType } from '.';

export const createPokemonsListMock = (server: ServerType) => (pokemons: Pokemon[]) => {
  server.use(
    rest.get<null, Record<string, string>, BaseResponse<Pokemon>>(
      `${apiUrl.BASE_API_URL}${apiUrl.pokemon()}`,
      (req, res, ctx) => {
        return res(
          ctx.delay(),
          ctx.json({
            count: pokemons.length,
            next: '',
            previous: '',
            results: pokemons,
          }),
        );
      },
    ),
  );
};
