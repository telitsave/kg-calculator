import ApiError from '../model/exceptions/ApiError'
import type { NextFunction, Request, Response } from 'express'
import type { ApiDefaultError } from 'kg-calculator-typings'


function errorMiddleware(err: Error, _: Request, res: Response, __: NextFunction) {
  console.log(err)

  if (err instanceof ApiError) {
    return res.status(err.status).json({
      message: err.message,
    } as ApiDefaultError)
  }

  return res.status(500).json()
}

export default errorMiddleware
