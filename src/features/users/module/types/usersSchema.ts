import { User } from '@/entities/user'

export type UsersSchema = {
  isLoading: boolean
  items: User[]
  limit: number
  page: number
  total: number
}
