import { User } from '@/entities/user'

export type AuthSchema = {
  authData: User | null
  isInitialized: boolean
}
