import type { GemsRankParameters, Parameters, ParametersData } from 'kg-calculator-typings'

export default class WitchParameters {
  lightLevel: number = 0
  darkLevel: number = 0
  gems: {
    1: GemsRankParameters
    2: GemsRankParameters
    3: GemsRankParameters
    4: GemsRankParameters
    5: GemsRankParameters
    6: GemsRankParameters
    7: GemsRankParameters
    8: GemsRankParameters
    9: GemsRankParameters
  }

  constructor(initData?: ParametersData['witch']) {
    this.lightLevel = initData?.lightLevel || 0
    this.darkLevel = initData?.darkLevel || 0
    this.gems = {
      1: this.getFilledGemsByRank(initData?.gems['1']),
      2: this.getFilledGemsByRank(initData?.gems['2']),
      3: this.getFilledGemsByRank(initData?.gems['3']),
      4: this.getFilledGemsByRank(initData?.gems['4']),
      5: this.getFilledGemsByRank(initData?.gems['5']),
      6: this.getFilledGemsByRank(initData?.gems['6']),
      7: this.getFilledGemsByRank(initData?.gems['7']),
      8: this.getFilledGemsByRank(initData?.gems['8']),
      9: this.getFilledGemsByRank(initData?.gems['9']),
    }
  }

  static transformDataFromDB(params: Parameters, items: Record<string, number> = {}): WitchParameters {
    const parameters = new WitchParameters()
    Object.entries(items).forEach(([key, value]) => {
      const [rank, gem] = key.split('_')

      parameters.gems[rank][gem] = value
    })
    Object.entries(params).forEach(([key, value]) => {
      const [resourceType, param] = key.split('_')
      if (resourceType !== 'witchParams') return

      parameters[param] = value
    })

    return parameters
  }

  getData() {
    const params: Parameters = {
      witchParams_lightLevel: this.lightLevel,
      witchParams_darkLevel: this.darkLevel,
    }
    const gems: Record<string, number> = {}
    Object.entries(this.gems).forEach(([rank, value]) => {
      Object.entries(value).forEach(([gem, count]) => {
        gems[`${rank}_${gem}`] = count
      })
    })
    return {
      gems,
      params,
    }
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
