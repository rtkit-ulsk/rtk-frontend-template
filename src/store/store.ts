import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from 'services/api/pokemon.api';

// auto-import-api
// auto-import
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    // auto-reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      // auto-middleware

      pokemonApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
