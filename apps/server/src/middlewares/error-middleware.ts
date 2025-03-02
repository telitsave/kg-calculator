import ApiError from '../model/exceptions/ApiError'
import dayjs from 'dayjs'
import type { NextFunction, Request, Response } from 'express'
import type { ApiDefaultError } from 'kg-calculator-typings'


function errorMiddleware(err: Error, _: Request, res: Response, __: NextFunction) {
  if (err instanceof ApiError) {
    console.log(`${dayjs().format('DD.MM.YYYY HH:mm:ss')}: ${err.status} - ${err.message}`)
    return res.status(err.status).json({
      message: err.message,
    } as ApiDefaultError)
  }

  console.log(`${dayjs().format('DD.MM.YYYY HH:mm:ss')}: OTHER - ${err.message}: ${err.stack}`)
  return res.status(500).json()
}

export default errorMiddleware
