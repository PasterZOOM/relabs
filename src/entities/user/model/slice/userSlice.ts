import { createSlice } from '@reduxjs/toolkit'

import { UserSchema } from '../types/user'

import { authAPI } from '@/features/auth'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

const initialState: UserSchema = {
  isInitialized: false,
  authData: null,
}

export const userSlice = createSlice({
  initialState,
  name: 'user',
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

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
