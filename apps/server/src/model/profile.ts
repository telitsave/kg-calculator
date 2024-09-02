export default class Profile {
  id: number
  userId: number
  name: string
  serverId?: number

  constructor(data) {
    this.id = data.id
    this.userId = data.userId
    this.name = data.name
    this.serverId = data.serverId
  }

  getDto() {
    return {
      ...this,
    }
  }
}
