import type { ReactNode } from 'react'
import type { ElementsType } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'


export const elements: { key: ElementsType; title: ReactNode }[] = [
  {
    key: 'bow',
    title: <FormattedMessage defaultMessage="Лучницы" />,
  },
  {
    key: 'fire',
    title: <FormattedMessage defaultMessage="Огненные маги" />,
  },
  {
    key: 'ice',
    title: <FormattedMessage defaultMessage="Ледяные колдуньи" />,
  },
  {
    key: 'poison',
    title: <FormattedMessage defaultMessage="Гоблины" />,
  },
]
