import React, { FC, memo } from 'react'
import cx from 'classnames'
import { Text } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import { ElementIcon, HeroIcon as HeroIconAsset } from 'shared/assets/icons'
import css from './styles.module.sass'


interface Props {
  className?: string
  heroId: string
  element: ElementsType
  cards?: number
}

const HeroIcon: FC<Props> = memo(({ className, heroId, element, cards = -1 }) => (
  <div className={cx(css.root, className)}>
    <HeroIconAsset hero={heroId} />
    <ElementIcon className={css.icon} element={element} />
    {cards >= 0 && <Text className={css.cards}>x{cards}</Text>}
  </div>
))

export default HeroIcon
