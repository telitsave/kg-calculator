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
    this.heroesCards.n = resources.heroesCards.n * serverSettings.mk_nHeroCard
    this.heroesCards.r = resources.heroesCards.r * serverSettings.mk_rHeroCard
    this.heroesCards.sr = resources.heroesCards.sr * serverSettings.mk_srHeroCard
    this.heroesCards.ssr = resources.heroesCards.ssr * serverSettings.mk_ssrHeroCard

    this.dragonRunes.green = resources.dragonsRunes.green * serverSettings.mk_dragonRuneGreen
    this.dragonRunes.blue = resources.dragonsRunes.blue * serverSettings.mk_dragonRuneBlue
    this.dragonRunes.purple = resources.dragonsRunes.purple * serverSettings.mk_dragonRunePurple
    this.dragonRunes.gold = resources.dragonsRunes.gold * serverSettings.mk_dragonRuneGold

    this.barracksBooks.rank1 = resources.barracksBooks.getAllBooksByRank('rank1') * serverSettings.mk_barrackBook1
    this.barracksBooks.rank2 = resources.barracksBooks.getAllBooksByRank('rank2') * serverSettings.mk_barrackBook2
    this.barracksBooks.rank3 = resources.barracksBooks.getAllBooksByRank('rank3') * serverSettings.mk_barrackBook3
    this.barracksBooks.rank4 = resources.barracksBooks.getAllBooksByRank('rank4') * serverSettings.mk_barrackBook4

    this.barracksTalents.books = resources.talents.books * serverSettings.mk_talentsBook
    this.barracksTalents.oraclesCrowns = resources.talents.oraclesCrowns * serverSettings.mk_oracleCrown

    this.witch.lightReagents = resources.witch.lightReagents * serverSettings.mk_lightReagent
    this.witch.greenPotions = resources.witch.greenWitchPotion * serverSettings.mk_greenWitchPotion
    this.witch.purplePotions = resources.witch.purpleWitchPotion * serverSettings.mk_purpleWitchPotion

    this.blacksmith.hammers = resources.blacksmith.hammers * serverSettings.mk_blacksmith
    this.gallery.shards = resources.galleryShards * serverSettings.mk_galleryShard
  }
}
