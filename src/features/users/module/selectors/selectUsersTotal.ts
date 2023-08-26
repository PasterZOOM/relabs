import { usersAlias } from '../slice/usersSlice'

import { StateSchema } from '@/app/providers/storeProvider'

export const selectUsersTotal = (state: StateSchema): number => state[usersAlias].total
