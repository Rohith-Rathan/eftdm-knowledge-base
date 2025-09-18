import { Request, Response, NextFunction } from 'express'
import { logger } from '@/utils/logger'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  })

  // Default error
  let statusCode = 500
  let message = 'Internal Server Error'

  // Handle specific error types
  if (err.name === 'ValidationError') {
    statusCode = 400
    message = err.message
  } else if (err.name === 'UnauthorizedError') {
    statusCode = 401
    message = 'Unauthorized'
  } else if (err.name === 'ForbiddenError') {
    statusCode = 403
    message = 'Forbidden'
  } else if (err.name === 'NotFoundError') {
    statusCode = 404
    message = 'Not Found'
  } else if (err.name === 'ConflictError') {
    statusCode = 409
    message = err.message
  }

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.originalUrl} not found`
  })
}
