import mysql from 'mysql2/promise'

class MysqlAdapter {
  private _connection: mysql.Pool | null = null

  async init() {
    if (this._connection) return

    this._connection = mysql.createPool({
      host: process.env.MYSQL_HOST as string,
      port: Number(process.env.MYSQL_PORT),
      user: process.env.MYSQL_LOGIN as string,
      password: process.env.MYSQL_PASSWORD as string,
      database: process.env.MYSQL_DATABASE as string,
    })
  }

  async getConnection() {
    if (!this._connection) {
      await this.init()
    }

    return this._connection as mysql.Pool
  }
}

export default new MysqlAdapter()
