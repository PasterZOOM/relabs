import { EventType } from '@/entities/event'

export type EventResponse = Omit<EventType, 'ctime'> & {
  ctime: Date
}
