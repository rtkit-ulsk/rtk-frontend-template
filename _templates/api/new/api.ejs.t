---
to: src/services/api/<%= name %>.api.ts
---
import { createApi } from '@reduxjs/toolkit/query/react';

import { apiUrl } from './apiUrl';
import { createBaseQuery } from './baseQuery';

export const <%= name %>Api = createApi({
  reducerPath: '<%= name %>Api',
  baseQuery: createBaseQuery(),
  endpoints: builder => ({
    get<%= Name %>ByName: builder.query<any, any>({
      query: apiUrl.<%= name %>ByName,
    }),
  }),
});

export const { useGet<%= Name %>ByNameQuery } = <%= name %>Api;
