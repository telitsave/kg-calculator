import HeroesRepository, { type HeroParameter } from '../repositories/heroes-repository'
import type { Hero, HeroesParams } from 'kg-calculator-typings'


export default class HeroesService {
  static async getHeroes() {
    const data = await HeroesRepository.getHeroes()
    const heroes: Hero[] = data.map((it) => ({
      heroId: it.id,
      rank: it.rank,
      name: it.name,
      element: it.element,
      season: it.season !== null ? it.season : undefined,
      skill1: this.parseSkill(it.skill1) || undefined,
      skill2: this.parseSkill(it.skill2) || undefined,
      skill3: this.parseSkill(it.skill3) || undefined,
      skill4: this.parseSkill(it.skill4) || undefined,
      placesIds: it.placesIds.split(',').map(Number),
    }))

    return heroes
  }

  static async getHeroesParams(profileId: number) {
    const data = await HeroesRepository.getHeroesParams(profileId)
    const heroes: HeroesParams = {}
    data.forEach((item) => {
      heroes[item.heroId] = {
        stars: item.stars,
        bars: item.bars,
        cards: item.cards,
        distributionCards: item.distributionCards,
        id: item.heroId,
      }
    })

    return heroes
  }

  static async setHeroesParams(profileId: number, heroesParams: HeroesParams) {
    const data: HeroParameter[] = Object.values(heroesParams).map((it) => ({
      heroId: it!.id,
      bars: it!.bars,
      distributionCards: it!.distributionCards,
      stars: it!.stars,
      cards: it!.cards,
    }))

    await HeroesRepository.setHeroesParams(profileId, data)
  }

  static async removeHeroesParams(profileId) {
    await HeroesRepository.removeHeroesParams(profileId)
  }

  private static parseSkill(skill: string | null): { id: number; value: number } | null {
    if (!skill) return null

    const [skillId, value] = skill.split('-').map(Number)
    return {
      id: skillId,
      value,
    }
  }
}
