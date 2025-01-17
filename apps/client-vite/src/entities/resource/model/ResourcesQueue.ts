import type { QueryClient } from '@tanstack/react-query'
import type { ResourceType, Resources } from 'kg-calculator-typings'
import { debounce } from 'lodash'
import type { IntlShape } from 'react-intl'
import api from '@shared/api'
import NotificationsHelper from '@shared/helpers/notificationsHelper'


class ResourceQueue {
  intl: IntlShape | undefined
  resources: Resources = {}
  queryClient?: QueryClient

  reset() {
    this.resources = {}
  }

  setResource(resourceType: ResourceType, value: number | string, force = false) {
    this.resources[resourceType] = Number(value) || 0
    this.queryClient?.setQueryData(['resources'], (val: Resources) => {
      return {
        ...val,
        [resourceType]: value,
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
    if (!this.intl) {
      throw new Error('Intl missed')
    }
    const dataForSave = { ...this.resources }
    this.reset()
    if (Object.keys(dataForSave).length > 0) {
      try {
        NotificationsHelper.showSavingNotification(this.intl)
        await this.queryClient.fetchQuery({
          staleTime: 0,
          queryKey: ['saveInventory'],
          queryFn: () =>
            api.inventory.addItems({
              resources: dataForSave,
            }),
        })
        this.queryClient.invalidateQueries({
          queryKey: ['mightiestKingdomTotal'],
        })
        this.queryClient.invalidateQueries({
          queryKey: ['ultimatePowerTotal'],
        })
        NotificationsHelper.showSavedNotification(this.intl)
      } catch (e) {
        NotificationsHelper.showSaveErrorNotification(this.intl)
      }
    }
  }

  private _debouncedSaveData = debounce(() => {
    this.saveData()
  }, 2000)
}

export default new ResourceQueue()
