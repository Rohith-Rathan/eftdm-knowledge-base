import { User, CreateUserData, UpdateUserData } from '@/types'

class UserService {
  // Mock implementation - replace with actual database calls
  private users: User[] = []

  async createUser(userData: CreateUserData): Promise<User> {
    const user: User = {
      id: this.users.length + 1,
      ...userData,
      created_at: new Date(),
      updated_at: new Date()
    }
    this.users.push(user)
    return user
  }

  async getUserById(id: number): Promise<User | null> {
    return this.users.find(user => user.id === id) || null
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }

  async getAllUsers(): Promise<User[]> {
    return this.users.map(user => ({ ...user, password_hash: '' }))
  }

  async updateUser(id: number, updateData: UpdateUserData): Promise<User> {
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex === -1) {
      throw new Error('User not found')
    }
    
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateData,
      updated_at: new Date()
    }
    
    return this.users[userIndex]
  }

  async deleteUser(id: number): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex === -1) {
      throw new Error('User not found')
    }
    
    this.users.splice(userIndex, 1)
  }
}

export const userService = new UserService()
