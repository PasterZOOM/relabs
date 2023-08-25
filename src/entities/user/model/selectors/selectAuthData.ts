import { StateSchema } from '@/app/providers/storeProvider'
import { User } from '@/entities/user'

export const selectAuthData = (state: StateSchema): User | null => state.user.authData
