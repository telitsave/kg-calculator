import { CastleResources } from './CastleResources'
import { HeroesResources } from './HeroesResources'
import { BarracksBooksResources } from './BarracksBooksResources'
import { DragonRunesResources } from './DragonRunesResources'
import { TalentsResources } from './TalentsResources'
import { WitchResources } from './WitchResources'
import { BlacksmithResources } from './BlacksmithResources'

export interface Resources {
  heroesCards: HeroesResources
  barracksBooks: BarracksBooksResources
  dragonsRunes: DragonRunesResources
  talents: TalentsResources
  castle: CastleResources
  witch: WitchResources
  blacksmith: BlacksmithResources
  galleryShards: number
  gold: number
}
