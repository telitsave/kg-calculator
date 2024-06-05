import CastleResources from './CastleResources'
import HeroesResources from './HeroesResources'
import BarracksBooksResources, { BarracksBooksByElement } from './BarracksBooksResources'
import DragonRunesResources from './DragonRunesResources'
import TalentsResources from './TalentsResources'
import WitchResources from './WitchResources'
import BlacksmithResources from './BlacksmithResources'
import { BaseResources } from './BaseResources'

export interface ResourcesData {
  heroesCards?: {
    n?: number
    r?: number
    sr?: number
    ssr?: number
  }
  barracksBooks?: {
    bow: BarracksBooksByElement
    fire: BarracksBooksByElement
    ice: BarracksBooksByElement
    poison: BarracksBooksByElement
    random: number
  }
  dragonsRunes?: {
    green?: number
    blue?: number
    purple?: number
    gold?: number
    boxes?: number
  }
  talents?: {
    books?: number
    oraclesCrowns?: number
  }
  castle?: {
    stone?: number
    wood?: number
    steel?: number
    boxes?: number
  }
  witch?: {
    lightReagents?: number
    greenWitchPotion?: number
    purpleWitchPotion?: number
  }
  blacksmith?: {
    hammers?: number
  }
  galleryShards?: number
  gold?: number
}

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

  constructor(initData?: ResourcesData) {
    this.heroesCards = new HeroesResources(initData?.heroesCards)
    this.castle = new CastleResources(initData?.castle)
    this.barracksBooks = new BarracksBooksResources(initData?.barracksBooks)
    this.dragonsRunes = new DragonRunesResources(initData?.dragonsRunes)
    this.talents = new TalentsResources(initData?.talents)
    this.witch = new WitchResources(initData?.witch)
    this.blacksmith = new BlacksmithResources(initData?.blacksmith)
    this.galleryShards = initData?.galleryShards || 0
    this.gold = initData?.gold || 0
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
}
