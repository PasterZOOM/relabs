export type User = {
  email: string
  id: string
  name: string
}

export type UserSchema = {
  authData: User | null
  isInitialized: boolean
}
