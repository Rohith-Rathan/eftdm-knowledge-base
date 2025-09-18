import { Request, Response } from 'express'
import { authService } from '@/services/authService'
import { AuthenticatedRequest } from '@/types'

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const { email, password, firstName, lastName } = req.body
      
      const result = await authService.register({
        email,
        password,
        firstName,
        lastName
      })

      res.status(201).json({
        success: true,
        data: result,
        message: 'User registered successfully'
      })
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: error.message || 'Registration failed'
      })
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      
      const result = await authService.login({ email, password })

      res.json({
        success: true,
        data: result,
        message: 'Login successful'
      })
    } catch (error: any) {
      res.status(401).json({
        success: false,
        error: error.message || 'Login failed'
      })
    }
  },

  async logout(req: AuthenticatedRequest, res: Response) {
    try {
      // In a real application, you might want to blacklist the token
      res.json({
        success: true,
        message: 'Logout successful'
      })
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Logout failed'
      })
    }
  },

  async getCurrentUser(req: AuthenticatedRequest, res: Response) {
    try {
      const user = await authService.getCurrentUser(req.user!.id)
      
      res.json({
        success: true,
        data: user
      })
    } catch (error: any) {
      res.status(404).json({
        success: false,
        error: error.message || 'User not found'
      })
    }
  },

  async updateProfile(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user!.id
      const updateData = req.body
      
      const user = await authService.updateProfile(userId, updateData)
      
      res.json({
        success: true,
        data: user,
        message: 'Profile updated successfully'
      })
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: error.message || 'Profile update failed'
      })
    }
  },

  async changePassword(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user!.id
      const { currentPassword, newPassword } = req.body
      
      await authService.changePassword(userId, currentPassword, newPassword)
      
      res.json({
        success: true,
        message: 'Password changed successfully'
      })
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: error.message || 'Password change failed'
      })
    }
  }
}
