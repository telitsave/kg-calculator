import { FC, memo, useCallback } from 'react'
import cx from 'classnames'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { ExtremePowerStatistics } from 'widgets/extremePowerStatistics'
import { GalleryCalculator } from 'widgets/galleryCalculator'
import { MightiestKingdomStatistics } from 'widgets/mightiestKingdomStatistics'
import css from './styles.module.sass'

interface Props {
  className?: string
}

const GalleryPage: FC<Props> = memo(({ className }) => {
  const getExtremePowerNode = useCallback(
    (spentResources: ResourcesData) => <ExtremePowerStatistics spentResources={spentResources} />,
    [],
  )
  const getMightiestKingdomNode = useCallback(
    (spentResources: ResourcesData) => <MightiestKingdomStatistics spentResources={spentResources} />,
    [],
  )
  return (
    <GalleryCalculator
      className={cx(css.root, className)}
      getExtremePowerNode={getExtremePowerNode}
      getMightiestKingdomNode={getMightiestKingdomNode}
    />
  )
})

export default GalleryPage
