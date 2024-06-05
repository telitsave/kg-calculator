import type {ResourcesData} from "./ResourcesData";

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
