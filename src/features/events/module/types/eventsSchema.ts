import { EventType } from '@/entities/event'

export type EventsSchema = {
  events: EventType[]
  socket: WebSocket | null
}
