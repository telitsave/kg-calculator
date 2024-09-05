import BarracksParameters from './BarracksParameters'
import BlacksmithParameters from './BlacksmithParameters'
import CastleParameters from './CastleParameters'
import DragonEmblemParameters from './DragonEmblemParameters'
import GalleryParameters from './GalleryParameters'
import TalentsParameters from './TalentsParameters'
import WitchParameters from './WitchParameters'
import type { ParametersData, Parameters as ParametersLib } from 'kg-calculator-typings'


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

  getData() {
    const { params, gems } = this.witch.getData()
    const talents = this.talents.getData()
    return {
      params: {
        ...this.barracks.getData(),
        ...this.castle.getData(),
        ...params,
        ...this.gallery.getData(),
        ...this.blacksmith.getData(),
        ...this.dragonEmblems.getData(),
      },
      gems,
      talents,
    }
  }

  static transformDataFromDB(
    data: ParametersLib,
    gems?: Record<string, number>,
    talents?: Record<string, number>,
  ): Parameters {
    const params = new Parameters()
    params.barracks = BarracksParameters.transformDataFromDB(data)
    params.castle = CastleParameters.transformDataFromDB(data)
    params.witch = WitchParameters.transformDataFromDB(data, gems)
    params.dragonEmblems = DragonEmblemParameters.transformDataFromDB(data)
    params.talents = TalentsParameters.transformDataFromDB(talents)
    params.blacksmith = BlacksmithParameters.transformDataFromDB(data)
    params.gallery = GalleryParameters.transformDataFromDB(data)
    return params
  }
}
