import type ServerSettings from '../../../ServerSettings'
import Resources from '../../../resources/Resources'

export default class CalculationResults {
  castle = {
    stone: 0,
    wood: 0,
    steel: 0,
  }
  dragonRunes = {
    green: 0,
    blue: 0,
    purple: 0,
    gold: 0,
  }
  heroesCards = {
    n: 0,
    r: 0,
    sr: 0,
    ssr: 0,
  }
  barracksBooks = {
    rank1: 0,
    rank2: 0,
    rank3: 0,
    rank4: 0,
  }
  barracksTalents = {
    books: 0,
    oraclesCrowns: 0,
  }
  witch = {
    lightReagents: 0,
    greenPotions: 0,
    purplePotions: 0,
  }
  blacksmith = {
    hammers: 0,
  }
  gallery = {
    shards: 0,
  }

  constructor(resources: Resources, serverSettings: ServerSettings) {
    this.heroesCards.n = resources.heroesCards.n * serverSettings.up_nHeroCard
    this.heroesCards.r = resources.heroesCards.r * serverSettings.up_rHeroCard
    this.heroesCards.sr = resources.heroesCards.sr * serverSettings.up_srHeroCard
    this.heroesCards.ssr = resources.heroesCards.ssr * serverSettings.up_ssrHeroCard

    this.dragonRunes.green = resources.dragonsRunes.green * serverSettings.up_dragonRuneGreen
    this.dragonRunes.blue = resources.dragonsRunes.blue * serverSettings.up_dragonRuneBlue
    this.dragonRunes.purple = resources.dragonsRunes.purple * serverSettings.up_dragonRunePurple
    this.dragonRunes.gold = resources.dragonsRunes.gold * serverSettings.up_dragonRuneGold

    this.barracksBooks.rank1 = resources.barracksBooks.getAllBooksByRank('rank1') * serverSettings.up_barrackBook1
    this.barracksBooks.rank2 = resources.barracksBooks.getAllBooksByRank('rank2') * serverSettings.up_barrackBook2
    this.barracksBooks.rank3 = resources.barracksBooks.getAllBooksByRank('rank3') * serverSettings.up_barrackBook3
    this.barracksBooks.rank4 = resources.barracksBooks.getAllBooksByRank('rank4') * serverSettings.up_barrackBook4

    this.barracksTalents.books = resources.talents.books * serverSettings.up_talentsBook
    this.barracksTalents.oraclesCrowns = resources.talents.oraclesCrowns * serverSettings.up_oracleCrown

    this.witch.lightReagents = resources.witch.lightReagents * serverSettings.up_lightReagent
    this.witch.greenPotions = resources.witch.greenWitchPotion * serverSettings.up_greenWitchPotion
    this.witch.purplePotions = resources.witch.purpleWitchPotion * serverSettings.up_purpleWitchPotion

    this.castle.stone = resources.castle.stone * serverSettings.up_stone
    this.castle.wood = resources.castle.wood * serverSettings.up_wood
    this.castle.steel = resources.castle.steel * serverSettings.up_steel

    this.blacksmith.hammers = resources.blacksmith.hammers * serverSettings.up_blacksmith
    this.gallery.shards = resources.galleryShards * serverSettings.up_galleryShard
  }
}
