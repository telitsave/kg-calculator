import ServerSettingsService from '../services/serverSettings-service'
import BaseController from './base-controller'
import { type NextFunction, Request, Response } from 'express'
import type { CustomServerSettingsData, SaveServerSettingsPayload } from 'kg-calculator-typings'


export default class ServerSettingsController extends BaseController {
  static async getServerSettings(_: Request, res: Response, next: NextFunction) {
    try {
      const profileId = ServerSettingsController.getProfileId(res)
      const data = await ServerSettingsService.getServerSettings(profileId)
      const result: CustomServerSettingsData = {
        enabledCustomServerSettings: data.enabledCustomServerSettings,
        season: data.season,
        talentsMaxRank: data.talentsMaxRank,
        witchGemsMaxRank: data.witchGemsMaxRank,

        talentBooks_rank1: data.talentBooks_rank1,
        talentBooks_rank2: data.talentBooks_rank2,
        talentBooks_rank3: data.talentBooks_rank3,
        talentBooks_rank4: data.talentBooks_rank4,

        greenWitchPotionCount: data.greenWitchPotionCount,
        greenWitchPotionCost: data.greenWitchPotionCost,
        purpleWitchPotionCount: data.purpleWitchPotionCount,
        purpleWitchPotionCost: data.purpleWitchPotionCost,
        talentsBookCount: data.talentsBookCount,
        talentsBookCost: data.talentsBookCost,
        oracleCrownCount: data.oracleCrownCount,
        oracleCrownCost: data.oracleCrownCost,
      }
      res.json(result)
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
