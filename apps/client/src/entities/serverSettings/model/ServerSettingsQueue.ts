import type { QueryClient } from '@tanstack/react-query'
import type { CustomServerSettingsData } from 'kg-calculator-typings'
import { debounce } from 'lodash'
import api from 'shared/api'
import NotificationsHelper from 'shared/helpers/notificationsHelper'


class ServerSettingsQueue {
  serverSettings: Partial<Record<string, number>> = {}
  queryClient?: QueryClient

  reset() {
    this.serverSettings = {}
  }

  setServerSetting(setting: string, value: number, force = false) {
    this.serverSettings[setting] = value || 0
    this.queryClient?.setQueryData(['serverSettings'], (val: CustomServerSettingsData): CustomServerSettingsData => {
      return {
        ...val,
        [setting]: value || 0,
      }
    })

    if (force) {
      this.saveData()
    } else {
      this._debouncedSaveData()
    }
  }

  async saveData() {
    if (!this.queryClient) {
      throw new Error('QueryClient missed')
    }
    const dataForSave = { ...this.serverSettings }
    this.reset()
    if (Object.keys(dataForSave).length > 0) {
      try {
        NotificationsHelper.showSavingNotification()
        await this.queryClient.fetchQuery({
          staleTime: 0,
          queryKey: ['saveServerSettings'],
          queryFn: () => api.serverSettings.setServerSettings(dataForSave),
        })
        this.queryClient.invalidateQueries({
          queryKey: ['mightiestKingdomTotal'],
        })
        this.queryClient.invalidateQueries({
          queryKey: ['ultimatePowerTotal'],
        })
        NotificationsHelper.showSavedNotification()
      } catch (e) {
        NotificationsHelper.showSaveErrorNotification()
      }
    }
  }

  private _debouncedSaveData = debounce(() => {
    this.saveData()
  }, 2000)
}

export default new ServerSettingsQueue()
