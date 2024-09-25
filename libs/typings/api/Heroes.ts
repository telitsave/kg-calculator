import type { ElementsType } from './Elements'
import type { Resources } from './Inventory'
import type { Ranks } from './Ranks'


export type HeroesParams = Partial<Record<string, IHeroData>>

export interface HeroesResources {
  n: number
  r: number
  sr: number
  ssr: number
}

export interface CalculateHeroesResponse {
  spentResources: Resources
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
  skill1?: {
    id: number
    value: number
  }
  skill2?: {
    id: number
    value: number
  }
  skill3?: {
    id: number
    value: number
  }
  skill4?: {
    id: number
    value: number
  }
  placesIds: number[]
}

export interface IHeroData {
  id: string
  stars: number
  bars: number
  cards: number
  distributionCards: number
}

export interface SaveHeroesPayload {
  heroesParams: HeroesParams
}

export interface HeroTableData extends Hero, IHeroData {}

export type GetHeroesParamsResponse = HeroesParams

export type GetHeroesTableResponse = HeroTableData[]

export type HeroesResponse = Hero[]

export type HeroesDistribution = Record<string, number>
