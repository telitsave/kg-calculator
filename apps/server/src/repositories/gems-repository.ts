import mysqlAdapter from '../adapters/mysql-adapter'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'

export interface GemsData {
  rank: number
  sapphire: number
  ruby: number
  malachite: number
  amethyst: number
  amber: number
  emerald: number
}

export default class GemsRepository {
  static async getGems(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `SELECT * FROM \`gems_parameters\` WHERE \`profileId\` = ?`
      const [items] = await connection.query<RowDataPacket[]>(sql, [profileId])

      return items as GemsData[]
    } catch (error) {
      throw error
    }
  }

  static async addGems(profileId: number, items: GemsData[]) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sqlData = items.map((item) => [
        profileId,
        item.rank,
        item.sapphire,
        item.ruby,
        item.malachite,
        item.amethyst,
        item.amber,
        item.emerald,
      ])
      const sql = `
        INSERT INTO \`gems_parameters\`
        VALUES ${connection.escape(sqlData)} AS \`vals\`
        ON DUPLICATE KEY UPDATE
            \`sapphire\` = \`vals\`.\`sapphire\`,
            \`ruby\` = \`vals\`.\`ruby\`,
            \`malachite\` = \`vals\`.\`malachite\`,
            \`amethyst\` = \`vals\`.\`amethyst\`,
            \`amber\` = \`vals\`.\`amber\`,
            \`emerald\` = \`vals\`.\`emerald\`;
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }

  static async removeGems(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `
        DELETE FROM \`gems_parameters\`
        WHERE \`profileId\` = ${connection.escape(profileId)};
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }
}
