import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { LoginRequestType } from '../types/requestTypes'
import { LoginResponseTypes } from '../types/responseTypes'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    login: builder.mutation<LoginResponseTypes, LoginRequestType>({
      query: body => {
        return {
          url: `/login`,
          method: 'POST',
          body,
        }
      },
    }),
  }),
})

export const { useLoginMutation } = authAPI
