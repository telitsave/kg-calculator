import { FC, memo } from 'react'
import { Divider, Text, Title } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import { BarracksElementalInput, BarracksTalentsInput, ParameterIcon } from 'entities/parameter'
import { KeysHelper, ResourceInput } from 'entities/resource'
import { useServerSettings } from 'entities/serverSettings'
import Flexbox from 'shared/ui/Flexbox'
import HelpButton from 'shared/ui/HelpButton'

interface Props {
  className?: string
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

const InputElement: FC<Props> = memo(({ element }) => {
  const { serverSettings } = useServerSettings()

  return (
    <Flexbox flexDirection="column" gap={16}>
      <BarracksElementalInput element={element} />
      <Divider size="sm" />
      <Flexbox gap={4} alignItems="center">
        <Title order={5}>Параметры талантов</Title>
        <HelpButton helpContent={<HelpNode />} />
      </Flexbox>
      <BarracksTalentsInput element={element} maxRank={serverSettings?.talentsMaxRank || 1} />
      <Divider size="sm" />
      <Title order={5}>Ресурсы</Title>
      <Flexbox flexWrap="wrap" gap={8} justifyContent="space-between">
        <ResourceInput resourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 1)} />
        <ResourceInput resourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 2)} />
        <ResourceInput resourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 3)} />
        <ResourceInput resourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 4)} />
      </Flexbox>
    </Flexbox>
  )
})

export default InputElement
