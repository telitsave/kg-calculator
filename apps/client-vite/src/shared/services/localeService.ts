export default class LocaleService {
  currentLocale: 'en' | 'ru'

  private _callback?: (locale: 'en' | 'ru') => void

  constructor(callback?: (locale: 'en' | 'ru') => void) {
    this.currentLocale = this._getSavedLocale() || this._getPrefferedLocale()
    this._callback = callback
  }

  setLocale(locale: 'en' | 'ru') {
    this.currentLocale = locale
    this._saveLocale(locale)
    if (this._callback) {
      this._callback(locale)
    }
  }

  private _getPrefferedLocale() {
    const locale = navigator.language
    if (locale.toLowerCase().includes('ru')) {
      return 'ru'
    }

    return 'en'
  }

  private _getSavedLocale() {
    const savedLocale = localStorage.getItem('kg:locale')
    if (savedLocale === 'ru' || savedLocale === 'en') {
      return savedLocale
    }

    return null
  }

  private _saveLocale(locale: 'ru' | 'en') {
    localStorage.setItem('kg:locale', locale)
  }
}
