import React, { FC, memo } from 'react'
import { Divider, Text, Title } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import { BarracksElementalInput, BarracksTalentsInput, ParameterIcon } from 'entities/parameter'
import Flexbox from 'shared/ui/Flexbox'
import HelpButton from 'shared/ui/HelpButton'


interface Props {
  element: ElementsType
}

const HelpNode = () => (
  <Flexbox flexDirection="column">
    <Text>Для каждого ранга нужно указать количество заполненных атрибутов.</Text>
    <Text>Максимальные значения в каждом ранге:</Text>
    <Flexbox alignItems="center">
      <ParameterIcon parameterType="talentBooks" />
      <Text>- 48</Text>
    </Flexbox>
    <Flexbox alignItems="center">
      <ParameterIcon parameterType="talentCrowns" />
      <Text>- 6</Text>
    </Flexbox>
  </Flexbox>
)

const InputElementOnlyParams: FC<Props> = memo(({ element }) => (
  <Flexbox flexDirection="column" gap={16}>
    <BarracksElementalInput element={element} />
    <Divider size="sm" />
    <Flexbox gap={4} alignItems="center">
      <Title order={5}>Параметры талантов</Title>
      <HelpButton helpContent={<HelpNode />} />
    </Flexbox>
    <BarracksTalentsInput element={element} />
  </Flexbox>
))

export default InputElementOnlyParams
