import Parameters from '../model/parameters/Parameters'
import UltimatePowerService from '../services/calculator-services/ultimate-power-service'
import HeroesService from '../services/heroes-service'
import ParametersService from '../services/parameters-service'
import ServerSettingsService from '../services/serverSettings-service'
import SettingsService from '../services/settings-service'
import BaseController from './base-controller'
import { type NextFunction, Request, Response } from 'express'
import type { CalculateUltimatePowerPayload } from 'kg-calculator-typings'


export default class UltimatePowerController extends BaseController {
  static async calculateScores(request: Request, response: Response, next: NextFunction) {
    try {
      const payload: CalculateUltimatePowerPayload = request.body.data
      const profileId = UltimatePowerController.getProfileId(response)
      const serverSettings = await ServerSettingsService.getServerSettings(profileId)
      const settings = await SettingsService.getSettings(profileId)
      const allParamsData = await ParametersService.getAllParameters(profileId)
      const parameters = Parameters.transformDataFromDB(allParamsData.params, allParamsData.gems, allParamsData.talents)

      const result = await UltimatePowerService.calculate(
        profileId,
        payload.types,
        parameters,
        settings,
        serverSettings,
        await HeroesService.getHeroes(),
        await HeroesService.getHeroesParams(profileId),
        payload.goalCastleLevel,
      )

      response.json(result)
    } catch (err) {
      next(err)
    }
  }

  static async calculateAllScores(_: Request, response: Response, next: NextFunction) {
    try {
      const profileId = UltimatePowerController.getProfileId(response)

      const allParamsData = await ParametersService.getAllParameters(profileId)
      const parameters = Parameters.transformDataFromDB(allParamsData.params, allParamsData.gems, allParamsData.talents)

      const serverSettings = await ServerSettingsService.getServerSettings(profileId)
      const settings = await SettingsService.getSettings(profileId)

      const result = await UltimatePowerService.calculate(
        profileId,
        ['castle', 'gallery', 'witch', 'dragon', 'blacksmith', 'barracks', 'heroes'],
        parameters,
        settings,
        serverSettings,
        await HeroesService.getHeroes(),
        await HeroesService.getHeroesParams(profileId),
      )

      response.json(result)
    } catch (err) {
      next(err)
    }
  }
}