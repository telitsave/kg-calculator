import SettingsService from '../services/settings-service'
import BaseController from './base-controller'
import type { NextFunction, Request, Response } from 'express'
import type { SaveSettingsPayload } from 'kg-calculator-typings'


export default class SettingsController extends BaseController {
  static async getSettings(_: Request, res: Response, next: NextFunction) {
    try {
      const profileId = SettingsController.getProfileId(res)
      const data = await SettingsService.getSettings(profileId)
      res.json(data)
    } catch (e) {
      next(e)
    }
  }

  static async setSettings(req: Request, res: Response, next: NextFunction) {
    try {
      const profileId = SettingsController.getProfileId(res)
      const settings = req.body.data as SaveSettingsPayload
      await SettingsService.setSettings(profileId, settings)
      res.json()
    } catch (e) {
      next(e)
    }
  }
}
