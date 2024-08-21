export default class User {
  id: number
  email: string
  password: string
  confirmed: boolean
  refreshTokens: string[]
  registrationToken: string | null

  constructor(userData, refreshTokensData) {
    this.id = userData.id
    this.email = userData.email
    this.password = userData.password
    this.confirmed = userData.confirmed
    this.refreshTokens = refreshTokensData.map((it) => it.refresh_token)
    this.registrationToken = userData.registration_token
  }

  getDto() {
    return {
      id: this.id,
      email: this.email,
      confirmed: this.confirmed,
    }
  }
}
