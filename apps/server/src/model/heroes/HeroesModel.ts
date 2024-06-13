import type { Hero } from 'kg-calculator-typings'
import heroes from './heroes.json'

export default class HeroesModel {
  getAllHeroes(): Hero[] {
    return heroes as Hero[]
  }
}
