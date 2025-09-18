import axios from 'axios'
import type { 
  LoginCredentials, 
  RegisterData, 
  AuthResponse, 
  User, 
  ApiResponse 
} from '@/types/user'

// Create axios instance
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('auth_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Auth Service
export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/login', credentials)
    return response.data.data!
  },

  async register(userData: RegisterData): Promise<AuthResponse> {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/register', userData)
    return response.data.data!
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout')
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get<ApiResponse<User>>('/auth/me')
    return response.data.data!
  },

  async updateProfile(userData: Partial<User>): Promise<User> {
    const response = await api.put<ApiResponse<User>>('/auth/profile', userData)
    return response.data.data!
  },

  async changePassword(passwordData: { currentPassword: string; newPassword: string }): Promise<void> {
    await api.put('/auth/change-password', passwordData)
  },

  async forgotPassword(email: string): Promise<void> {
    await api.post('/auth/forgot-password', { email })
  },

  async resetPassword(token: string, password: string): Promise<void> {
    await api.post('/auth/reset-password', { token, password })
  }
}

// Generic API Service
export class ApiService {
  constructor(private endpoint: string) {}

  async get<T>(path: string = ''): Promise<T> {
    const response = await api.get<ApiResponse<T>>(`${this.endpoint}${path}`)
    return response.data.data!
  }

  async post<T>(data: any, path: string = ''): Promise<T> {
    const response = await api.post<ApiResponse<T>>(`${this.endpoint}${path}`, data)
    return response.data.data!
  }

  async put<T>(data: any, path: string = ''): Promise<T> {
    const response = await api.put<ApiResponse<T>>(`${this.endpoint}${path}`, data)
    return response.data.data!
  }

  async delete<T>(path: string = ''): Promise<T> {
    const response = await api.delete<ApiResponse<T>>(`${this.endpoint}${path}`)
    return response.data.data!
  }
}

// Export default api instance for direct use
export default api
