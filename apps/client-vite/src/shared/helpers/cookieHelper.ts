export default class CookieHelper {
  static getCookie(name: string) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    // eslint-disable-next-line
    if (parts.length === 2) return parts.pop()!.split(';').shift()
    return undefined
  }

  static deleteCookie(name: string) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }
}
