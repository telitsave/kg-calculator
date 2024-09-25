import HeroesCalculatorModel from '../model/calculator/heroes/HeroesCalculatorModel'
import Resources from '../model/resources/Resources'
import HeroesService from '../services/heroes-service'
import InventoryService from '../services/inventory-service'
import SettingsService from '../services/settings-service'
import BaseController from './base-controller'
import { type NextFunction, Request, Response } from 'express'
import type { HeroTableData, SaveHeroesPayload } from 'kg-calculator-typings'


export default class HeroesController extends BaseController {
  static async calculateHeroes(_: Request, response: Response, next: NextFunction) {
    try {
      const profileId = HeroesController.getProfileId(response)

      const resources = Resources.transformDataFromDB(await InventoryService.getInventory(profileId))
      const settings = await SettingsService.getSettings(profileId)

      const heroesCalculatorModel = new HeroesCalculatorModel(
        resources,
        settings,
        await HeroesService.getHeroes(),
        await HeroesService.getHeroesParams(profileId),
      )

      response.json(heroesCalculatorModel.calculateHeroes())
    } catch (err) {
      next(err)
    }
  }

  static async getAllHeroes(_: Request, response: Response, next: NextFunction) {
    try {
      const heroes = await HeroesService.getHeroes()
      response.json(heroes)
    } catch (err) {
      next(err)
    }
  }

  static async getHeroesParams(_: Request, response: Response, next: NextFunction) {
    try {
      const profileId = HeroesController.getProfileId(response)
      const heroesParams = await HeroesService.getHeroesParams(profileId)
      response.json(heroesParams)
    } catch (err) {
      next(err)
    }
  }

  static async setHeroesParams(request: Request, response: Response, next: NextFunction) {
    try {
      const profileId = HeroesController.getProfileId(response)
      const data = (request.body.data as SaveHeroesPayload).heroesParams
      await HeroesService.setHeroesParams(profileId, data)
      response.json()
    } catch (err) {
      next(err)
    }
  }

  static async getHeroesTable(_: Request, response: Response, next: NextFunction) {
    try {
      const profileId = HeroesController.getProfileId(response)
      const heroes = await HeroesService.getHeroes()
      const heroesParams = await HeroesService.getHeroesParams(profileId)
      const data: HeroTableData[] = []
      heroes.forEach((hero) => {
        const params = heroesParams[hero.heroId]

        data.push({
          ...hero,
          ...params,
          id: hero.heroId,
          stars: params?.stars || 0,
          bars: params?.bars || 0,
          cards: params?.cards || 0,
          distributionCards: params?.distributionCards || 0,
        })
      })
      response.json(data)
    } catch (err) {
      next(err)
    }
  }
}
