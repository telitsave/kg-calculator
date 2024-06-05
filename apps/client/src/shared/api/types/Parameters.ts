import { BarracksParameters } from './BarracksParameters'
import { BlacksmithParameters } from './BlacksmithParameters'
import { CastleParameters } from './CastleParameters'
import { DragonEmblemParameters } from './DragonEmblemParameters'
import { GalleryParameters } from './GalleryParameters'
import { TalentsParameters } from './TalentsParameters'
import { WitchParameters } from './WitchParameters'


export interface Parameters {
  dragonEmblems: DragonEmblemParameters
  castle: CastleParameters
  witch: WitchParameters
  barracks: BarracksParameters
  talents: TalentsParameters
  blacksmith: BlacksmithParameters
  gallery: GalleryParameters
}
