import { usersAlias } from '../slice/usersSlice'

import { StateSchema } from '@/app/providers/storeProvider'

export const selectUsersPage = (state: StateSchema): number => state[usersAlias].page
