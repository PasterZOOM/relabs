import { usersAlias } from '../slice/usersSlice'

import { StateSchema } from '@/app/providers/storeProvider'

export const selectUsersLimit = (state: StateSchema): number => state[usersAlias].limit
