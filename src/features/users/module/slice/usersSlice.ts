import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getUsers } from '../thunks/getUsers'
import { UsersSchema } from '../types/usersSchema'

import { User } from '@/entities/user'

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
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    deleteUser: (state, { payload }: PayloadAction<string>) => {
      state.items = state.items.filter(user => user.id !== +payload)
    },
    changePage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getUsers.fulfilled,
      (state, { payload }: PayloadAction<{ items: User[]; total: number }>) => {
        state.total = payload.total
        state.items = payload.items
      }
    )
  },
})

export const { reducer: usersReducer } = userSlice
export const { actions: usersActions } = userSlice
export const { name: usersAlias } = userSlice
