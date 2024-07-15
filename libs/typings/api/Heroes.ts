import type { ElementsType } from './Elements'
import type { Ranks } from './Ranks'
import type { ResourcesData } from './ResourcesData'


export interface HeroesResources {
  n: number
  r: number
  sr: number
  ssr: number
}

export interface CalculateHeroesPayload {
  resources: ResourcesData
}

export interface CalculateHeroesResponse {
  spentResources: ResourcesData
}

export interface Hero {
  heroId: string
  rank: Ranks
  element: ElementsType
  name: string
  season?: number
}

export type HeroesResponse = Hero[]

export type HeroesInCardsResponse = Hero[]

export type HeroesDistribution = Record<string, number>
