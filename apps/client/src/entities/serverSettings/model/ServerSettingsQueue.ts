import type { QueryClient } from '@tanstack/react-query'
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
    this.serverSettings[setting] = value

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
          queryKey: ['serverSettings'],
        })
        this.queryClient.invalidateQueries({
          queryKey: ['heroesInCards'],
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
