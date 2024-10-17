import type { ElementsType, HeroDataUpgrade, IHeroData, Ranks } from 'kg-calculator-typings'

export interface TableRow {
  id: string
  common: {
    rank: Ranks
    element: ElementsType
    name: string
    season?: number
    placesIds: number[]
  }
  skills: {
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
  }
  params: Omit<IHeroData, 'id'>
  upgradeParams: {
    before: HeroDataUpgrade
    after: HeroDataUpgrade
    cardsForStar: number
    cardsForBar: number
  }
  skillsData: {
    speed: number
    heal: number
    regeneration: number
    actionPoints: number
    weight: number
    offlineGold: number
    collectGold: number
    power: number
  }
}
