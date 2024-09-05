import { FC, memo } from 'react'
import { Button, Divider, Title } from '@mantine/core'
import { ParameterInput } from 'entities/parameter'
import { ResourceInput } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'


interface Props {
  className?: string

  onCalculateButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ className, onCalculateButtonClick }) => (
  <Flexbox className={className} flexDirection="column" gap={8}>
    <Flexbox flexDirection="column" gap={8}>
      <Title order={4}>Мои ресурсы</Title>
      <ResourceInput resourceType="blacksmithResources_hammers" />
    </Flexbox>

    <Divider size="xs" />

    <Flexbox flexDirection="column" gap={8}>
      <Title order={4}>Мои параметры</Title>
      <ParameterInput parameterType="blacksmithParams_level" />
    </Flexbox>

    <Button onClick={onCalculateButtonClick}>Посчитать</Button>
  </Flexbox>
))

export default Inputs
