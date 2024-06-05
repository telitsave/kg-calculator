import { Request, Response } from 'express'
import Resources from '../model/resources/Resources'
import Parameters from '../model/parameters/Parameters'
import DragonEmblemsCalculatorModel from '../model/calculator/dragonEmblems/DragonEmblemsCalculatorModel'
import WitchCalculatorModel from '../model/calculator/witch/WitchCalculatorModel'
import Settings from '../model/settings/Settings'
import BarracksCalculatorModel from '../model/calculator/barracks/BarracksCalculatorModel'
import MightiestKingdomEventCalculator from '../model/calculator/events/mightiestKingdom/MightiestKingdomEventCalculator'
import BlacksmithCalculatorModel from '../model/calculator/blacksmith/BlacksmithCalculatorModel'
import GalleryCalculatorModel from '../model/calculator/gallery/GalleryCalculatorModel'
import type { CalculateMightiestKingdomPayload, CalculateTotalMightiestKingdomPayload } from 'kg-calculator-typings'


export default class MightiestKingdomController {
  static calculateScores(request: Request, response: Response) {
    const payload: CalculateMightiestKingdomPayload = request.body.data
    response.json(MightiestKingdomEventCalculator.calculate(new Resources(payload.resources)))
  }

  static calculateAllScores(request: Request, response: Response) {
    const payload: CalculateTotalMightiestKingdomPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const settings = new Settings(payload.settings)

    const dragonEmblemsCalculatorModel = new DragonEmblemsCalculatorModel(resources, parameters, settings)
    const barracksCalculatorModel = new BarracksCalculatorModel(resources, parameters, settings)
    const witchCalculatorModel = new WitchCalculatorModel(resources, parameters)
    const blacksmithCalculatorModel = new BlacksmithCalculatorModel(resources, parameters)
    const galleryCalculatorModel = new GalleryCalculatorModel(resources, parameters)

    const dragonResult = dragonEmblemsCalculatorModel.getPossibleDragon()
    const witchResult = witchCalculatorModel.calculateWitch()
    barracksCalculatorModel.calculateBarracks()
    const barracksResult = barracksCalculatorModel.getData()
    const blacksmithResult = blacksmithCalculatorModel.calculateBlacksmith()
    const galleryResult = galleryCalculatorModel.calculateGallery()

    const spentResources = new Resources(dragonResult.spentResources)
    spentResources.add(new Resources(witchResult.spentResources))
    spentResources.add(new Resources(barracksResult.spentResources))
    spentResources.add(new Resources(blacksmithResult.spentResources))
    spentResources.add(new Resources(galleryResult.spentResources))

    response.json(MightiestKingdomEventCalculator.calculate(spentResources))
  }
}
