import { FC, memo } from 'react'
import cx from 'classnames'
import { GalleryCalculator } from 'widgets/galleryCalculator'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const GalleryPage: FC<Props> = memo(({ className }) => {
  return <GalleryCalculator className={cx(css.root, className)} />
})

export default GalleryPage
