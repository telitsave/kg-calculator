import { FC, memo, useCallback } from 'react'
import { NumberInput } from '@mantine/core'
import { GalleryIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import useParameter from '../../model/hooks/useParameter'

interface Props {
  className?: string
}

const GalleryInput: FC<Props> = memo(({ className }) => {
  const [level, setLevel] = useParameter('galleryLevel', 1)
  const [step, setStep] = useParameter('galleryStep')

  const stepsCount = level < 6 ? 4 : level < 16 ? 9 : level < 26 ? 16 : 25

  const handleLevelInputChange = useCallback(
    (value: string | number) => {
      setLevel(parseInt(value.toString(), 10))
    },
    [setLevel],
  )
  const handleStepsInputChange = useCallback(
    (value: string | number) => {
      setStep(parseInt(value.toString(), 10))
    },
    [setStep],
  )

  return (
    <Flexbox className={className} flexDirection="column" gap={8} alignItems="flex-start">
      <GalleryIcon level={level || 1} step={step} />
      <NumberInput
        label="Уровень галереи"
        min={1}
        max={30}
        defaultValue={1}
        value={level}
        onChange={handleLevelInputChange}
      />
      <NumberInput label="Открыто осколков" min={0} max={stepsCount} value={step} onChange={handleStepsInputChange} />
    </Flexbox>
  )
})

export default GalleryInput
