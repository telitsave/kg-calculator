import type { QueryClient } from '@tanstack/react-query'
import type { HeroesParams, IHeroData } from 'kg-calculator-typings'
import { debounce } from 'lodash'
import type { IntlShape } from 'react-intl'
import api from '@shared/api'
import NotificationsHelper from '@shared/helpers/notificationsHelper'


class HeroesQueue {
  intl: IntlShape | undefined
  heroesParams: HeroesParams = {}
  queryClient?: QueryClient

  reset() {
    this.heroesParams = {}
  }

  setHero(heroId: string, value: Partial<IHeroData> & { id: string }, force = false) {
    this.heroesParams[heroId] = {
      id: value.id,
      stars: value.stars || 0,
      bars: value.bars || 0,
      cards: value.cards || 0,
      distributionCards: value.distributionCards || 0,
    }
    this.queryClient?.setQueryData(['heroesParams'], (val: HeroesParams) => {
      return {
        ...val,
        [heroId]: value,
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
    const dataForSave = { ...this.heroesParams }
    this.reset()
    if (Object.keys(dataForSave).length > 0) {
      try {
        NotificationsHelper.showSavingNotification(this.intl)
        await this.queryClient.fetchQuery({
          staleTime: 0,
          queryKey: ['saveHeroes'],
          queryFn: () =>
            api.heroes.setHeroesParams({
              heroesParams: dataForSave,
            }),
        })
        this.queryClient.invalidateQueries({
          queryKey: ['mightiestKingdomTotal'],
        })
        this.queryClient.invalidateQueries({
          queryKey: ['ultimatePowerTotal'],
        })
        this.queryClient.invalidateQueries({
          queryKey: ['heroesTable'],
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

export default new HeroesQueue()
