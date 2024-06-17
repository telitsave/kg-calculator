export default class StringHelper {
  static capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static getFormatNumber(value: number): string {
    if (value < 1000) {
      return value.toString()
    }

    const abbreviations = ['тыс.', 'млн.', 'млрд.', 'трлн.']
    let abbIndex = -1
    let totalValue = value
    while (totalValue >= 1000) {
      totalValue /= 1000
      abbIndex++
    }

    return `${totalValue.toLocaleString('ru')} ${abbreviations[abbIndex]}`
  }
}
