import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi', // Уникальный ключ для хранения данных в состоянии
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Базовый URL для API
  endpoints: (builder) => ({
    // Отправить код на телефон
    sendPhoneCode: builder.mutation<void, { phoneNumber: string }>({
      query: (body) => ({
        url: '/auth/send-phone-code',
        method: 'POST',
        body,
      }),
    }),

    // Проверить код с телефона
    verifyPhoneCode: builder.mutation<
      void,
      { phoneNumber: string; code: string }
    >({
      query: (body) => ({
        url: '/auth/verify-phone-code',
        method: 'POST',
        body,
      }),
    }),

    // Отправить код на email
    sendEmailCode: builder.mutation<void, { email: string }>({
      query: (body) => ({
        url: '/auth/send-email-code',
        method: 'POST',
        body,
      }),
    }),

    // Проверить код с email
    verifyEmailCode: builder.mutation<void, { email: string; code: string }>({
      query: (body) => ({
        url: '/auth/verify-email-code',
        method: 'POST',
        body,
      }),
    }),

    // Повторная отправка кода на телефон/email
    resendCode: builder.mutation<void, { destination: string }>({
      query: (body) => ({
        url: '/auth/resend-code',
        method: 'POST',
        body,
      }),
    }),
  }),
});

// Экспортируем хуки для использования в компонентах
export const {
  useSendPhoneCodeMutation,
  useVerifyPhoneCodeMutation,
  useSendEmailCodeMutation,
  useVerifyEmailCodeMutation,
  useResendCodeMutation,
} = authApi;
