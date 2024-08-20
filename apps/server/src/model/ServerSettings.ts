import type { CustomServerSettingsData } from 'kg-calculator-typings'

export default class ServerSettings {
  talentsMaxRank = 6
  witchGemsMaxRank = 5
  talentBooksConversionRate = {
    rank1: 6,
    rank2: 29,
    rank3: 143,
    rank4: 715,
  }
  extremePowerConversionRate = {
    nHeroCard: 100,
    rHeroCard: 700,
    srHeroCard: 3500,
    ssrHeroCard: 14000,
    barrackBook1: 800,
    barrackBook2: 4000,
    barrackBook3: 20000,
    barrackBook4: 100000,
    dragonRuneGreen: 70,
    dragonRuneBlue: 700,
    dragonRunePurple: 7000,
    dragonRuneGold: 14000,
    talentsBook: 140,
    oracleCrown: 1400,
    stone: 100,
    wood: 500,
    steel: 2000,
    lightReagent: 70,
    greenWitchPotion: 70,
    purpleWitchPotion: 700,
    blacksmith: 100,
    galleryShard: 1000,
  }
  mightiestKingdomConversionRate = {
    nHeroCard: 100,
    rHeroCard: 700,
    srHeroCard: 3500,
    ssrHeroCard: 14000,
    barrackBook1: 800,
    barrackBook2: 4000,
    barrackBook3: 20000,
    barrackBook4: 100000,
    dragonRuneGreen: 70,
    dragonRuneBlue: 700,
    dragonRunePurple: 7000,
    dragonRuneGold: 14000,
    talentsBook: 140,
    oracleCrown: 1400,
    lightReagent: 70,
    greenWitchPotion: 70,
    purpleWitchPotion: 700,
    blacksmith: 100,
    galleryShard: 1000,
  }
  season = 7

  constructor(customServerSettings?: CustomServerSettingsData) {
    if (customServerSettings) {
      this.talentsMaxRank = customServerSettings?.talentsMaxRank || this.talentsMaxRank
      this.witchGemsMaxRank = customServerSettings?.witchGemsMaxRank || this.witchGemsMaxRank
      this.season =
        customServerSettings?.season || customServerSettings?.season === 0 ? customServerSettings?.season : this.season
      this.talentBooksConversionRate = {
        ...this.talentBooksConversionRate,
        ...customServerSettings.talentBooksConversionRate,
      }
      this.extremePowerConversionRate = {
        ...this.extremePowerConversionRate,
        ...customServerSettings.extremePowerConversionRate,
      }
      this.mightiestKingdomConversionRate = {
        ...this.mightiestKingdomConversionRate,
        ...customServerSettings.mightiestKingdomConversionRate,
      }
    }
  }
}
