import { usersAlias } from '../slice/usersSlice'

import { StateSchema } from '@/app/providers/storeProvider'

export const selectUsersIsLoading = (state: StateSchema): boolean => state[usersAlias].isLoading
