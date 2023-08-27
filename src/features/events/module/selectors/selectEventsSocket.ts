import { eventsAlias } from '../slice/eventsSlice'

import { StateSchema } from '@/app/providers/storeProvider'

export const selectEventsSocket = (state: StateSchema): WebSocket | null =>
  state[eventsAlias].socket
