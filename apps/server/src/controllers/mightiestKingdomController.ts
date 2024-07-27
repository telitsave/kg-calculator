import ServerSettings from '../model/ServerSettings'
import BarracksCalculatorModel from '../model/calculator/barracks/BarracksCalculatorModel'
import BlacksmithCalculatorModel from '../model/calculator/blacksmith/BlacksmithCalculatorModel'
import DragonEmblemsCalculatorModel from '../model/calculator/dragonEmblems/DragonEmblemsCalculatorModel'
import MightiestKingdomEventCalculator from '../model/calculator/events/mightiestKingdom/MightiestKingdomEventCalculator'
import GalleryCalculatorModel from '../model/calculator/gallery/GalleryCalculatorModel'
import HeroesCalculatorModel from '../model/calculator/heroes/HeroesCalculatorModel'
import WitchCalculatorModel from '../model/calculator/witch/WitchCalculatorModel'
import Parameters from '../model/parameters/Parameters'
import Resources from '../model/resources/Resources'
import Settings from '../model/settings/Settings'
import { Request, Response } from 'express'
import type { CalculateMightiestKingdomPayload, CalculateTotalMightiestKingdomPayload } from 'kg-calculator-typings'


export default class MightiestKingdomController {
  static calculateScores(request: Request, response: Response) {
    const payload: CalculateMightiestKingdomPayload = request.body.data
    const serverSettings = new ServerSettings(payload.customServerSettings)
    response.json(MightiestKingdomEventCalculator.calculate(new Resources(payload.resources), serverSettings))
  }

  static calculateAllScores(request: Request, response: Response) {
    const payload: CalculateTotalMightiestKingdomPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const settings = new Settings(payload.settings)
    const serverSettings = new ServerSettings(payload.customServerSettings)

    const dragonEmblemsCalculatorModel = new DragonEmblemsCalculatorModel(resources, parameters, settings)
    const barracksCalculatorModel = new BarracksCalculatorModel(resources, parameters, settings, serverSettings)
    const witchCalculatorModel = new WitchCalculatorModel(resources, parameters, serverSettings)
    const blacksmithCalculatorModel = new BlacksmithCalculatorModel(resources, parameters)
    const galleryCalculatorModel = new GalleryCalculatorModel(resources, parameters)
    const heroesCalculatorModel = new HeroesCalculatorModel(
      resources,
      settings,
      payload.heroesData,
      payload.heroesDistribution,
    )

    const dragonResult = dragonEmblemsCalculatorModel.getPossibleDragon()
    const witchResult = witchCalculatorModel.calculateWitch()
    barracksCalculatorModel.calculateBarracks()
    const barracksResult = barracksCalculatorModel.getData()
    const blacksmithResult = blacksmithCalculatorModel.calculateBlacksmith()
    const galleryResult = galleryCalculatorModel.calculateGallery()
    const heroesResult = heroesCalculatorModel.calculateHeroes()

    const spentResources = new Resources(dragonResult.spentResources)
    spentResources.add(new Resources(witchResult.spentResources))
    spentResources.add(new Resources(barracksResult.spentResources))
    spentResources.add(new Resources(blacksmithResult.spentResources))
    spentResources.add(new Resources(galleryResult.spentResources))
    spentResources.add(new Resources(heroesResult.spentResources))

    response.json(MightiestKingdomEventCalculator.calculate(spentResources, serverSettings))
  }
}
