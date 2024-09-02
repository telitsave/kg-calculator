declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      PASSWORDS_SALT: string
      MYSQL_HOST: string
      MYSQL_PORT: string
      MYSQL_LOGIN: string
      MYSQL_PASSWORD: string
      MYSQL_DATABASE: string
      SECRET_KEY_ACCESS: string
      SECRET_KEY_REFRESH: string
      SMTP_USER: string
      SMTP_PASSWORD: string
      CLIENT_URL: string
    }
  }
}

export {}
