import ApiError from '../model/exceptions/ApiError'
import TokenService from '../services/token-service'
import type { NextFunction, Request, Response } from 'express'


export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return next(ApiError.UnauthorizedError())
    }

    const accessToken = authHeader.split(' ')[1]
    if (!accessToken) {
      return next(ApiError.UnauthorizedError())
    }

    const userData = TokenService.validateAccessToken(accessToken)
    if (!userData) {
      return next(ApiError.UnauthorizedError())
    }
    next()
  } catch (err) {
    return next(ApiError.UnauthorizedError())
  }
}
