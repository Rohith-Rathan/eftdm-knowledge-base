import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { authService } from './authService'
import { userService } from './userService'
import { CreateUserData, LoginCredentials, AuthResponse, User } from '@/types'

class AuthService {
  async register(userData: CreateUserData): Promise<AuthResponse> {
    const { email, password, firstName, lastName } = userData

    // Check if user already exists
    const existingUser = await userService.getUserByEmail(email)
    if (existingUser) {
      throw new Error('User with this email already exists')
    }

    // Hash password
    const saltRounds = 12
    const password_hash = await bcrypt.hash(password, saltRounds)

    // Create user
    const user = await userService.createUser({
      email,
      password_hash,
      first_name: firstName,
      last_name: lastName,
      role: 'user'
    })

    // Generate JWT token
    const token = this.generateToken(user)

    return {
      user: this.sanitizeUser(user),
      token
    }
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { email, password } = credentials

    // Find user by email
    const user = await userService.getUserByEmail(email)
    if (!user) {
      throw new Error('Invalid email or password')
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password_hash)
    if (!isValidPassword) {
      throw new Error('Invalid email or password')
    }

    // Generate JWT token
    const token = this.generateToken(user)

    return {
      user: this.sanitizeUser(user),
      token
    }
  }

  async getCurrentUser(userId: number): Promise<Omit<User, 'password_hash'>> {
    const user = await userService.getUserById(userId)
    if (!user) {
      throw new Error('User not found')
    }
    return this.sanitizeUser(user)
  }

  async updateProfile(userId: number, updateData: Partial<User>): Promise<Omit<User, 'password_hash'>> {
    const user = await userService.updateUser(userId, updateData)
    return this.sanitizeUser(user)
  }

  async changePassword(userId: number, currentPassword: string, newPassword: string): Promise<void> {
    const user = await userService.getUserById(userId)
    if (!user) {
      throw new Error('User not found')
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, user.password_hash)
    if (!isValidPassword) {
      throw new Error('Current password is incorrect')
    }

    // Hash new password
    const saltRounds = 12
    const password_hash = await bcrypt.hash(newPassword, saltRounds)

    // Update password
    await userService.updateUser(userId, { password_hash })
  }

  private generateToken(user: User): string {
    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role
    }

    return jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN || '24h'
    })
  }

  private sanitizeUser(user: User): Omit<User, 'password_hash'> {
    const { password_hash, ...sanitizedUser } = user
    return sanitizedUser
  }
}

export const authService = new AuthService()
