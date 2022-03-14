import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { BASE_API_URL } from './apiUrl';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
    },
    unknown,
    unknown
  > =>
  async props => {
    const { url, method, data } = props;
    try {
      const result = await axios({ url: baseUrl + url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export const createBaseQuery = (options: Partial<FetchBaseQueryArgs> = {}) =>
  axiosBaseQuery({ baseUrl: BASE_API_URL, ...options });
