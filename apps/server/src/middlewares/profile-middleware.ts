import ApiError from '../model/exceptions/ApiError'
import User from '../model/user'
import type { NextFunction, Request, Response } from 'express'


export default function profileMiddleware(req: Request, res: Response, next: NextFunction) {
  const profileId = req.cookies.profileId
  const userData = res.locals.userData as ReturnType<User['getDto']> & { profiles: number[] }

  if (profileId === undefined || profileId === null) {
    return next(ApiError.BadRequestError('Нет профиля'))
  }

  if (!userData.profiles.includes(Number(profileId))) {
    return next(ApiError.BadRequestError('Нет доступа к профилю'))
  }
  res.locals.profileId = Number(profileId)
  next()
}
