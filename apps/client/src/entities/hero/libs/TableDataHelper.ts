import type { HeroTableData, HeroTableDataSimple } from 'kg-calculator-typings'

export default class TableDataHelper {
  static isSimpleTableDataRow(row: HeroTableData | HeroTableDataSimple): row is HeroTableDataSimple {
    return (row as HeroTableData).stars === undefined
  }

  static isTableDataRow(row: HeroTableData | HeroTableDataSimple): row is HeroTableData {
    return (row as HeroTableData).stars !== undefined
  }
}
