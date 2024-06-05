import type { CalculateMightiestKingdomResponse } from 'kg-calculator-typings/api/MightiestKingdom'

export default class NamesHelper {
  static getModuleNameByType(type: keyof Omit<CalculateMightiestKingdomResponse, 'total'>) {
    switch (type) {
      case 'barracksBooks':
        return 'Казарма (понедельник)'
      case 'barracksTalents':
        return 'Таланты (понедельник)'
      case 'blacksmith':
        return 'Кузнец (вторник, четверг)'
      case 'gallery':
        return 'Галерея (все дни)'
      case 'dragonRunes':
        return 'Руны дракона (вторник, пятница)'
      case 'heroesCards':
        return 'Карточки героев (суббота)'
      case 'witch':
        return 'Ведьма (вторник, среда)'
    }
  }
}
