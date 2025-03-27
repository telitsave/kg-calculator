export interface SpiritsInvasionRowData {
  wave: number
  power: number
  scoreTotal: number
  scoreByOne: number
}

export interface SpiritsInvasionShortData {
  level: number
  wave1Power: number
  wave19Power: number
  wave7Power: number
  wave14Power: number
  wave17Power: number
  wave10Power: number
  wave20Power: number
  totalScore: number
  scoreByOneCommon: number
  scoreByOneElite: number
  scoreByCommonWaves: number
  scoreByEliteWaves: number
  scoreByBossWaves: number
}

export interface GetSpiritsInvasionPayload {
  level: number
  membersCount: number
}

export interface GetSpiritsInvasionResponse {
  shortData: SpiritsInvasionShortData
  tableData: SpiritsInvasionRowData[]
}
