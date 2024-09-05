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
}
