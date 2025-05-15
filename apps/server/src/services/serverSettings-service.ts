import ServerSettings from '../model/ServerSettings'
import ServerSettingsRepository, { type ServerSettingsData } from '../repositories/serverSettings-repository'
import type { CustomServerSettingsData } from 'kg-calculator-typings'


export default class ServerSettingsService {
  static async getServerSettings(profileId: number) {
    const data = await ServerSettingsRepository.getServerSettings(profileId)
    const settings = new ServerSettings()
    const isEnabled = !!data.find((it) => it.settingId === 'enabledCustomServerSettings')?.value
    if (isEnabled) {
      data.forEach((item) => {
        settings[item.settingId] = Number(item.value)
      })
    }

    return settings
  }

  static async setServerSettings(profileId: number, settings: CustomServerSettingsData) {
    const data: ServerSettingsData[] = Object.entries(settings).map(([key, value]) => ({
      settingId: key as keyof CustomServerSettingsData,
      value,
    }))

    await ServerSettingsRepository.setServerSettings(profileId, data)
  }

  static async removeServerSettings(profileId) {
    await ServerSettingsRepository.removeServerSettings(profileId)
  }
}
