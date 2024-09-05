import type ServerSettings from '../ServerSettings'
import type { Hero, HeroesInCardsResponse } from 'kg-calculator-typings'

export default class HeroesModel {
  getHeroesInCards(heroes: Hero[], serverSettings: ServerSettings): HeroesInCardsResponse {
    return (heroes as Hero[]).filter((it) => it.season !== undefined && it.season <= serverSettings.season)
  }
}
