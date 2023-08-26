import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { usersActions } from '../slice/usersSlice'
import { GetUsersRequestType } from '../types/requestTypes'
import { GetUsersResponseTypes } from '../types/responseTypes'

import { User } from '@/entities/user'
import { dateConverter } from '@/shared/lib/utils/date/dateConverter'

export const getUsers = createAsyncThunk<{ items: User[]; total: number }, GetUsersRequestType>(
  'users/getUsers',
  async (params: GetUsersRequestType, { dispatch, rejectWithValue }) => {
    dispatch(usersActions.setIsLoading(true))

    try {
      const response = await axios.get<GetUsersResponseTypes>(
        `${process.env.NEXT_PUBLIC_USERS_BASEURL}/users/list`,
        {
          params,
        }
      )
      const items = response.data.items.map(user => {
        const ctime = dateConverter(user.ctime)

        return { ...user, ctime } as unknown as User
      })

      return { items, total: response.data.total }
    } catch (e) {
      return rejectWithValue(null)
    } finally {
      dispatch(usersActions.setIsLoading(false))
    }
  }
)
