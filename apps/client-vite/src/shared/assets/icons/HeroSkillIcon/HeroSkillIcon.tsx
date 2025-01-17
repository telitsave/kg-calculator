import css from './styles.module.sass'
import Flexbox from '@shared/ui/Flexbox'
import cx from 'classnames'
import { FC, forwardRef, memo } from 'react'

interface Props {
  className?: string
  skillId: number
  disabled?: boolean
}

const HeroSkillIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, skillId, disabled = false }, ref) => {
    let bgId = 0
    switch (skillId) {
      case 1:
      case 3:
      case 4:
      case 6:
        bgId = 1
        break
      case 2:
        bgId = 2
        break
      case 5:
        bgId = 3
        break
      case 7:
      case 9:
      case 10:
      case 11:
        bgId = 4
        break
      case 8:
        bgId = 5
        break
    }
    let cornerId = 0
    switch (skillId) {
      case 1:
        cornerId = 1
        break
      case 3:
      case 7:
      case 10:
      case 11:
        cornerId = 2
        break
      case 4:
        cornerId = 3
        break
      case 6:
        cornerId = 4
        break
      case 9:
        cornerId = 5
        break
    }
    return (
      <Flexbox
        className={cx(css.background, className, css[`id_${bgId}`], { [css.disabled]: disabled })}
        justifyContent="center"
        alignItems="center"
        ref={ref}
      >
        <div className={cx(css.icon, css[`corner_${cornerId}`])} />
      </Flexbox>
    )
  }),
)

export default HeroSkillIcon
