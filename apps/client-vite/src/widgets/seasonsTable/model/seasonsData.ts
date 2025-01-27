import type { ItemTypes } from 'kg-calculator-typings'

export interface SeasonData {
  season: number
  servers: string
  rewardsMK: ItemTypes[]
  beastsMithril: ItemTypes[]
  rewardBL: ItemTypes
  coefficientsMithril: {
    oracleCrowns: number
    talentsBooks: number
    deluxeDragonSoul: number
    dragonSoul: number
    titansBlood: number
    elementalVial: number
    perfectSummonSpell: number
    advancedSummonSpell: number
    fortunePotion: number
    strengthPotion: number
  }
  coefficientsExchangeShop: {
    t1Barracks: number
    t2Barracks: number
    t3Barracks: number
    t4Barracks: number
    greenRune: number
    blueRune: number
    purpleRune: number
    goldRune: number
    hammers: number
    lightReagent: number
  }
}

export const seasonsData: SeasonData[] = [
  {
    season: 39,
    servers: '401-1195',
    rewardsMK: ['beast_t10', 'beast_t9', 'beast_t7'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4', 'beast_t5'],
    rewardBL: 'dragonEqip_t9',
    coefficientsMithril: {
      oracleCrowns: 78125,
      talentsBooks: 78125,
      deluxeDragonSoul: 15625,
      dragonSoul: 15625,
      titansBlood: 15625,
      elementalVial: 15625,
      perfectSummonSpell: 1250,
      advancedSummonSpell: 1250,
      fortunePotion: 31250,
      strengthPotion: 35715,
    },
    coefficientsExchangeShop: {
      t1Barracks: 17858,
      t2Barracks: 89286,
      t3Barracks: 446429,
      t4Barracks: 2232143,
      greenRune: 313,
      blueRune: 3125,
      purpleRune: 31250,
      goldRune: 62500,
      hammers: 1117,
      lightReagent: 1563,
    },
  },
  {
    season: 38,
    servers: '-',
    rewardsMK: ['weaponEqip_t11', 'weaponEqip_t10', 'weaponEqip_t8'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4', 'beast_t5'],
    rewardBL: 'dragonEqip_t9',
    coefficientsMithril: {
      oracleCrowns: 31250,
      talentsBooks: 31250,
      deluxeDragonSoul: 6250,
      dragonSoul: 6250,
      titansBlood: 15625,
      elementalVial: 15625,
      perfectSummonSpell: 625,
      advancedSummonSpell: 625,
      fortunePotion: 15625,
      strengthPotion: 17858,
    },
    coefficientsExchangeShop: {
      t1Barracks: 17858,
      t2Barracks: 89286,
      t3Barracks: 446429,
      t4Barracks: 2232143,
      greenRune: 313,
      blueRune: 3125,
      purpleRune: 31250,
      goldRune: 62500,
      hammers: 1117,
      lightReagent: 1563,
    },
  },
  {
    season: 37,
    servers: '-',
    rewardsMK: ['dragonEqip_t10', 'dragonEqip_t9', 'dragonEqip_t7'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4', 'beast_t5'],
    rewardBL: 'dragonEqip_t9',
    coefficientsMithril: {
      oracleCrowns: 31250,
      talentsBooks: 31250,
      deluxeDragonSoul: 6250,
      dragonSoul: 6250,
      titansBlood: 15625,
      elementalVial: 15625,
      perfectSummonSpell: 625,
      advancedSummonSpell: 625,
      fortunePotion: 15625,
      strengthPotion: 17858,
    },
    coefficientsExchangeShop: {
      t1Barracks: 17858,
      t2Barracks: 89286,
      t3Barracks: 446429,
      t4Barracks: 2232143,
      greenRune: 313,
      blueRune: 3125,
      purpleRune: 31250,
      goldRune: 62500,
      hammers: 1117,
      lightReagent: 1563,
    },
  },
  {
    season: 36,
    servers: '-',
    rewardsMK: ['dragonEqip_t10', 'dragonEqip_t9', 'dragonEqip_t7'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4', 'beast_t5'],
    rewardBL: 'dragonEqip_t9',
    coefficientsMithril: {
      oracleCrowns: 15625,
      talentsBooks: 15625,
      deluxeDragonSoul: 3125,
      dragonSoul: 3125,
      titansBlood: 6250,
      elementalVial: 6250,
      perfectSummonSpell: 625,
      advancedSummonSpell: 625,
      fortunePotion: 15625,
      strengthPotion: 17858,
    },
    coefficientsExchangeShop: {
      t1Barracks: 8929,
      t2Barracks: 44643,
      t3Barracks: 223215,
      t4Barracks: 1116072,
      greenRune: 157,
      blueRune: 1563,
      purpleRune: 15625,
      goldRune: 31250,
      hammers: 447,
      lightReagent: 1563,
    },
  },
  {
    season: -1,
    servers: '-',
    rewardsMK: [],
    beastsMithril: [],
    rewardBL: 'dragonEqip_t9',
    coefficientsMithril: {
      oracleCrowns: 0,
      talentsBooks: 0,
      deluxeDragonSoul: 0,
      dragonSoul: 0,
      titansBlood: 0,
      elementalVial: 0,
      perfectSummonSpell: 0,
      advancedSummonSpell: 0,
      fortunePotion: 0,
      strengthPotion: 0,
    },
    coefficientsExchangeShop: {
      t1Barracks: 0,
      t2Barracks: 0,
      t3Barracks: 0,
      t4Barracks: 0,
      greenRune: 0,
      blueRune: 0,
      purpleRune: 0,
      goldRune: 0,
      hammers: 0,
      lightReagent: 0,
    },
  },
  {
    season: 16,
    servers: '1196-1208, 1210, 1215-1275',
    rewardsMK: ['witchGem_t7', 'witchGem_t6', 'witchGem_t4'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4', 'beast_t5'],
    rewardBL: 'dragonEqip_t6',
    coefficientsMithril: {
      oracleCrowns: 125,
      talentsBooks: 125,
      deluxeDragonSoul: 125,
      dragonSoul: 125,
      titansBlood: 50,
      elementalVial: 50,
      perfectSummonSpell: 25,
      advancedSummonSpell: 25,
      fortunePotion: 50,
      strengthPotion: 58,
    },
    coefficientsExchangeShop: {
      t1Barracks: 29,
      t2Barracks: 143,
      t3Barracks: 715,
      t4Barracks: 3572,
      greenRune: 3,
      blueRune: 25,
      purpleRune: 250,
      goldRune: 500,
      hammers: 0,
      lightReagent: 3,
    },
  },
  {
    season: 15,
    servers: '1276-1346',
    rewardsMK: ['beast_t7', 'beast_t6', 'beast_t4'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4', 'beast_t5'],
    rewardBL: 'dragonEqip_t6',
    coefficientsMithril: {
      oracleCrowns: 125,
      talentsBooks: 125,
      deluxeDragonSoul: 125,
      dragonSoul: 125,
      titansBlood: 25,
      elementalVial: 25,
      perfectSummonSpell: 25,
      advancedSummonSpell: 25,
      fortunePotion: 50,
      strengthPotion: 58,
    },
    coefficientsExchangeShop: {
      t1Barracks: 29,
      t2Barracks: 143,
      t3Barracks: 715,
      t4Barracks: 3572,
      greenRune: 3,
      blueRune: 25,
      purpleRune: 250,
      goldRune: 500,
      hammers: 0,
      lightReagent: 3,
    },
  },
  {
    season: 14,
    servers: '1347-1428',
    rewardsMK: ['weaponEqip_t7', 'weaponEqip_t6', 'weaponEqip_t4'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4'],
    rewardBL: 'dragonEqip_t6',
    coefficientsMithril: {
      oracleCrowns: 125,
      talentsBooks: 125,
      deluxeDragonSoul: 50,
      dragonSoul: 50,
      titansBlood: 25,
      elementalVial: 25,
      perfectSummonSpell: 25,
      advancedSummonSpell: 25,
      fortunePotion: 25,
      strengthPotion: 29,
    },
    coefficientsExchangeShop: {
      t1Barracks: 29,
      t2Barracks: 143,
      t3Barracks: 715,
      t4Barracks: 3572,
      greenRune: 3,
      blueRune: 25,
      purpleRune: 250,
      goldRune: 500,
      hammers: 0,
      lightReagent: 3,
    },
  },
  {
    season: 13,
    servers: '1429-1490',
    rewardsMK: ['witchGem_t7', 'witchGem_t6', 'witchGem_t4'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4'],
    rewardBL: 'dragonEqip_t6',
    coefficientsMithril: {
      oracleCrowns: 50,
      talentsBooks: 50,
      deluxeDragonSoul: 50,
      dragonSoul: 50,
      titansBlood: 25,
      elementalVial: 25,
      perfectSummonSpell: 25,
      advancedSummonSpell: 25,
      fortunePotion: 25,
      strengthPotion: 29,
    },
    coefficientsExchangeShop: {
      t1Barracks: 29,
      t2Barracks: 143,
      t3Barracks: 715,
      t4Barracks: 3572,
      greenRune: 2,
      blueRune: 13,
      purpleRune: 125,
      goldRune: 250,
      hammers: 0,
      lightReagent: 3,
    },
  },
  {
    season: 12,
    servers: '1491-1577',
    rewardsMK: ['dragonEqip_t7', 'dragonEqip_t6', 'dragonEqip_t4'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4'],
    rewardBL: 'dragonEqip_t6',
    coefficientsMithril: {
      oracleCrowns: 50,
      talentsBooks: 50,
      deluxeDragonSoul: 25,
      dragonSoul: 25,
      titansBlood: 25,
      elementalVial: 25,
      perfectSummonSpell: 10,
      advancedSummonSpell: 10,
      fortunePotion: 25,
      strengthPotion: 29,
    },
    coefficientsExchangeShop: {
      t1Barracks: 15,
      t2Barracks: 72,
      t3Barracks: 358,
      t4Barracks: 1786,
      greenRune: 2,
      blueRune: 13,
      purpleRune: 125,
      goldRune: 250,
      hammers: 0,
      lightReagent: 3,
    },
  },
  {
    season: 11,
    servers: '1578-1691',
    rewardsMK: ['dragonEqip_t7', 'dragonEqip_t6', 'dragonEqip_t4'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4'],
    rewardBL: 'dragonEqip_t6',
    coefficientsMithril: {
      oracleCrowns: 25,
      talentsBooks: 25,
      deluxeDragonSoul: 25,
      dragonSoul: 25,
      titansBlood: 10,
      elementalVial: 10,
      perfectSummonSpell: 10,
      advancedSummonSpell: 10,
      fortunePotion: 25,
      strengthPotion: 29,
    },
    coefficientsExchangeShop: {
      t1Barracks: 15,
      t2Barracks: 72,
      t3Barracks: 358,
      t4Barracks: 1786,
      greenRune: 2,
      blueRune: 13,
      purpleRune: 125,
      goldRune: 250,
      hammers: 0,
      lightReagent: 1,
    },
  },
  {
    season: 10,
    servers: '1692-1810',
    rewardsMK: ['witchGem_t6', 'witchGem_t5', 'witchGem_t3'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4'],
    rewardBL: 'dragonEqip_t5',
    coefficientsMithril: {
      oracleCrowns: 25,
      talentsBooks: 25,
      deluxeDragonSoul: 25,
      dragonSoul: 25,
      titansBlood: 10,
      elementalVial: 10,
      perfectSummonSpell: 5,
      advancedSummonSpell: 5,
      fortunePotion: 10,
      strengthPotion: 12,
    },
    coefficientsExchangeShop: {
      t1Barracks: 15,
      t2Barracks: 72,
      t3Barracks: 358,
      t4Barracks: 1786,
      greenRune: 2,
      blueRune: 13,
      purpleRune: 125,
      goldRune: 250,
      hammers: 0,
      lightReagent: 1,
    },
  },
  {
    season: 9,
    servers: '1811-1957',
    rewardsMK: ['beast_t6', 'beast_t5', 'beast_t3'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3', 'beast_t4'],
    rewardBL: 'dragonEqip_t5',
    coefficientsMithril: {
      oracleCrowns: 25,
      talentsBooks: 25,
      deluxeDragonSoul: 25,
      dragonSoul: 25,
      titansBlood: 5,
      elementalVial: 5,
      perfectSummonSpell: 5,
      advancedSummonSpell: 5,
      fortunePotion: 10,
      strengthPotion: 12,
    },
    coefficientsExchangeShop: {
      t1Barracks: 15,
      t2Barracks: 72,
      t3Barracks: 358,
      t4Barracks: 1786,
      greenRune: 1,
      blueRune: 5,
      purpleRune: 50,
      goldRune: 100,
      hammers: 0,
      lightReagent: 1,
    },
  },
  {
    season: 8,
    servers: '1958-2019',
    rewardsMK: ['weaponEqip_t6', 'weaponEqip_t5', 'weaponEqip_t3'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3'],
    rewardBL: 'dragonEqip_t5',
    coefficientsMithril: {
      oracleCrowns: 25,
      talentsBooks: 25,
      deluxeDragonSoul: 10,
      dragonSoul: 10,
      titansBlood: 5,
      elementalVial: 5,
      perfectSummonSpell: 5,
      advancedSummonSpell: 5,
      fortunePotion: 5,
      strengthPotion: 6,
    },
    coefficientsExchangeShop: {
      t1Barracks: 6,
      t2Barracks: 29,
      t3Barracks: 146,
      t4Barracks: 715,
      greenRune: 1,
      blueRune: 5,
      purpleRune: 50,
      goldRune: 100,
      hammers: 0,
      lightReagent: 1,
    },
  },
  {
    season: 7,
    servers: '2020-2059',
    rewardsMK: ['witchGem_t6', 'witchGem_t5', 'witchGem_t3'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3'],
    rewardBL: 'dragonEqip_t5',
    coefficientsMithril: {
      oracleCrowns: 10,
      talentsBooks: 10,
      deluxeDragonSoul: 10,
      dragonSoul: 10,
      titansBlood: 5,
      elementalVial: 5,
      perfectSummonSpell: 5,
      advancedSummonSpell: 5,
      fortunePotion: 5,
      strengthPotion: 6,
    },
    coefficientsExchangeShop: {
      t1Barracks: 6,
      t2Barracks: 29,
      t3Barracks: 146,
      t4Barracks: 715,
      greenRune: 1,
      blueRune: 3,
      purpleRune: 25,
      goldRune: 50,
      hammers: 0,
      lightReagent: 1,
    },
  },
  {
    season: 6,
    servers: '2060-2101',
    rewardsMK: ['dragonEqip_t6', 'dragonEqip_t5', 'dragonEqip_t3'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3'],
    rewardBL: 'dragonEqip_t5',
    coefficientsMithril: {
      oracleCrowns: 10,
      talentsBooks: 10,
      deluxeDragonSoul: 5,
      dragonSoul: 5,
      titansBlood: 5,
      elementalVial: 5,
      perfectSummonSpell: 2,
      advancedSummonSpell: 2,
      fortunePotion: 5,
      strengthPotion: 6,
    },
    coefficientsExchangeShop: {
      t1Barracks: 3,
      t2Barracks: 15,
      t3Barracks: 72,
      t4Barracks: 358,
      greenRune: 1,
      blueRune: 3,
      purpleRune: 25,
      goldRune: 50,
      hammers: 0,
      lightReagent: 1,
    },
  },
  {
    season: 5,
    servers: '2102-2189',
    rewardsMK: ['beast_t5', 'beast_t4', 'beast_t2'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3'],
    rewardBL: 'dragonEqip_t4',
    coefficientsMithril: {
      oracleCrowns: 5,
      talentsBooks: 5,
      deluxeDragonSoul: 5,
      dragonSoul: 5,
      titansBlood: 2,
      elementalVial: 2,
      perfectSummonSpell: 2,
      advancedSummonSpell: 2,
      fortunePotion: 5,
      strengthPotion: 6,
    },
    coefficientsExchangeShop: {
      t1Barracks: 3,
      t2Barracks: 15,
      t3Barracks: 72,
      t4Barracks: 358,
      greenRune: 1,
      blueRune: 3,
      purpleRune: 25,
      goldRune: 50,
      hammers: 0,
      lightReagent: 0,
    },
  },
  {
    season: 4,
    servers: '2190-2279',
    rewardsMK: ['weaponEqip_t5', 'weaponEqip_t4', 'weaponEqip_t2'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3'],
    rewardBL: 'dragonEqip_t4',
    coefficientsMithril: {
      oracleCrowns: 5,
      talentsBooks: 5,
      deluxeDragonSoul: 5,
      dragonSoul: 5,
      titansBlood: 2,
      elementalVial: 2,
      perfectSummonSpell: 0,
      advancedSummonSpell: 0,
      fortunePotion: 2,
      strengthPotion: 3,
    },
    coefficientsExchangeShop: {
      t1Barracks: 3,
      t2Barracks: 15,
      t3Barracks: 72,
      t4Barracks: 358,
      greenRune: 1,
      blueRune: 3,
      purpleRune: 25,
      goldRune: 50,
      hammers: 0,
      lightReagent: 0,
    },
  },
  {
    season: 3,
    servers: '2280-2325',
    rewardsMK: ['witchGem_t5', 'witchGem_t4', 'witchGem_t2'],
    beastsMithril: ['beast_t1', 'beast_t2', 'beast_t3'],
    rewardBL: 'dragonEqip_t4',
    coefficientsMithril: {
      oracleCrowns: 5,
      talentsBooks: 5,
      deluxeDragonSoul: 5,
      dragonSoul: 5,
      titansBlood: 0,
      elementalVial: 0,
      perfectSummonSpell: 0,
      advancedSummonSpell: 0,
      fortunePotion: 2,
      strengthPotion: 3,
    },
    coefficientsExchangeShop: {
      t1Barracks: 0,
      t2Barracks: 0,
      t3Barracks: 0,
      t4Barracks: 0,
      greenRune: 0,
      blueRune: 0,
      purpleRune: 0,
      goldRune: 0,
      hammers: 0,
      lightReagent: 0,
    },
  },
  {
    season: 2,
    servers: '2326-2355',
    rewardsMK: ['dragonEqip_t5', 'dragonEqip_t4', 'dragonEqip_t2'],
    beastsMithril: ['beast_t1', 'beast_t2'],
    rewardBL: 'dragonEqip_t4',
    coefficientsMithril: {
      oracleCrowns: 5,
      talentsBooks: 5,
      deluxeDragonSoul: 2,
      dragonSoul: 2,
      titansBlood: 0,
      elementalVial: 0,
      perfectSummonSpell: 0,
      advancedSummonSpell: 0,
      fortunePotion: 0,
      strengthPotion: 2,
    },
    coefficientsExchangeShop: {
      t1Barracks: 0,
      t2Barracks: 0,
      t3Barracks: 0,
      t4Barracks: 0,
      greenRune: 0,
      blueRune: 0,
      purpleRune: 0,
      goldRune: 0,
      hammers: 0,
      lightReagent: 0,
    },
  },
  {
    season: 2,
    servers: '2356-2375',
    rewardsMK: ['dragonEqip_t5', 'dragonEqip_t4', 'dragonEqip_t2'],
    beastsMithril: ['beast_t1', 'beast_t2'],
    rewardBL: 'dragonEqip_t4',
    coefficientsMithril: {
      oracleCrowns: 5,
      talentsBooks: 5,
      deluxeDragonSoul: 2,
      dragonSoul: 2,
      titansBlood: 0,
      elementalVial: 0,
      perfectSummonSpell: 0,
      advancedSummonSpell: 0,
      fortunePotion: 0,
      strengthPotion: 2,
    },
    coefficientsExchangeShop: {
      t1Barracks: 0,
      t2Barracks: 0,
      t3Barracks: 0,
      t4Barracks: 0,
      greenRune: 0,
      blueRune: 0,
      purpleRune: 0,
      goldRune: 0,
      hammers: 0,
      lightReagent: 0,
    },
  },
  {
    season: 1,
    servers: '2356-2375',
    rewardsMK: ['dragonEqip_t7', 'dragonEqip_t6', 'dragonEqip_t4'],
    beastsMithril: ['beast_t1'],
    rewardBL: 'dragonEqip_t4',
    coefficientsMithril: {
      oracleCrowns: 2,
      talentsBooks: 2,
      deluxeDragonSoul: 0,
      dragonSoul: 0,
      titansBlood: 0,
      elementalVial: 0,
      perfectSummonSpell: 0,
      advancedSummonSpell: 0,
      fortunePotion: 0,
      strengthPotion: 2,
    },
    coefficientsExchangeShop: {
      t1Barracks: 0,
      t2Barracks: 0,
      t3Barracks: 0,
      t4Barracks: 0,
      greenRune: 0,
      blueRune: 0,
      purpleRune: 0,
      goldRune: 0,
      hammers: 0,
      lightReagent: 0,
    },
  },
]
