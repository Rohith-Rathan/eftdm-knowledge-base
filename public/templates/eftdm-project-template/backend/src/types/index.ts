// User Types
export interface User {
  id: number
  email: string
  password_hash: string
  first_name: string
  last_name: string
  role: 'admin' | 'user'
  created_at: Date
  updated_at: Date
}

export interface CreateUserData {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface UpdateUserData {
  email?: string
  firstName?: string
  lastName?: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  user: Omit<User, 'password_hash'>
  token: string
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Database Types
export interface DatabaseConfig {
  host: string
  port: number
  database: string
  user: string
  password: string
  ssl?: boolean
}

// JWT Types
export interface JwtPayload {
  userId: number
  email: string
  role: string
  iat?: number
  exp?: number
}

// Request Types
export interface AuthenticatedRequest extends Express.Request {
  user?: Omit<User, 'password_hash'>
}

// Error Types
export interface AppError extends Error {
  statusCode?: number
  isOperational?: boolean
}

// Validation Types
export interface ValidationError {
  field: string
  message: string
  value?: any
}

// Pagination Types
export interface PaginationParams {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}
