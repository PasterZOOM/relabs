import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { EventResponse } from '@/features/events/module/types/eventResponse'
import { EventsSchema } from '@/features/events/module/types/eventsSchema'
import { dateConverter } from '@/shared/lib/utils/date/dateConverter'

const initialState: EventsSchema = {
  socket: null,
  events: [],
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    connect: state => {
      state.socket = new WebSocket(process.env.NEXT_PUBLIC_EVENTS_BASEURL || '')
      console.log('connect')
    },
    pushEvent: (state, { payload }: PayloadAction<EventResponse>) => {
      const ctime = dateConverter(payload.ctime)

      state.events = [{ ctime, event: payload.event }, ...state.events]
    },
    disconnect: state => {
      console.log('disconnect')
      state.socket?.close()
      state.socket = null
      state.events = []
    },
  },
})

export const { reducer: eventsReducer } = eventsSlice
export const { actions: eventsActions } = eventsSlice
export const { name: eventsAlias } = eventsSlice
