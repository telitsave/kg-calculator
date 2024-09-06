import type { QueryClient } from '@tanstack/react-query'
import type { Settings } from 'kg-calculator-typings'
import api from 'shared/api'
import NotificationsHelper from 'shared/helpers/notificationsHelper'


class SettingsQueue {
  settings: Partial<Record<string, string | boolean>> = {}
  queryClient?: QueryClient

  reset() {
    this.settings = {}
  }

  setSetting(setting: string, value: string | boolean | undefined) {
    this.settings[setting] = value
    this.queryClient?.setQueryData(['settings'], (val: Settings): Settings => {
      return {
        ...val,
        [setting]: value,
      }
    })
    this.saveData()
  }

  async saveData() {
    if (!this.queryClient) {
      throw new Error('QueryClient missed')
    }
    const dataForSave = { ...this.settings }
    this.reset()
    if (Object.keys(dataForSave).length > 0) {
      try {
        await this.queryClient.fetchQuery({
          staleTime: 0,
          queryKey: ['saveSettings'],
          queryFn: () => api.settings.setSettings(dataForSave),
        })
        this.queryClient.invalidateQueries({
          queryKey: ['settings'],
        })
        this.queryClient.invalidateQueries({
          queryKey: ['mightiestKingdomTotal'],
        })
        this.queryClient.invalidateQueries({
          queryKey: ['ultimatePowerTotal'],
        })
      } catch (e) {
        NotificationsHelper.showSaveErrorNotification()
      }
    }
  }
}

export default new SettingsQueue()
