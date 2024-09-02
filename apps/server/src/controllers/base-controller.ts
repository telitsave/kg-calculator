import type User from '../model/user'
import type { Response } from 'express'

export default class BaseController {
  protected static getUserData(res: Response) {
    return res.locals.userData as ReturnType<User['getDto']> & { profiles: number[] }
  }

  protected static getProfileId(res: Response) {
    return res.locals.profileId as number
  }
}
