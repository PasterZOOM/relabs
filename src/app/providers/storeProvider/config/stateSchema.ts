import { authAlias, authAPI, AuthSchema } from '@/features/auth'
import { usersAlias, UsersSchema } from '@/features/users'

export type StateSchema = {
  [authAPI.reducerPath]: ReturnType<typeof authAPI.reducer>
  [authAlias]: AuthSchema
  [usersAlias]: UsersSchema
}
