import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.example.com',
  }),
  endpoints: () => ({}), // Пустой объект, будет расширяться
});

export default baseApi;
