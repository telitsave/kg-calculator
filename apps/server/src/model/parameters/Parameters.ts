import DragonEmblemParameters from './DragonEmblemParameters'
import CastleParameters from './CastleParameters'
import WitchParameters from './WitchParameters'
import BarracksParameters from './BarracksParameters'
import TalentsParameters from './TalentsParameters'
import BlacksmithParameters from './BlacksmithParameters'
import GalleryParameters from './GalleryParameters'
import type { ParametersData } from 'kg-calculator-typings'

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

  getData(): ParametersData {
    return {
      barracks: this.barracks.getData(),
      castle: this.castle,
      witch: this.witch,
      talents: this.talents,
      gallery: this.gallery,
      blacksmith: this.blacksmith,
      dragonEmblems: this.dragonEmblems,
    }
  }
}
