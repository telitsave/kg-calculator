import Settings from '../model/settings/Settings'
import SettingsRepository, { type SettingsData } from '../repositories/settings-repository'
import { Settings as SettingsCustom } from 'kg-calculator-typings'


export default class SettingsService {
  static async getSettings(profileId: number) {
    const data = await SettingsRepository.getSettings(profileId)
    const settings: Settings = new Settings()
    data.forEach((item) => {
      settings[item.settingId] = item.value === 'true' ? true : item.value === 'false' ? false : item.value
    })

    return settings
  }

  static async setSettings(profileId: number, settings: SettingsCustom) {
    const data: SettingsData[] = Object.entries(settings).map(([key, value]) => ({
      settingId: key,
      value: value.toString() || null,
    }))

    await SettingsRepository.setSettings(profileId, data)
  }

  static async removeSettings(profileId) {
    await SettingsRepository.removeSettings(profileId)
  }
}
