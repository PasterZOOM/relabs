import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/query'
import { CombinedState } from '@reduxjs/toolkit/src/query/core/apiState'
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context'

import {
  authAlias,
  authAPI,
  AuthSchema,
  LoginRequestType,
  LoginResponseTypes,
} from '@/features/auth'

export type StateSchema = {
  [authAPI.reducerPath]: CombinedState<
    {
      login: MutationDefinition<
        LoginRequestType,
        BaseQueryFn<
          FetchArgs | string,
          unknown,
          FetchBaseQueryError,
          NonNullable<unknown>,
          FetchBaseQueryMeta
        >,
        never,
        LoginResponseTypes,
        'authAPI'
      >
    },
    never,
    'authAPI'
  >
  [authAlias]: AuthSchema
}

export type ThunkExtraArg = {
  navigate?: (href: string, options?: NavigateOptions) => void
}

export type ThunkConfig<T> = {
  extra: ThunkExtraArg
  rejectValue: T
  state: StateSchema
}
