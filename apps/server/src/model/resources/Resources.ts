import BarracksBooksResources from './BarracksBooksResources'
import { BaseResources } from './BaseResources'
import BlacksmithResources from './BlacksmithResources'
import CastleResources from './CastleResources'
import DragonRunesResources from './DragonRunesResources'
import HeroesResources from './HeroesResources'
import TalentsResources from './TalentsResources'
import WitchResources from './WitchResources'
import type { ResourcesData, Resources as ResourcesLib } from 'kg-calculator-typings'


export default class Resources implements BaseResources<Resources> {
  heroesCards: HeroesResources
  barracksBooks: BarracksBooksResources
  dragonsRunes: DragonRunesResources
  talents: TalentsResources
  castle: CastleResources
  witch: WitchResources
  blacksmith: BlacksmithResources
  galleryShards: number
  gold: number

  constructor(data?: Partial<ResourcesData>) {
    this.heroesCards = new HeroesResources(data?.heroesCards)
    this.castle = new CastleResources(data?.castle)
    this.barracksBooks = new BarracksBooksResources(data?.barracksBooks)
    this.dragonsRunes = new DragonRunesResources(data?.dragonsRunes)
    this.talents = new TalentsResources(data?.talents)
    this.witch = new WitchResources(data?.witch)
    this.blacksmith = new BlacksmithResources(data?.blacksmith)
    this.galleryShards = data?.galleryShards || 0
    this.gold = data?.gold || 0
  }

  clone() {
    return new Resources(this)
  }

  add(otherResources: Resources): void {
    this.heroesCards.add(otherResources.heroesCards)
    this.castle.add(otherResources.castle)
    this.barracksBooks.add(otherResources.barracksBooks)
    this.dragonsRunes.add(otherResources.dragonsRunes)
    this.talents.add(otherResources.talents)
    this.witch.add(otherResources.witch)
    this.blacksmith.add(otherResources.blacksmith)
    this.galleryShards += otherResources.galleryShards
    this.gold += otherResources.gold
  }

  substract(otherResources: Resources): void {
    this.heroesCards.substract(otherResources.heroesCards)
    this.castle.substract(otherResources.castle)
    this.barracksBooks.substract(otherResources.barracksBooks)
    this.dragonsRunes.substract(otherResources.dragonsRunes)
    this.talents.substract(otherResources.talents)
    this.witch.substract(otherResources.witch)
    this.blacksmith.substract(otherResources.blacksmith)

    this.galleryShards -= otherResources.galleryShards
    if (this.galleryShards < 0) this.galleryShards = 0

    this.gold -= otherResources.gold
    if (this.gold < 0) this.gold = 0
  }

  getData(): ResourcesLib {
    return {
      ...this.witch.getData(),
      ...this.talents.getData(),
      ...this.castle.getData(),
      ...this.dragonsRunes.getData(),
      ...this.blacksmith.getData(),
      ...this.barracksBooks.getData(),
      ...this.heroesCards.getData(),
      galleryResources_shards: this.galleryShards,
      gold: this.gold,
    }
  }

  static transformDataFromDB(data: ResourcesLib): Resources {
    return new Resources({
      barracksBooks: BarracksBooksResources.transformDataFromDB(data),
      heroesCards: HeroesResources.transformDataFromDB(data),
      blacksmith: BlacksmithResources.transformDataFromDB(data),
      castle: CastleResources.transformDataFromDB(data),
      dragonsRunes: DragonRunesResources.transformDataFromDB(data),
      talents: TalentsResources.transformDataFromDB(data),
      witch: WitchResources.transformDataFromDB(data),
      gold: data.gold,
      galleryShards: data.galleryResources_shards,
    })
  }
}
