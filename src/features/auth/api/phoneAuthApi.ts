import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneAuthApi = createApi({
  reducerPath: 'phoneAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    sendPhone: builder.mutation<void, { phone: string }>({
      query: (body) => ({
        url: '/auth/send-phone-code',
        method: 'POST',
        body,
      }),
    }),
    verifyPhoneCode: builder.mutation<void, { phone: string; code: string }>({
      query: (body) => ({
        url: '/auth/verify-phone-code',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSendPhoneMutation, useVerifyPhoneCodeMutation } =
  phoneAuthApi;
