import { setupServer } from 'msw/node';

import { createPokemonsListMock } from './pokemonsRequestsMocks';

export const server = setupServer();
export type ServerType = typeof server;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export const pokemonsListMock = createPokemonsListMock(server);
