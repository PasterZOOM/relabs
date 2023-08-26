import { StateSchema } from '@/app/providers/storeProvider'
import { authAlias } from '@/features/auth'

export const selectIsInitialized = (state: StateSchema): boolean => state[authAlias].isInitialized
