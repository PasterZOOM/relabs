import { configureStore, ReducersMapObject, Store, ThunkDispatch } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { StateSchema } from './stateSchema'

import { authAlias, authAPI, authReducer } from '@/features/auth'
import { usersAlias, usersReducer } from '@/features/users'

type CustomStore = Store<StateSchema>

export const createReactStore = (): CustomStore => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    [authAPI.reducerPath]: authAPI.reducer,
    [authAlias]: authReducer,
    [usersAlias]: usersReducer,
  }

  return configureStore({
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authAPI.middleware),
    reducer: rootReducers,
  }) as CustomStore
}

export const wrapper = createWrapper(() => createReactStore(), {
  debug: true,
})

export type AppActionsType = ReturnType<ReturnType<typeof createReactStore>['dispatch']>
export type AppDispatch = ThunkDispatch<StateSchema, unknown, AppActionsType>
