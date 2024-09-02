import type { GemsRankParameters, ParametersData } from 'kg-calculator-typings'

export default class WitchParameters {
  lightLevel: number = 0
  darkLevel: number = 0
  gems: {
    rank1: GemsRankParameters
    rank2: GemsRankParameters
    rank3: GemsRankParameters
    rank4: GemsRankParameters
    rank5: GemsRankParameters
    rank6: GemsRankParameters
    rank7: GemsRankParameters
    rank8: GemsRankParameters
    rank9: GemsRankParameters
  }

  constructor(initData?: ParametersData['witch']) {
    this.lightLevel = initData?.lightLevel || 0
    this.darkLevel = initData?.darkLevel || 0
    this.gems = {
      rank1: this.getFilledGemsByRank(initData?.gems?.rank1),
      rank2: this.getFilledGemsByRank(initData?.gems?.rank2),
      rank3: this.getFilledGemsByRank(initData?.gems?.rank3),
      rank4: this.getFilledGemsByRank(initData?.gems?.rank4),
      rank5: this.getFilledGemsByRank(initData?.gems?.rank5),
      rank6: this.getFilledGemsByRank(initData?.gems?.rank6),
      rank7: this.getFilledGemsByRank(initData?.gems?.rank7),
      rank8: this.getFilledGemsByRank(initData?.gems?.rank8),
      rank9: this.getFilledGemsByRank(initData?.gems?.rank9),
    }
  }

  static transformDataFromDB(items: { parameterId: string; value: string }[]): WitchParameters {
    const parameters = new WitchParameters()
    items.forEach((item) => {
      const [, param, rank, gem] = item.parameterId.split('_')
      if (param === 'gems') {
        parameters[param][rank][gem] = Number(item.value) || 0
      } else {
        parameters[param] = Number(item.value) || 0
      }
    })

    return parameters
  }

  getDataForDB() {
    return [
      { parameterId: 'witch_lightLevel', value: this.lightLevel || null },
      { parameterId: 'witch_darkLevel', value: this.darkLevel || null },
      ...Object.entries(this.gems).flatMap(([rank, value]) => {
        return Object.entries(value).flatMap(([gem, count]) => ({
          parameterId: `witch_gems_${rank}_${gem}`,
          value: count || null,
        }))
      }),
    ]
  }

  private getFilledGemsByRank(rank?: GemsRankParameters) {
    return {
      amber: rank?.amber || 0,
      amethyst: rank?.amethyst || 0,
      emerald: rank?.emerald || 0,
      ruby: rank?.ruby || 0,
      malachite: rank?.malachite || 0,
      sapphire: rank?.sapphire || 0,
    }
  }
}
