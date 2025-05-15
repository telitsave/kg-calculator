import type ServerSettings from '../../../ServerSettings'
import Resources from '../../../resources/Resources'

export default class CalculationResults {
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
    this.heroesCards.n = resources.heroesCards.n * serverSettings.nHeroCard
    this.heroesCards.r = resources.heroesCards.r * serverSettings.rHeroCard
    this.heroesCards.sr = resources.heroesCards.sr * serverSettings.srHeroCard
    this.heroesCards.ssr = resources.heroesCards.ssr * serverSettings.ssrHeroCard

    this.dragonRunes.green = resources.dragonsRunes.green * serverSettings.dragonRuneGreen
    this.dragonRunes.blue = resources.dragonsRunes.blue * serverSettings.dragonRuneBlue
    this.dragonRunes.purple = resources.dragonsRunes.purple * serverSettings.dragonRunePurple
    this.dragonRunes.gold = resources.dragonsRunes.gold * serverSettings.dragonRuneGold

    this.barracksBooks.rank1 = resources.barracksBooks.getAllBooksByRank('rank1') * serverSettings.barrackBook1
    this.barracksBooks.rank2 = resources.barracksBooks.getAllBooksByRank('rank2') * serverSettings.barrackBook2
    this.barracksBooks.rank3 = resources.barracksBooks.getAllBooksByRank('rank3') * serverSettings.barrackBook3
    this.barracksBooks.rank4 = resources.barracksBooks.getAllBooksByRank('rank4') * serverSettings.barrackBook4

    this.barracksTalents.books = Math.round(
      resources.talents.books * (serverSettings.talentsBookCost / serverSettings.talentsBookCount),
    )
    this.barracksTalents.oraclesCrowns = Math.round(
      resources.talents.oraclesCrowns * Math.round(serverSettings.oracleCrownCost / serverSettings.oracleCrownCount),
    )
    
    this.witch.lightReagents = resources.witch.lightReagents * serverSettings.lightReagent
    this.witch.greenPotions = Math.round(
      resources.witch.greenWitchPotion *
        Math.round(serverSettings.greenWitchPotionCost / serverSettings.greenWitchPotionCount),
    )
    this.witch.purplePotions = Math.round(
      resources.witch.purpleWitchPotion *
        Math.round(serverSettings.purpleWitchPotionCost / serverSettings.purpleWitchPotionCount),
    )

    this.blacksmith.hammers = resources.blacksmith.hammers * serverSettings.blacksmith
    this.gallery.shards = resources.galleryShards * serverSettings.galleryShard
  }
}
