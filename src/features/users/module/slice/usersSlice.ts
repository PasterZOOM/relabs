import { createSlice } from '@reduxjs/toolkit'

import { getUsers } from '../thunks/getUsers'
import { UsersSchema } from '../types/usersSchema'

const initialState: UsersSchema = {
  items: [],
  limit: 5,
  page: 0,
  total: 0,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload
    },
    deleteUser: (state, { payload }) => {
      state.items = state.items.filter(user => user.id !== +payload)
    },
    changePage: (state, { payload }) => {
      state.page = payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.total = payload.total
      state.items = payload.items
    })
  },
})

export const { reducer: usersReducer } = userSlice
export const { actions: usersActions } = userSlice
export const { name: usersAlias } = userSlice
