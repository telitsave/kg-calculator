import css from './styles.module.sass'
import { Text } from '@mantine/core'
import { ElementIcon, HeroIcon as HeroIconAsset } from '@shared/assets/icons'
import cx from 'classnames'
import type { ElementsType } from 'kg-calculator-typings'
import { FC, memo } from 'react'

interface Props {
  className?: string
  heroId: string
  element: ElementsType
  cards?: number
  small?: boolean
  withIcon?: boolean
  disabled?: boolean
}

const HeroIcon: FC<Props> = memo(
  ({ className, heroId, element, cards = -1, small = false, withIcon = true, disabled = false }) => (
    <div className={cx(css.root, className)}>
      <HeroIconAsset hero={heroId} small={small} disabled={disabled} />
      {withIcon && <ElementIcon className={css.icon} element={element} />}
      {cards >= 0 && <Text className={css.cards}>x{cards}</Text>}
    </div>
  ),
)

export default HeroIcon
