import type ServerSettings from '../../../ServerSettings'
import Resources from '../../../resources/Resources'
import CalculationResults from './CalculationResults'
import type { CalculateUltimatePowerResponse } from 'kg-calculator-typings'


export default class UltimatePowerEventCalculator {
  static calculate(resources: Resources, serverSettings: ServerSettings): CalculateUltimatePowerResponse {
    const data = new CalculationResults(resources, serverSettings)

    const result = {
      barracksResources_1: data.barracksBooks.rank1,
      barracksResources_2: data.barracksBooks.rank2,
      barracksResources_3: data.barracksBooks.rank3,
      barracksResources_4: data.barracksBooks.rank4,
      talentsResources_books: data.barracksTalents.books,
      talentsResources_oraclesCrowns: data.barracksTalents.oraclesCrowns,
      barracksResources_total:
        data.barracksBooks.rank1 +
        data.barracksBooks.rank2 +
        data.barracksBooks.rank3 +
        data.barracksBooks.rank4 +
        data.barracksTalents.books +
        data.barracksTalents.oraclesCrowns,

      dragonResources_green: data.dragonRunes.green,
      dragonResources_blue: data.dragonRunes.blue,
      dragonResources_purple: data.dragonRunes.purple,
      dragonResources_gold: data.dragonRunes.gold,
      dragonResources_total:
        data.dragonRunes.green + data.dragonRunes.blue + data.dragonRunes.purple + data.dragonRunes.gold,

      castleResources_stone: data.castle.stone,
      castleResources_wood: data.castle.wood,
      castleResources_steel: data.castle.steel,
      castleResources_total: data.castle.stone + data.castle.wood + data.castle.steel,

      witchResources_lightReagents: data.witch.lightReagents,
      witchResources_greenWitchPotion: data.witch.greenPotions,
      witchResources_purpleWitchPotion: data.witch.purplePotions,
      witchResources_total: data.witch.lightReagents + data.witch.greenPotions + data.witch.purplePotions,

      blacksmithResources_hammers: data.blacksmith.hammers,
      blacksmithResources_total: data.blacksmith.hammers,

      galleryResources_shards: data.gallery.shards,
      galleryResources_total: data.gallery.shards,

      heroesResources_n: data.heroesCards.n,
      heroesResources_r: data.heroesCards.r,
      heroesResources_sr: data.heroesCards.sr,
      heroesResources_ssr: data.heroesCards.ssr,
      heroesResources_total: data.heroesCards.n + data.heroesCards.r + data.heroesCards.sr + data.heroesCards.ssr,

      total: 0,
    }

    result.total =
      result.barracksResources_total +
      result.blacksmithResources_total +
      result.galleryResources_total +
      result.heroesResources_total +
      result.dragonResources_total +
      result.castleResources_total +
      result.witchResources_total

    return result
  }
}
