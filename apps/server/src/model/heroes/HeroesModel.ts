import type ServerSettings from '../ServerSettings'
import heroes from './heroes.json'
import type { Hero, HeroesInCardsResponse, HeroesResponse } from 'kg-calculator-typings'


export default class HeroesModel {
  getAllHeroes(): HeroesResponse {
    return heroes as Hero[]
  }

  getHeroesInCards(serverSettings: ServerSettings): HeroesInCardsResponse {
    return (heroes as Hero[]).filter((it) => it.season !== undefined && it.season <= serverSettings.season)
  }
}
