import { StateSchema } from '@/app/providers/storeProvider'

export const selectIsInitialized = (state: StateSchema): boolean => state.user.isInitialized
