import { authAlias, authAPI, AuthSchema } from '@/features/auth'
import { eventsAlias, EventsSchema } from '@/features/events'
import { usersAlias, UsersSchema } from '@/features/users'

export type StateSchema = {
  [authAPI.reducerPath]: ReturnType<typeof authAPI.reducer>
  [authAlias]: AuthSchema
  [eventsAlias]: EventsSchema
  [usersAlias]: UsersSchema
}
