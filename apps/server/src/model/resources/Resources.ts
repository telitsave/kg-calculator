import BarracksBooksResources from './BarracksBooksResources'
import { BaseResources } from './BaseResources'
import BlacksmithResources from './BlacksmithResources'
import CastleResources from './CastleResources'
import DragonRunesResources from './DragonRunesResources'
import HeroesResources from './HeroesResources'
import TalentsResources from './TalentsResources'
import WitchResources from './WitchResources'
import type { ResourcesData } from 'kg-calculator-typings'


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

  getData(): ResourcesData {
    return {
      witch: this.witch,
      talents: this.talents,
      castle: this.castle,
      dragonsRunes: this.dragonsRunes,
      blacksmith: this.blacksmith,
      barracksBooks: this.barracksBooks,
      heroesCards: this.heroesCards,
      galleryShards: this.galleryShards,
      gold: this.gold,
    }
  }

  getDataForDB() {
    return [
      ...this.barracksBooks.getDataForDB(),
      ...this.heroesCards.getDataForDB(),
      ...this.castle.getDataForDB(),
      ...this.dragonsRunes.getDataForDB(),
      ...this.talents.getDataForDB(),
      ...this.witch.getDataForDB(),
      { itemId: 'hammers', count: this.blacksmith.hammers },
      { itemId: 'galleryShards', count: this.galleryShards },
      { itemId: 'gold', count: this.gold },
    ]
  }

  static transformDataFromDB(data: { itemId: string; count: number }[]): Resources {
    return new Resources({
      barracksBooks: BarracksBooksResources.transformDataFromDB(
        data.filter((it) => it.itemId.startsWith('barracksBooks')),
      ),
      heroesCards: HeroesResources.transformDataFromDB(data.filter((it) => it.itemId.startsWith('heroesCards'))),
      blacksmith: new BlacksmithResources({
        hammers: data.find((it) => it.itemId === 'hammers')?.count || 0,
      }),
      castle: CastleResources.transformDataFromDB(data.filter((it) => it.itemId.startsWith('castleResources'))),
      gold: data.find((it) => it.itemId === 'gold')?.count || 0,
      galleryShards: data.find((it) => it.itemId === 'galleryShards')?.count || 0,
      dragonsRunes: DragonRunesResources.transformDataFromDB(
        data.filter((it) => it.itemId.startsWith('dragonResources')),
      ),
      talents: TalentsResources.transformDataFromDB(data.filter((it) => it.itemId.startsWith('talentsResources'))),
      witch: WitchResources.transformDataFromDB(data.filter((it) => it.itemId.startsWith('witchResources'))),
    })
  }
}
