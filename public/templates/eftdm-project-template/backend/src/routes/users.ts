import { Router } from 'express'
import { userController } from '@/controllers/userController'
import { authenticateToken, requireRole } from '@/middleware/auth'

const router = Router()

// All routes require authentication
router.use(authenticateToken)

// Get all users (admin only)
router.get('/', requireRole(['admin']), userController.getAllUsers)

// Get user by ID
router.get('/:id', userController.getUserById)

// Update user
router.put('/:id', userController.updateUser)

// Delete user (admin only)
router.delete('/:id', requireRole(['admin']), userController.deleteUser)

export default router
