import DragonEmblemParameters from './DragonEmblemParameters'
import CastleParameters from './CastleParameters'
import WitchParameters, { GemsRankParametersData } from './WitchParameters'
import BarracksParameters, { BarracksParametersData } from './BarracksParameters'
import TalentsParameters, { TalentParametersByElement } from './TalentsParameters'
import BlacksmithParameters from './BlacksmithParameters'
import GalleryParameters from './GalleryParameters'

export interface ParametersData {
  dragonEmblems?: {
    green?: number
    blue?: number
    purple?: number
    gold?: number
  }
  castle?: {
    level?: number
  }
  witch?: {
    lightLevel: number
    darkLevel: number
    gems: {
      rank1: GemsRankParametersData
      rank2: GemsRankParametersData
      rank3: GemsRankParametersData
      rank4: GemsRankParametersData
      rank5: GemsRankParametersData
      rank6: GemsRankParametersData
      rank7: GemsRankParametersData
      rank8: GemsRankParametersData
    }
  }
  barracks?: BarracksParametersData
  talents?: {
    bow: TalentParametersByElement
    fire: TalentParametersByElement
    ice: TalentParametersByElement
    poison: TalentParametersByElement
  }
  blacksmith?: {
    level?: number
  }
  gallery?: {
    level?: number
    step?: number
  }
}

export default class Parameters {
  dragonEmblems: DragonEmblemParameters
  castle: CastleParameters
  witch: WitchParameters
  barracks: BarracksParameters
  talents: TalentsParameters
  blacksmith: BlacksmithParameters
  gallery: GalleryParameters

  constructor(initData?: ParametersData) {
    this.dragonEmblems = new DragonEmblemParameters(initData?.dragonEmblems)
    this.castle = new CastleParameters(initData?.castle)
    this.witch = new WitchParameters(initData?.witch)
    this.barracks = new BarracksParameters(initData?.barracks)
    this.talents = new TalentsParameters(initData?.talents)
    this.blacksmith = new BlacksmithParameters(initData?.blacksmith)
    this.gallery = new GalleryParameters(initData?.gallery)
  }

  clone() {
    const parameters = new Parameters()
    parameters.barracks = this.barracks.clone()
    parameters.castle = new CastleParameters(this.castle)
    parameters.witch = new WitchParameters(this.witch)
    parameters.dragonEmblems = new DragonEmblemParameters(this.dragonEmblems)
    parameters.talents = new TalentsParameters(this.talents)
    parameters.blacksmith = new BlacksmithParameters(this.blacksmith)
    parameters.gallery = new GalleryParameters(this.gallery)
    return parameters
  }
}
