import { createSlice } from '@reduxjs/toolkit'

import { authAPI } from '../api/authApi'
import { AuthSchema } from '../types/authShema'

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

const initialState: AuthSchema = {
  isInitialized: false,
  authData: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initAuthData: state => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

      if (user) {
        state.authData = JSON.parse(user)
      }
      state.isInitialized = true
    },
  },
  extraReducers: builder => {
    builder.addMatcher(authAPI.endpoints.login.matchFulfilled, (state, { payload }) => {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(payload.user))
      state.authData = payload.user
    })
  },
})

export const { reducer: authReducer } = authSlice
export const { actions: authActions } = authSlice
export const { name: authAlias } = authSlice
