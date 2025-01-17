import { FC, memo } from 'react'
import { Divider, Text, Title } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import { FormattedMessage } from 'react-intl'
import { BarracksElementalInput, BarracksTalentsInput, ParameterIcon } from '@entities/parameter'
import { KeysHelper, ResourceInput } from '@entities/resource'
import { useServerSettings } from '@entities/serverSettings'
import Flexbox from '@shared/ui/Flexbox'
import HelpButton from '@shared/ui/HelpButton'


interface Props {
  className?: string
  element: ElementsType
}

const HelpNode = () => (
  <Flexbox flexDirection="column">
    <Text>
      <FormattedMessage defaultMessage="Для каждого ранга нужно указать количество заполненных атрибутов." />
    </Text>
    <Text>
      <FormattedMessage defaultMessage="Максимальные значения в каждом ранге:" />
    </Text>
    <Flexbox alignItems="center">
      <ParameterIcon parameterType="talentParams_books" />
      <Text>- 48</Text>
    </Flexbox>
    <Flexbox alignItems="center">
      <ParameterIcon parameterType="talentParams_crowns" />
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
        <Title order={5}>
          <FormattedMessage defaultMessage="Параметры талантов" />
        </Title>
        <HelpButton helpContent={<HelpNode />} />
      </Flexbox>
      <BarracksTalentsInput element={element} maxRank={serverSettings?.talentsMaxRank || 1} />
      <Divider size="sm" />
      <Title order={5}>
        <FormattedMessage defaultMessage="Ресурсы" />
      </Title>
      <Flexbox flexWrap="wrap" gap={8} justifyContent="space-between">
        <ResourceInput resourceType={KeysHelper.getBaracksKey(element, 1)} />
        <ResourceInput resourceType={KeysHelper.getBaracksKey(element, 2)} />
        <ResourceInput resourceType={KeysHelper.getBaracksKey(element, 3)} />
        <ResourceInput resourceType={KeysHelper.getBaracksKey(element, 4)} />
      </Flexbox>
    </Flexbox>
  )
})

export default InputElement
