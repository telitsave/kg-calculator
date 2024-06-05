export interface TalentParametersByElementRank {
  booksCells: number
  crownsCells: number
}

export interface TalentParametersByElement {
  rank: Record<number, TalentParametersByElementRank>
}

export interface TalentsParameters {
  bow: TalentParametersByElement
  fire: TalentParametersByElement
  ice: TalentParametersByElement
  poison: TalentParametersByElement
}

export interface TalentsResources {
  books: number
  oraclesCrowns: number
}
