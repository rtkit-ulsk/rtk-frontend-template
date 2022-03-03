import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

import { BASE_API_URL } from './apiUrl';

export const createBaseQuery = (options: Partial<FetchBaseQueryArgs> = {}) =>
  fetchBaseQuery({ baseUrl: BASE_API_URL, ...options });
