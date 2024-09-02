import { FC, forwardRef, memo, useMemo } from 'react'
import cx from 'classnames'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  className?: string
  level: number
  step: number
}

const GalleryIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, level, step }, ref) => {
    const stepsCount = level < 6 ? 4 : level < 16 ? 9 : level < 26 ? 16 : 25
    const stepsNodes = useMemo(
      () => (
        <>
          {Array.from({ length: stepsCount }).map((_, index) => (
            <div
              key={index}
              className={cx(css.step, {
                [css.active]: index < step,
              })}
            />
          ))}
        </>
      ),
      [step, stepsCount],
    )
    return (
      <Flexbox
        className={cx(css.background, className, css[`level-${level}`])}
        justifyContent="center"
        alignItems="center"
        ref={ref}
      >
        {stepsNodes}
      </Flexbox>
    )
  }),
)

export default GalleryIcon
