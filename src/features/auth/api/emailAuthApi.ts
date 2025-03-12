import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emailAuthApi = createApi({
  reducerPath: 'emailAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation<void, { email: string }>({
      query: (body) => ({
        url: '/auth/send-email-code',
        method: 'POST',
        body,
      }),
    }),
    verifyEmailCode: builder.mutation<void, { email: string; code: string }>({
      query: (body) => ({
        url: '/auth/verify-email-code',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSendEmailMutation, useVerifyEmailCodeMutation } =
  emailAuthApi;
