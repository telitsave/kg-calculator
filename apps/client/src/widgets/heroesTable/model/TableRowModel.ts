import type {
  ElementsType,
  HeroDataUpgrade,
  HeroTableData,
  HeroTableDataSimple,
  IHeroData,
  Ranks,
} from 'kg-calculator-typings'
import { HeroHelper, TableDataHelper, skillsMap } from 'entities/hero'
import type { TableRow } from './types'

export default class TableRowModel {
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
  }

  constructor(data: HeroTableData | HeroTableDataSimple) {
    this.id = data.heroId
    this.common = {
      name: data.name,
      element: data.element,
      rank: data.rank,
      season: data.season,
      placesIds: data.placesIds,
    }
    this.skills = {
      skill1: data.skill1,
      skill2: data.skill2,
      skill3: data.skill3,
      skill4: data.skill4,
    }

    if (TableDataHelper.isTableDataRow(data)) {
      this.params = {
        stars: data.stars,
        bars: data.bars,
        cards: data.cards,
        distributionCards: data.distributionCards,
      }
      this.upgradeParams = {
        before: data.before,
        after: data.after,
      }
    } else {
      this.params = {
        stars: 0,
        bars: 0,
        distributionCards: 0,
        cards: 0,
      }
      this.upgradeParams = {
        before: {
          cardsForStar: 0,
          upgradeBars: 0,
          upgradeStars: 0,
          cardsForBar: 0,
          leftCards: 0,
        },
        after: {
          cardsForStar: 0,
          upgradeBars: 0,
          upgradeStars: 0,
          cardsForBar: 0,
          leftCards: 0,
        },
      }
    }
  }

  getTableData(useUpgrade = false, useAfterUpgrade = false): TableRow {
    const hero = {
      id: this.id,
      heroId: this.id,
      ...this.common,
      ...this.skills,
      ...this.params,
      ...this.upgradeParams,
    }
    const stars = useUpgrade ? (useAfterUpgrade ? this.upgradeParams.after.upgradeStars : this.params.stars) : undefined
    const bars = useUpgrade ? (useAfterUpgrade ? this.upgradeParams.after.upgradeBars : this.params.bars) : undefined
    const cards = useUpgrade ? (useAfterUpgrade ? this.upgradeParams.after.leftCards : this.params.cards) : undefined
    return {
      id: this.id,
      common: this.common,
      skills: this.skills,
      params: {
        stars: stars !== undefined ? stars : this.params.stars,
        bars: bars !== undefined ? bars : this.params.bars,
        cards: cards !== undefined ? cards : this.params.cards,
        distributionCards: this.params.distributionCards,
      },
      upgradeParams: {
        ...this.upgradeParams,
        cardsForBar:
          useUpgrade && useAfterUpgrade ? this.upgradeParams.after.cardsForBar : this.upgradeParams.before.cardsForBar,
        cardsForStar:
          useUpgrade && useAfterUpgrade
            ? this.upgradeParams.after.cardsForStar
            : this.upgradeParams.before.cardsForStar,
      },
      skillsData: {
        speed: HeroHelper.getSkillsTotalValue(hero, skillsMap.speed, stars),
        heal: HeroHelper.getSkillsTotalValue(hero, skillsMap.heal, stars),
        regeneration: HeroHelper.getSkillsTotalValue(hero, skillsMap.regeneration, stars),
        actionPoints: HeroHelper.getSkillsTotalValue(hero, skillsMap.actionPoints, stars),
        weight: HeroHelper.getSkillsTotalValue(hero, skillsMap.weight, stars),
        offlineGold: HeroHelper.getSkillsTotalValue(hero, skillsMap.offlineGold, stars),
        collectGold: HeroHelper.getSkillsTotalValue(hero, skillsMap.collectGold, stars),
        power:
          HeroHelper.getSkillsTotalValue(hero, skillsMap.power, stars) +
          HeroHelper.getSkillsTotalValue(hero, skillsMap.powerFire, stars) +
          HeroHelper.getSkillsTotalValue(hero, skillsMap.powerBow, stars) +
          HeroHelper.getSkillsTotalValue(hero, skillsMap.powerPoison, stars),
      },
    }
  }
}
