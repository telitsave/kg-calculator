import type { IntlShape } from 'react-intl'

export default class StringHelper {
  static capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static getFormatNumber(value: number, intl: IntlShape): string {
    if (value < 1000) {
      return value.toString()
    }

    const abbreviations = [
      intl.formatMessage({ defaultMessage: 'тыс.' }),
      intl.formatMessage({ defaultMessage: 'млн.' }),
      intl.formatMessage({ defaultMessage: 'млрд.' }),
      intl.formatMessage({ defaultMessage: 'трлн.' }),
    ]
    let abbIndex = -1
    let totalValue = value
    while (totalValue >= 1000) {
      totalValue /= 1000
      abbIndex++
    }

    return `${intl.formatNumber(totalValue)} ${abbreviations[abbIndex]}`
  }
}
