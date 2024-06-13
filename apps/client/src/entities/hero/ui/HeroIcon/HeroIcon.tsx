import React, { FC, memo } from 'react'
import cx from 'classnames'
import type { ElementsType } from 'kg-calculator-typings'
import { ElementIcon, HeroIcon as HeroIconAsset } from 'shared/assets/icons'
import css from './styles.module.sass'


interface Props {
  className?: string
  heroId: string
  element: ElementsType
}

const HeroIcon: FC<Props> = memo(({ className, heroId, element }) => (
  <div className={cx(css.root, className)}>
    <HeroIconAsset hero={heroId} />
    <ElementIcon className={css.icon} element={element} />
  </div>
))

export default HeroIcon
