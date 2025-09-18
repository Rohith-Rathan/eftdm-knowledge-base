import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, LoginCredentials, RegisterData } from '@/types/user'
import { authService } from '@/services/authService'

export const useUserStore = defineStore('user', () => {
  // State
  const currentUser = ref<User | null>(null)
  const isAuthenticated = ref(false)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Getters
  const fullName = computed(() => {
    if (!currentUser.value) return ''
    return `${currentUser.value.firstName} ${currentUser.value.lastName}`
  })

  const isAdmin = computed(() => {
    return currentUser.value?.role === 'admin'
  })

  // Actions
  const login = async (credentials: LoginCredentials) => {
    loading.value = true
    error.value = null

    try {
      const response = await authService.login(credentials)
      currentUser.value = response.user
      isAuthenticated.value = true
      
      // Store token
      localStorage.setItem('auth_token', response.token)
      
      return response
    } catch (err: any) {
      error.value = err.message || 'Login failed'
      throw err
    } finally {
      loading.value = false
    }
  }

  const register = async (userData: RegisterData) => {
    loading.value = true
    error.value = null

    try {
      const response = await authService.register(userData)
      currentUser.value = response.user
      isAuthenticated.value = true
      
      // Store token
      localStorage.setItem('auth_token', response.token)
      
      return response
    } catch (err: any) {
      error.value = err.message || 'Registration failed'
      throw err
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      currentUser.value = null
      isAuthenticated.value = false
      localStorage.removeItem('auth_token')
    }
  }

  const initializeAuth = async () => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      try {
        const user = await authService.getCurrentUser()
        currentUser.value = user
        isAuthenticated.value = true
      } catch (err) {
        // Token is invalid, remove it
        localStorage.removeItem('auth_token')
      }
    }
  }

  const updateProfile = async (userData: Partial<User>) => {
    if (!currentUser.value) return

    loading.value = true
    error.value = null

    try {
      const updatedUser = await authService.updateProfile(userData)
      currentUser.value = updatedUser
      return updatedUser
    } catch (err: any) {
      error.value = err.message || 'Profile update failed'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    // State
    currentUser,
    isAuthenticated,
    loading,
    error,
    
    // Getters
    fullName,
    isAdmin,
    
    // Actions
    login,
    register,
    logout,
    initializeAuth,
    updateProfile
  }
})
