import type { ElementsType } from './Elements'
import type { Ranks } from './Ranks'
import type { ResourcesData } from './ResourcesData'
import type { CustomServerSettingsData, SettingsData } from './SettingsData'


export interface HeroesResources {
  n: number
  r: number
  sr: number
  ssr: number
}

export interface CalculateHeroesPayload {
  resources: ResourcesData
  settings: SettingsData
  heroesData: IHeroData[]
  heroesDistribution: HeroesDistribution
}

export interface CalculateHeroesResponse {
  spentResources: ResourcesData
  heroesUpgrades: HeroUpgrade[]
  heroesExperienceSpent: HeroExperienceSpent[]
  spentDistributionCards?: number
  gettingStars?: number
}

export interface HeroUpgrade {
  hero: Hero
  maxStars: number
  maxBars: number
  oldStars: number
  oldBars: number
  newBars: number
  newStars: number
  spentCards: number
  spentDistributionCards: number
}

export interface HeroExperienceSpent {
  hero: Hero
  spentCards: number
}

export interface Hero {
  heroId: string
  rank: Ranks
  element: ElementsType
  name: string
  season?: number
}

export interface IHeroData {
  id: string
  stars: number
  bars: number
  cards: number
}

export interface GetHeroesInCardsPayload {
  customServerSettings?: CustomServerSettingsData
}

export type HeroesResponse = Hero[]

export type HeroesInCardsResponse = Hero[]

export type HeroesDistribution = Record<string, number>
