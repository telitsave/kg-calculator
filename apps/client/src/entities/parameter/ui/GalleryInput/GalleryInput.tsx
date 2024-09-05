import { FC, memo, useCallback, useEffect, useState } from 'react'
import { NumberInput } from '@mantine/core'
import { GalleryIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import useParameter from '../../model/hooks/useParameter'


interface Props {
  className?: string
}

const GalleryInput: FC<Props> = memo(({ className }) => {
  const [level = 1, setLevel] = useParameter('galleryParams_level')
  const [step = 0, setStep] = useParameter('galleryParams_step')
  const [levelState, setLevelState] = useState(level)
  const [stepState, setStepState] = useState(step)

  const stepsCount = level < 6 ? 4 : level < 16 ? 9 : level < 26 ? 16 : 25

  const handleLevelInputChange = useCallback(
    (value: string | number) => {
      setLevel(parseInt(value.toString(), 10))
      setLevelState(parseInt(value.toString(), 10))
    },
    [setLevel],
  )
  const handleStepsInputChange = useCallback(
    (value: string | number) => {
      setStep(parseInt(value.toString(), 10))
      setStepState(parseInt(value.toString(), 10))
    },
    [setStep],
  )

  useEffect(() => {
    if (level) {
      setLevelState(level)
    }
    if (step) {
      setStepState(step)
    }
  }, [level, step])

  return (
    <Flexbox className={className} flexDirection="column" gap={8} alignItems="flex-start">
      <GalleryIcon level={levelState || 1} step={stepState} />
      <NumberInput
        label="Уровень галереи"
        min={1}
        max={30}
        defaultValue={1}
        value={levelState}
        onChange={handleLevelInputChange}
      />
      <NumberInput
        label="Открыто осколков"
        min={0}
        max={stepsCount}
        value={stepState}
        onChange={handleStepsInputChange}
      />
    </Flexbox>
  )
})

export default GalleryInput
