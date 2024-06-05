import scoresSettings from './extremePowerScoresSettings.json'
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

  constructor(resources: Resources) {
    this.heroesCards.n = resources.heroesCards.n * scoresSettings.nHeroCard || 0
    this.heroesCards.r = resources.heroesCards.r * scoresSettings.rHeroCard || 0
    this.heroesCards.sr = resources.heroesCards.sr * scoresSettings.srHeroCard || 0
    this.heroesCards.ssr = resources.heroesCards.ssr * scoresSettings.ssrHeroCard || 0

    this.dragonRunes.green = resources.dragonsRunes.green * scoresSettings.dragonRuneGreen || 0
    this.dragonRunes.blue = resources.dragonsRunes.blue * scoresSettings.dragonRuneBlue || 0
    this.dragonRunes.purple = resources.dragonsRunes.purple * scoresSettings.dragonRunePurple || 0
    this.dragonRunes.gold = resources.dragonsRunes.gold * scoresSettings.dragonRuneGold || 0

    this.barracksBooks.rank1 = resources.barracksBooks.getAllBooksByRank('rank1') * scoresSettings.barrackBook1 || 0
    this.barracksBooks.rank2 = resources.barracksBooks.getAllBooksByRank('rank2') * scoresSettings.barrackBook2 || 0
    this.barracksBooks.rank3 = resources.barracksBooks.getAllBooksByRank('rank3') * scoresSettings.barrackBook3 || 0
    this.barracksBooks.rank4 = resources.barracksBooks.getAllBooksByRank('rank4') * scoresSettings.barrackBook4 || 0

    this.barracksTalents.books = resources.talents.books * scoresSettings.talentsBook || 0
    this.barracksTalents.oraclesCrowns = resources.talents.oraclesCrowns * scoresSettings.oracleCrown || 0

    this.witch.lightReagents = resources.witch.lightReagents * scoresSettings.lightReagent || 0
    this.witch.greenPotions = resources.witch.greenWitchPotion * scoresSettings.greenWitchPotion || 0
    this.witch.purplePotions = resources.witch.purpleWitchPotion * scoresSettings.purpleWitchPotion || 0

    this.castle.stone = resources.castle.stone * scoresSettings.stone || 0
    this.castle.wood = resources.castle.wood * scoresSettings.wood || 0
    this.castle.steel = resources.castle.steel * scoresSettings.steel || 0

    this.blacksmith.hammers = resources.blacksmith.hammers * scoresSettings.blacksmith || 0
    this.gallery.shards = resources.galleryShards * scoresSettings.galleryShard || 0
  }

  toJSON() {
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
