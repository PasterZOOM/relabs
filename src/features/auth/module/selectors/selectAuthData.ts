import { StateSchema } from '@/app/providers/storeProvider'
import { User } from '@/entities/user'
import { authAlias } from '@/features/auth'

export const selectAuthData = (state: StateSchema): User | null => state[authAlias].authData
