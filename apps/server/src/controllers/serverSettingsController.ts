import ServerSettingsService from '../services/serverSettings-service'
import BaseController from './base-controller'
import { type NextFunction, Request, Response } from 'express'
import type { SaveServerSettingsPayload } from 'kg-calculator-typings'


export default class ServerSettingsController extends BaseController {
  static async getServerSettings(_: Request, res: Response, next: NextFunction) {
    try {
      const profileId = ServerSettingsController.getProfileId(res)
      const data = await ServerSettingsService.getServerSettings(profileId)
      res.json(data)
    } catch (e) {
      next(e)
    }
  }

  static async setServerSettings(req: Request, res: Response, next: NextFunction) {
    try {
      const profileId = ServerSettingsController.getProfileId(res)
      const settings = req.body.data as SaveServerSettingsPayload
      await ServerSettingsService.setServerSettings(profileId, settings)
      res.json()
    } catch (e) {
      next(e)
    }
  }
}
