import type { ReactNode } from 'react'
import type { CustomServerSettingsData } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'


export const settingsNames: Partial<Record<keyof CustomServerSettingsData, ReactNode>> = {
  enabledCustomServerSettings: <FormattedMessage defaultMessage="Использовать нестандартные настройки" />,
  season: <FormattedMessage defaultMessage="Текущий сезон" />,
  talentsMaxRank: <FormattedMessage defaultMessage="Последний открытый ранг талантов в казарме" />,
  witchGemsMaxRank: <FormattedMessage defaultMessage="Последний открытый ранг камней ведьмы" />,
  talentBooks_rank1: <FormattedMessage defaultMessage="Книг талантов за 1 книгу бойцов 1 ранга" />,
  talentBooks_rank2: <FormattedMessage defaultMessage="Книг талантов за 1 книгу бойцов 2 ранга" />,
  talentBooks_rank3: <FormattedMessage defaultMessage="Книг талантов за 1 книгу бойцов 3 ранга" />,
  talentBooks_rank4: <FormattedMessage defaultMessage="Книг талантов за 1 книгу бойцов 4 ранга" />,
}
