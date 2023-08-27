import { eventsAlias } from '../slice/eventsSlice'

import { StateSchema } from '@/app/providers/storeProvider'
import { EventType } from '@/entities/event'

export const selectEvents = (state: StateSchema): EventType[] => state[eventsAlias].events
