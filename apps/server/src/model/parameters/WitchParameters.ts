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
