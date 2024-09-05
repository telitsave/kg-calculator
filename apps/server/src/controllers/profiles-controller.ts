import HeroesService from '../services/heroes-service'
import InventoryService from '../services/inventory-service'
import ParametersService from '../services/parameters-service'
import ProfileService from '../services/profile-service'
import ServerSettingsService from '../services/serverSettings-service'
import SettingsService from '../services/settings-service'
import BaseController from './base-controller'
import type { NextFunction, Request, Response } from 'express'
import type { CreateProfilePayload, UpdateProfilePayload } from 'kg-calculator-typings'


export default class ProfileController extends BaseController {
  static async getProfiles(_: Request, res: Response, next: NextFunction) {
    try {
      const userData = ProfileController.getUserData(res)
      const profiles = await ProfileService.getProfiles(userData.id)
      res.json(profiles.map((it) => it.getDto()))
    } catch (err) {
      next(err)
    }
  }

  static async createProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = ProfileController.getUserData(res)
      const payload = req.body.data as CreateProfilePayload
      const createdProfile = await ProfileService.createProfile(userData.id, payload.name, payload.serverId)

      res.json(createdProfile)
    } catch (err) {
      next(err)
    }
  }

  static async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = ProfileController.getUserData(res)
      const profileId = Number(req.params.profileId)
      const payload = req.body.data as UpdateProfilePayload
      await ProfileService.updateProfile(userData.id, profileId, payload)

      res.json()
    } catch (err) {
      next(err)
    }
  }

  static async deleteProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = ProfileController.getUserData(res)
      const profileId = Number(req.params.profileId)
      await ProfileService.deleteProfile(userData.id, profileId)
      await InventoryService.removeInventory(profileId)
      await ParametersService.removeParameters(profileId)
      await HeroesService.removeHeroesParams(profileId)
      await SettingsService.removeSettings(profileId)
      await ServerSettingsService.removeServerSettings(profileId)

      res.json()
    } catch (err) {
      next(err)
    }
  }
}
