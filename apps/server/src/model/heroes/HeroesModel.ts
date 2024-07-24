import heroes from './heroes.json'
import type { Hero, HeroesInCardsResponse, HeroesResponse } from 'kg-calculator-typings'

export default class HeroesModel {
  getAllHeroes(): HeroesResponse {
    return heroes as Hero[]
  }

  getHeroesInCards(season: number): HeroesInCardsResponse {
    return (heroes as Hero[]).filter((it) => it.season !== undefined && it.season <= season)
  }
}
