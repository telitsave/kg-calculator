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
    this.heroesCards.n = resources.heroesCards.n * serverSettings.extremePowerConversionRate.nHeroCard || 0
    this.heroesCards.r = resources.heroesCards.r * serverSettings.extremePowerConversionRate.rHeroCard || 0
    this.heroesCards.sr = resources.heroesCards.sr * serverSettings.extremePowerConversionRate.srHeroCard || 0
    this.heroesCards.ssr = resources.heroesCards.ssr * serverSettings.extremePowerConversionRate.ssrHeroCard || 0

    this.dragonRunes.green =
      resources.dragonsRunes.green * serverSettings.extremePowerConversionRate.dragonRuneGreen || 0
    this.dragonRunes.blue = resources.dragonsRunes.blue * serverSettings.extremePowerConversionRate.dragonRuneBlue || 0
    this.dragonRunes.purple =
      resources.dragonsRunes.purple * serverSettings.extremePowerConversionRate.dragonRunePurple || 0
    this.dragonRunes.gold = resources.dragonsRunes.gold * serverSettings.extremePowerConversionRate.dragonRuneGold || 0

    this.barracksBooks.rank1 =
      resources.barracksBooks.getAllBooksByRank('rank1') * serverSettings.extremePowerConversionRate.barrackBook1 || 0
    this.barracksBooks.rank2 =
      resources.barracksBooks.getAllBooksByRank('rank2') * serverSettings.extremePowerConversionRate.barrackBook2 || 0
    this.barracksBooks.rank3 =
      resources.barracksBooks.getAllBooksByRank('rank3') * serverSettings.extremePowerConversionRate.barrackBook3 || 0
    this.barracksBooks.rank4 =
      resources.barracksBooks.getAllBooksByRank('rank4') * serverSettings.extremePowerConversionRate.barrackBook4 || 0

    this.barracksTalents.books = resources.talents.books * serverSettings.extremePowerConversionRate.talentsBook || 0
    this.barracksTalents.oraclesCrowns =
      resources.talents.oraclesCrowns * serverSettings.extremePowerConversionRate.oracleCrown || 0

    this.witch.lightReagents =
      resources.witch.lightReagents * serverSettings.extremePowerConversionRate.lightReagent || 0
    this.witch.greenPotions =
      resources.witch.greenWitchPotion * serverSettings.extremePowerConversionRate.greenWitchPotion || 0
    this.witch.purplePotions =
      resources.witch.purpleWitchPotion * serverSettings.extremePowerConversionRate.purpleWitchPotion || 0

    this.castle.stone = resources.castle.stone * serverSettings.extremePowerConversionRate.stone || 0
    this.castle.wood = resources.castle.wood * serverSettings.extremePowerConversionRate.wood || 0
    this.castle.steel = resources.castle.steel * serverSettings.extremePowerConversionRate.steel || 0

    this.blacksmith.hammers = resources.blacksmith.hammers * serverSettings.extremePowerConversionRate.blacksmith || 0
    this.gallery.shards = resources.galleryShards * serverSettings.extremePowerConversionRate.galleryShard || 0
  }

  getData() {
    const mainData = {
      heroesCards: {
        ...this.heroesCards,
        total: this.heroesCards.n + this.heroesCards.r + this.heroesCards.sr + this.heroesCards.ssr,
      },
      dragonRunes: {
        ...this.dragonRunes,
        total: this.dragonRunes.green + this.dragonRunes.blue + this.dragonRunes.purple + this.dragonRunes.gold,
      },
      barracksBooks: {
        ...this.barracksBooks,
        total:
          this.barracksBooks.rank1 + this.barracksBooks.rank2 + this.barracksBooks.rank3 + this.barracksBooks.rank4,
      },
      barracksTalents: {
        ...this.barracksTalents,
        total: this.barracksTalents.books + this.barracksTalents.oraclesCrowns,
      },
      castle: {
        ...this.castle,
        total: this.castle.stone + this.castle.wood + this.castle.steel,
      },
      witch: {
        ...this.witch,
        total: this.witch.lightReagents + this.witch.greenPotions + this.witch.purplePotions,
      },
      blacksmith: {
        ...this.blacksmith,
        total: this.blacksmith.hammers,
      },
      gallery: {
        ...this.gallery,
        total: this.gallery.shards,
      },
      total: 0,
    }
    mainData.total =
      mainData.barracksBooks.total +
      mainData.barracksTalents.total +
      mainData.castle.total +
      mainData.dragonRunes.total +
      mainData.gallery.total +
      mainData.blacksmith.total +
      mainData.heroesCards.total +
      mainData.witch.total
    return mainData
  }
}
