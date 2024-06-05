import type { Heroes } from './Heroes'
import type { BarracksBooksResources } from './Barracks'
import type { DragonRunesResources } from './Dragon'
import type { TalentsResources } from './Talents'
import type { CastleResources } from './Castle'
import type { WitchResources } from './Witch'
import type { BlacksmithResources } from './Blacksmith'

export interface ResourcesData {
  heroesCards: Heroes
  barracksBooks: BarracksBooksResources
  dragonsRunes: DragonRunesResources
  talents: TalentsResources
  castle: CastleResources
  witch: WitchResources
  blacksmith: BlacksmithResources
  galleryShards: number
  gold: number
}
