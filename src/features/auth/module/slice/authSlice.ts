import { createSlice } from '@reduxjs/toolkit'

import { authAPI } from '../api/authApi'

import { User } from '@/entities/user'

type AuthState = {
  user: User | null
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null } as AuthState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(authAPI.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.user = payload.user
    })
  },
})

export const { reducer: authReducer } = authSlice
