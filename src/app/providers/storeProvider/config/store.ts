import { configureStore, ReducersMapObject, Store, ThunkDispatch } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { StateSchema, ThunkExtraArg } from './stateSchema'

import { userReducer } from '@/entities/user/model/slice/userSlice'
import { authAPI } from '@/features/auth'

type CustomStore = Store<StateSchema>

export const createReactStore = (): CustomStore => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    [authAPI.reducerPath]: authAPI.reducer,
    user: userReducer,
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
export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, AppActionsType>
