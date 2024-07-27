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
    this.heroesCards.n = resources.heroesCards.n * serverSettings.mightiestKingdomConversionRate.nHeroCard
    this.heroesCards.r = resources.heroesCards.r * serverSettings.mightiestKingdomConversionRate.rHeroCard
    this.heroesCards.sr = resources.heroesCards.sr * serverSettings.mightiestKingdomConversionRate.srHeroCard
    this.heroesCards.ssr = resources.heroesCards.ssr * serverSettings.mightiestKingdomConversionRate.ssrHeroCard

    this.dragonRunes.green =
      resources.dragonsRunes.green * serverSettings.mightiestKingdomConversionRate.dragonRuneGreen
    this.dragonRunes.blue = resources.dragonsRunes.blue * serverSettings.mightiestKingdomConversionRate.dragonRuneBlue
    this.dragonRunes.purple =
      resources.dragonsRunes.purple * serverSettings.mightiestKingdomConversionRate.dragonRunePurple
    this.dragonRunes.gold = resources.dragonsRunes.gold * serverSettings.mightiestKingdomConversionRate.dragonRuneGold

    this.barracksBooks.rank1 =
      resources.barracksBooks.getAllBooksByRank('rank1') * serverSettings.mightiestKingdomConversionRate.barrackBook1
    this.barracksBooks.rank2 =
      resources.barracksBooks.getAllBooksByRank('rank2') * serverSettings.mightiestKingdomConversionRate.barrackBook2
    this.barracksBooks.rank3 =
      resources.barracksBooks.getAllBooksByRank('rank3') * serverSettings.mightiestKingdomConversionRate.barrackBook3
    this.barracksBooks.rank4 =
      resources.barracksBooks.getAllBooksByRank('rank4') * serverSettings.mightiestKingdomConversionRate.barrackBook4

    this.barracksTalents.books = resources.talents.books * serverSettings.mightiestKingdomConversionRate.talentsBook
    this.barracksTalents.oraclesCrowns =
      resources.talents.oraclesCrowns * serverSettings.mightiestKingdomConversionRate.oracleCrown

    this.witch.lightReagents =
      resources.witch.lightReagents * serverSettings.mightiestKingdomConversionRate.lightReagent
    this.witch.greenPotions =
      resources.witch.greenWitchPotion * serverSettings.mightiestKingdomConversionRate.greenWitchPotion
    this.witch.purplePotions =
      resources.witch.purpleWitchPotion * serverSettings.mightiestKingdomConversionRate.purpleWitchPotion

    this.blacksmith.hammers = resources.blacksmith.hammers * serverSettings.mightiestKingdomConversionRate.blacksmith
    this.gallery.shards = resources.galleryShards * serverSettings.mightiestKingdomConversionRate.galleryShard
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
      mainData.dragonRunes.total +
      mainData.gallery.total +
      mainData.blacksmith.total +
      mainData.heroesCards.total +
      mainData.witch.total
    return mainData
  }
}
