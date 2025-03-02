import { FC, memo, useCallback } from 'react'
import { NumberInput } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { GalleryIcon } from '@shared/assets/icons'
import Flexbox from '@shared/ui/Flexbox'
import useParameter from '../../model/hooks/useParameter'


interface Props {
  className?: string
}

const GalleryInput: FC<Props> = memo(({ className }) => {
  const [level = 1, setLevel] = useParameter('galleryParams_level')
  const [step = 0, setStep] = useParameter('galleryParams_step')

  const stepsCount = level < 6 ? 4 : level < 16 ? 9 : level < 26 ? 16 : 25

  const handleLevelInputChange = useCallback(
    (value: string | number) => {
      setLevel(value)
    },
    [setLevel],
  )
  const handleStepsInputChange = useCallback(
    (value: string | number) => {
      setStep(value)
    },
    [setStep],
  )

  return (
    <Flexbox className={className} flexDirection="column" gap={8} alignItems="flex-start">
      <GalleryIcon level={level || 1} step={step} />
      <NumberInput
        label={<FormattedMessage defaultMessage="Уровень галереи" />}
        min={1}
        max={30}
        defaultValue={1}
        value={level}
        onChange={handleLevelInputChange}
        clampBehavior="strict"
      />
      <NumberInput
        label={<FormattedMessage defaultMessage="Открыто осколков" />}
        min={0}
        max={level === 30 ? stepsCount : stepsCount - 1}
        value={step}
        onChange={handleStepsInputChange}
        clampBehavior="strict"
      />
    </Flexbox>
  )
})

export default GalleryInput
