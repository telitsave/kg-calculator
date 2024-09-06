import type { QueryClient } from '@tanstack/react-query'
import type { ResourceType, Resources } from 'kg-calculator-typings'
import { debounce } from 'lodash'
import api from 'shared/api'
import NotificationsHelper from 'shared/helpers/notificationsHelper'


class ResourceQueue {
  resources: Resources = {}
  queryClient?: QueryClient

  reset() {
    this.resources = {}
  }

  setResource(resourceType: ResourceType, value: number, force = false) {
    this.resources[resourceType] = value
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
    const dataForSave = { ...this.resources }
    this.reset()
    if (Object.keys(dataForSave).length > 0) {
      try {
        NotificationsHelper.showSavingNotification()
        await this.queryClient.fetchQuery({
          staleTime: 0,
          queryKey: ['saveInventory'],
          queryFn: () =>
            api.inventory.addItems({
              resources: dataForSave,
            }),
        })
        this.queryClient.invalidateQueries({
          queryKey: ['resources'],
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

export default new ResourceQueue()
