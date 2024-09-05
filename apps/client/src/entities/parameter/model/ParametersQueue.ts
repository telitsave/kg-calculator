import type { QueryClient } from '@tanstack/react-query'
import type { ElementsType, ParameterTypes, Parameters } from 'kg-calculator-typings'
import { debounce } from 'lodash'
import api from 'shared/api'
import NotificationsHelper from 'shared/helpers/notificationsHelper'


class ParametersQueue {
  parameters: Parameters = {}
  gems: Record<string, number> = {}
  talents: Record<string, number> = {}
  queryClient?: QueryClient

  reset() {
    this.parameters = {}
    this.gems = {}
    this.talents = {}
  }

  setParameter(parameterType: ParameterTypes, value: number, force = false) {
    this.parameters[parameterType] = value

    if (force) {
      this.saveData()
    } else {
      this._debouncedSaveData()
    }
  }

  setGem(rank: number, gem: string, value: number, force = false) {
    this.gems[`${rank}_${gem}`] = value

    if (force) {
      this.saveData()
    } else {
      this._debouncedSaveData()
    }
  }

  setTalent(element: ElementsType, rank: number, talentType: 'small' | 'big', value: number, force = false) {
    this.talents[`${element}_${rank}_${talentType}`] = value

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
    const paramsData = { ...this.parameters }
    const gemsData = { ...this.gems }
    const talentsData = { ...this.talents }
    const paramsIsEmpty = Object.keys(paramsData).length === 0
    const gemsIsEmpty = Object.keys(gemsData).length === 0
    const talentsIsEmpty = Object.keys(talentsData).length === 0
    this.reset()
    if (!paramsIsEmpty || !gemsIsEmpty || !talentsIsEmpty) {
      try {
        NotificationsHelper.showSavingNotification()
        if (!paramsIsEmpty) {
          await this.queryClient.fetchQuery({
            staleTime: 0,
            queryKey: ['saveParams'],
            queryFn: () =>
              api.parameters.setParameters({
                parameters: paramsData,
              }),
          })
        }
        if (!gemsIsEmpty) {
          await this.queryClient.fetchQuery({
            staleTime: 0,
            queryKey: ['saveGems'],
            queryFn: () =>
              api.parameters.setGems({
                gems: gemsData,
              }),
          })
        }
        if (!talentsIsEmpty) {
          await this.queryClient.fetchQuery({
            staleTime: 0,
            queryKey: ['saveTalents'],
            queryFn: () =>
              api.parameters.setTalents({
                talents: talentsData,
              }),
          })
        }
        this.queryClient.invalidateQueries({
          queryKey: ['parameters'],
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

export default new ParametersQueue()
