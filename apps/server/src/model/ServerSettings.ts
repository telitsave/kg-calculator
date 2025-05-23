import type { CustomServerSettingsData } from 'kg-calculator-typings'

export default class ServerSettings {
  readonly nHeroCard = 100
  readonly rHeroCard = 700
  readonly srHeroCard = 3500
  readonly ssrHeroCard = 14000
  readonly barrackBook1 = 800
  readonly barrackBook2 = 4000
  readonly barrackBook3 = 20000
  readonly barrackBook4 = 100000
  readonly dragonRuneGreen = 70
  readonly dragonRuneBlue = 700
  readonly dragonRunePurple = 7000
  readonly dragonRuneGold = 14000
  readonly stone = 100
  readonly wood = 500
  readonly steel = 2000
  readonly lightReagent = 70
  readonly blacksmith = 100
  readonly galleryShard = 1000

  enabledCustomServerSettings = 0
  season = 17
  talentsMaxRank = 8
  witchGemsMaxRank = 7
  talentBooks_rank1 = 72
  talentBooks_rank2 = 358
  talentBooks_rank3 = 1786
  talentBooks_rank4 = 8929
  greenWitchPotionCount = 10
  greenWitchPotionCost = 70
  purpleWitchPotionCount = 1
  purpleWitchPotionCost = 70
  talentsBookCount = 25
  talentsBookCost = 140
  oracleCrownCount = 5
  oracleCrownCost = 280

  constructor(customServerSettings?: CustomServerSettingsData) {
    if (customServerSettings) {
      Object.entries(customServerSettings).forEach(([key, value]) => {
        this[key] = value || this[key]
      })
    }
  }
}
