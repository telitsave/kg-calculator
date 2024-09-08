import type ServerSettings from '../../model/ServerSettings'
import BarracksCalculatorModel from '../../model/calculator/barracks/BarracksCalculatorModel'
import BlacksmithCalculatorModel from '../../model/calculator/blacksmith/BlacksmithCalculatorModel'
import CastleCalculatorModel from '../../model/calculator/castle/CastleCalculatorModel'
import DragonEmblemsCalculatorModel from '../../model/calculator/dragonEmblems/DragonEmblemsCalculatorModel'
import UltimatePowerEventCalculator from '../../model/calculator/events/ultimatePower/UltimatePowerEventCalculator'
import GalleryCalculatorModel from '../../model/calculator/gallery/GalleryCalculatorModel'
import HeroesCalculatorModel from '../../model/calculator/heroes/HeroesCalculatorModel'
import WitchCalculatorModel from '../../model/calculator/witch/WitchCalculatorModel'
import type Parameters from '../../model/parameters/Parameters'
import Resources from '../../model/resources/Resources'
import type Settings from '../../model/settings/Settings'
import InventoryService from '../inventory-service'
import type { Hero, HeroesParams, UltimatePowerTypes } from 'kg-calculator-typings'


export default class UltimatePowerService {
  static async calculate(
    profileId: number,
    types: UltimatePowerTypes[],
    parameters: Parameters,
    settings: Settings,
    serverSettings: ServerSettings,
    heroes: Hero[],
    heroesParams: HeroesParams,
    goalCastleLevel?: number,
  ) {
    const resources = Resources.transformDataFromDB(await InventoryService.getInventory(profileId))
    const totalResources = new Resources()
    types.forEach((type) => {
      switch (type) {
        case 'castle':
          const castleModel = new CastleCalculatorModel(resources, parameters, settings)
          const castleResult = castleModel.getPossibleCastle()
          totalResources.add(Resources.transformDataFromDB(castleResult.spentResources))
          break
        case 'barracks':
          const barracksModel = new BarracksCalculatorModel(resources, parameters, settings, serverSettings)
          barracksModel.calculateBarracks()
          const barracksResult = barracksModel.getData()
          totalResources.add(Resources.transformDataFromDB(barracksResult.spentResources))
          break
        case 'blacksmith':
          const blacksmithModel = new BlacksmithCalculatorModel(resources, parameters)
          const blacksmithResult = blacksmithModel.calculateBlacksmith()
          totalResources.add(Resources.transformDataFromDB(blacksmithResult.spentResources))
          break
        case 'dragon':
          let castleLevel: number | undefined
          if (settings.useCastleLimit) {
            castleLevel = parameters.castle.level
            if (settings.usePossibleCastleLimit) {
              const castleCalculatorModel = new CastleCalculatorModel(resources, parameters, settings)
              const {
                parameters: { castleParams_level },
              } = castleCalculatorModel.getPossibleCastle()
              castleLevel = castleParams_level
            }
          }
          const dragonModel = new DragonEmblemsCalculatorModel(resources, parameters, settings, castleLevel)
          const dragonResult = dragonModel.getPossibleDragon()
          totalResources.add(Resources.transformDataFromDB(dragonResult.spentResources))
          break
        case 'gallery':
          const galleryModel = new GalleryCalculatorModel(resources, parameters)
          const galleryResult = galleryModel.calculateGallery()
          totalResources.add(Resources.transformDataFromDB(galleryResult.spentResources))
          break
        case 'heroes':
          const heroesModel = new HeroesCalculatorModel(resources, settings, heroes, heroesParams)
          const heroesResult = heroesModel.calculateHeroes()
          totalResources.add(Resources.transformDataFromDB(heroesResult.spentResources))
          break
        case 'witch':
          const witchModel = new WitchCalculatorModel(resources, parameters, serverSettings)
          const witchResult = witchModel.calculateWitch()
          totalResources.add(Resources.transformDataFromDB(witchResult.spentResources))
          break
        case 'castleGoal':
          const castleGoalModel = new CastleCalculatorModel(resources, parameters, settings)
          const castleGoalResult = castleGoalModel.getGoalCastleResources(goalCastleLevel || 0)
          totalResources.add(Resources.transformDataFromDB(castleGoalResult.requiredResources))
          break
      }
    })

    return UltimatePowerEventCalculator.calculate(totalResources, serverSettings)
  }
}
