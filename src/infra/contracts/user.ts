import { User } from '@/domain/entities'

export type PosgresqlUser = {
  id: string
  first_name: string
  last_name: string
  email: string
  password: string
  created_at: string
  updated_at: string
  deleted_at: string
}

export interface LoadUsersRepository {
  loadUsers: () => Promise<User[]>
}