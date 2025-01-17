import type { QueryClient } from '@tanstack/react-query'
import type { ElementsType, GetAllParametersResponse, ParameterTypes, Parameters } from 'kg-calculator-typings'
import { debounce } from 'lodash'
import type { IntlShape } from 'react-intl'
import api from '@shared/api'
import NotificationsHelper from '@shared/helpers/notificationsHelper'


class ParametersQueue {
  intl: IntlShape | undefined
  parameters: Parameters = {}
  gems: Record<string, number> = {}
  talents: Record<string, number | undefined> = {}
  queryClient?: QueryClient

  reset() {
    this.parameters = {}
    this.gems = {}
    this.talents = {}
  }

  setParameter(parameterType: ParameterTypes, value: number | string, force = false) {
    this.parameters[parameterType] = Number(value) || 0
    this.queryClient?.setQueryData(['parameters'], (val: GetAllParametersResponse): GetAllParametersResponse => {
      return {
        ...val,
        params: {
          ...val.params,
          [parameterType]: value as number,
        },
      }
    })

    if (force) {
      this.saveData()
    } else {
      this._debouncedSaveData()
    }
  }

  setGem(rank: number, gem: string, value: number | string, force = false) {
    this.gems[`${rank}_${gem}`] = Number(value) || 0
    this.queryClient?.setQueryData(['parameters'], (val: GetAllParametersResponse): GetAllParametersResponse => {
      return {
        ...val,
        gems: {
          ...val.gems,
          [`${rank}_${gem}`]: value as number,
        },
      }
    })

    if (force) {
      this.saveData()
    } else {
      this._debouncedSaveData()
    }
  }

  setTalent(element: ElementsType, rank: number, talentType: 'small' | 'big', value: string | number, force = false) {
    this.talents[`${element}_${rank}_${talentType}`] = Number(value) || 0
    this.queryClient?.setQueryData(['parameters'], (val: GetAllParametersResponse): GetAllParametersResponse => {
      return {
        ...val,
        talents: {
          ...val.talents,
          [`${element}_${rank}_${talentType}`]: value as number,
        },
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
    const paramsData = { ...this.parameters }
    const gemsData = { ...this.gems }
    const talentsData = { ...this.talents }
    const paramsIsEmpty = Object.keys(paramsData).length === 0
    const gemsIsEmpty = Object.keys(gemsData).length === 0
    const talentsIsEmpty = Object.keys(talentsData).length === 0
    this.reset()
    if (!paramsIsEmpty || !gemsIsEmpty || !talentsIsEmpty) {
      try {
        NotificationsHelper.showSavingNotification(this.intl)
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

export default new ParametersQueue()
