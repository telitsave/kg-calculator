import ApiError from '../model/exceptions/ApiError'
import type { Request, Response } from 'express'

function errorMiddleware(err: Error, req: Request, res: Response) {
  console.log(err)

  if (err instanceof ApiError) {
    return res.status(err.status).json({
      message: err.message,
      errors: err.errors,
    })
  }

  return res.status(500).json({
    message: 'Непредвиденная ошибка',
  })
}

export default errorMiddleware
