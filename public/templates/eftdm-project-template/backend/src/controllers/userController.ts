import { Request, Response } from 'express'
import { userService } from '@/services/userService'
import { AuthenticatedRequest } from '@/types'

export const userController = {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers()
      
      res.json({
        success: true,
        data: users
      })
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to fetch users'
      })
    }
  },

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const userId = parseInt(id)
      
      if (isNaN(userId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid user ID'
        })
      }

      const user = await userService.getUserById(userId)
      
      if (!user) {
        return res.status(404).json({
          success: false,
          error: 'User not found'
        })
      }

      res.json({
        success: true,
        data: user
      })
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to fetch user'
      })
    }
  },

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params
      const userId = parseInt(id)
      
      if (isNaN(userId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid user ID'
        })
      }

      const updateData = req.body
      const user = await userService.updateUser(userId, updateData)
      
      res.json({
        success: true,
        data: user,
        message: 'User updated successfully'
      })
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: error.message || 'Failed to update user'
      })
    }
  },

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params
      const userId = parseInt(id)
      
      if (isNaN(userId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid user ID'
        })
      }

      await userService.deleteUser(userId)
      
      res.json({
        success: true,
        message: 'User deleted successfully'
      })
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to delete user'
      })
    }
  }
}
