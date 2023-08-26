import { User } from '@/entities/user'

export type GetUsersResponseTypes = {
  items: (Omit<User, 'ctime'> & { ctime: Date })[]
  limit: number
  offset: number
  page: number
  per_page: number
  total: number
}
