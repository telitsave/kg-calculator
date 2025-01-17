import isNumber from 'lodash/isNumber'

export default class TypeHelper {
  static isNumber(value: string | number | null | undefined): value is number {
    return isNumber(value)
  }
}
