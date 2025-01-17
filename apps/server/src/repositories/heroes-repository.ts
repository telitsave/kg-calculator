import mysqlAdapter from '../adapters/mysql-adapter'
import type { ElementsType, Ranks } from 'kg-calculator-typings'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'


export interface HeroData {
  id: string
  element: ElementsType
  rank: Ranks
  name: string
  nameEn: string
  season: number | null
  skill1: string | null
  skill2: string | null
  skill3: string | null
  skill4: string | null
  placesIds: string
}

export interface HeroParameter {
  heroId: string
  stars: number
  bars: number
  cards: number
  distributionCards: number
}

export default class HeroesRepository {
  static async getHeroes() {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `SELECT * FROM \`heroes\``
      const [items] = await connection.query<RowDataPacket[]>(sql)

      return items as HeroData[]
    } catch (error) {
      throw error
    }
  }

  static async getHeroesParams(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `SELECT * FROM \`heroes_parameters\` WHERE \`profileId\` = ?`
      const [items] = await connection.query<RowDataPacket[]>(sql, [profileId])

      return items as HeroParameter[]
    } catch (error) {
      throw error
    }
  }

  static async setHeroesParams(profileId: number, items: HeroParameter[]) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sqlData = items.map((item) => [
        profileId,
        item.heroId,
        item.stars,
        item.bars,
        item.cards,
        item.distributionCards,
      ])
      const sql = `
        INSERT INTO \`heroes_parameters\`
        VALUES ${connection.escape(sqlData)} AS \`vals\`
        ON DUPLICATE KEY UPDATE
            \`stars\` = \`vals\`.\`stars\`,
            \`bars\` = \`vals\`.\`bars\`,
            \`cards\` = \`vals\`.\`cards\`,
            \`distributionCards\` = \`vals\`.\`distributionCards\`;
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }

  static async removeHeroesParams(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `
        DELETE FROM \`heroes_parameters\`
        WHERE \`profileId\` = ${connection.escape(profileId)};
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }
}
