import type { CustomServerSettingsData } from 'kg-calculator-typings'

export default class ServerSettings {
  talentsMaxRank = 7
  witchGemsMaxRank = 6
  talentBooks_rank1 = 15
  talentBooks_rank2 = 72
  talentBooks_rank3 = 358
  talentBooks_rank4 = 1786
  up_nHeroCard = 100
  up_rHeroCard = 700
  up_srHeroCard = 3500
  up_ssrHeroCard = 14000
  up_barrackBook1 = 800
  up_barrackBook2 = 4000
  up_barrackBook3 = 20000
  up_barrackBook4 = 100000
  up_dragonRuneGreen = 70
  up_dragonRuneBlue = 700
  up_dragonRunePurple = 7000
  up_dragonRuneGold = 14000
  up_talentsBook = 14
  up_oracleCrown = 140
  up_stone = 100
  up_wood = 500
  up_steel = 2000
  up_lightReagent = 70
  up_greenWitchPotion = 14
  up_purpleWitchPotion = 140
  up_blacksmith = 100
  up_galleryShard = 1000
  mk_nHeroCard = 100
  mk_rHeroCard = 700
  mk_srHeroCard = 3500
  mk_ssrHeroCard = 14000
  mk_barrackBook1 = 800
  mk_barrackBook2 = 4000
  mk_barrackBook3 = 20000
  mk_barrackBook4 = 100000
  mk_dragonRuneGreen = 70
  mk_dragonRuneBlue = 700
  mk_dragonRunePurple = 7000
  mk_dragonRuneGold = 14000
  mk_talentsBook = 14
  mk_oracleCrown = 140
  mk_lightReagent = 70
  mk_greenWitchPotion = 14
  mk_purpleWitchPotion = 140
  mk_blacksmith = 100
  mk_galleryShard = 1000
  season = 13

  constructor(customServerSettings?: CustomServerSettingsData) {
    if (customServerSettings) {
      Object.entries(customServerSettings).forEach(([key, value]) => {
        this[key] = value || this[key]
      })
    }
  }
}
