import { usersAlias } from '../slice/usersSlice'

import { StateSchema } from '@/app/providers/storeProvider'
import { User } from '@/entities/user'

export const selectUsers = (state: StateSchema): User[] => state[usersAlias].items
