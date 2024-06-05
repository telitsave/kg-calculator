import { CalculateExtremePowerResponse } from 'shared/api'

export default class NamesHelper {
  static getModuleNameByType(type: keyof Omit<CalculateExtremePowerResponse, 'total'>) {
    switch (type) {
      case 'barracksBooks':
        return 'Казарма'
      case 'barracksTalents':
        return 'Таланты'
      case 'blacksmith':
        return 'Кузнец'
      case 'castle':
        return 'Замок'
      case 'gallery':
        return 'Галерея'
      case 'dragonRunes':
        return 'Руны дракона'
      case 'heroesCards':
        return 'Карточки героев'
      case 'witch':
        return 'Ведьма'
    }
  }
}
