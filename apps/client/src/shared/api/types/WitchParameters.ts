import { GemsRankParameters } from './GemsRankParameters'

export interface WitchParameters {
  lightLevel: number
  darkLevel: number
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
}
