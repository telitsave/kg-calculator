import BarracksParameters from './BarracksParameters'
import BlacksmithParameters from './BlacksmithParameters'
import CastleParameters from './CastleParameters'
import DragonEmblemParameters from './DragonEmblemParameters'
import GalleryParameters from './GalleryParameters'
import TalentsParameters from './TalentsParameters'
import WitchParameters from './WitchParameters'
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

  getDataForDB() {
    return [
      ...this.barracks.getDataForDB(),
      ...this.castle.getDataForDB(),
      ...this.witch.getDataForDB(),
      ...this.talents.getDataForDB(),
      ...this.gallery.getDataForDB(),
      ...this.blacksmith.getDataForDB(),
      ...this.dragonEmblems.getDataForDB(),
    ].filter((it) => it.value !== null)
  }

  static transformDataFromDB(data: { parameterId: string; value: string }[]): Parameters {
    const params = new Parameters()
    params.barracks = BarracksParameters.transformDataFromDB(data.filter((it) => it.parameterId.startsWith('barracks')))
    params.castle = CastleParameters.transformDataFromDB(data.filter((it) => it.parameterId.startsWith('castle')))
    params.witch = WitchParameters.transformDataFromDB(data.filter((it) => it.parameterId.startsWith('witch')))
    params.dragonEmblems = DragonEmblemParameters.transformDataFromDB(
      data.filter((it) => it.parameterId.startsWith('dragonEmblems')),
    )
    params.talents = TalentsParameters.transformDataFromDB(data.filter((it) => it.parameterId.startsWith('talents')))
    params.blacksmith = BlacksmithParameters.transformDataFromDB(
      data.filter((it) => it.parameterId.startsWith('blacksmith')),
    )
    params.gallery = GalleryParameters.transformDataFromDB(data.filter((it) => it.parameterId.startsWith('gallery')))
    return params
  }
}
