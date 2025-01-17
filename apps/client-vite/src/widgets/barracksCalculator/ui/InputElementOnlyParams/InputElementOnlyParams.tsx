import { FC, memo } from 'react'
import { Divider, Text, Title } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import { FormattedMessage } from 'react-intl'
import { BarracksElementalInput, BarracksTalentsInput, ParameterIcon } from '@entities/parameter'
import { useServerSettings } from '@entities/serverSettings'
import Flexbox from '@shared/ui/Flexbox'
import HelpButton from '@shared/ui/HelpButton'


interface Props {
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

const InputElementOnlyParams: FC<Props> = memo(({ element }) => {
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
    </Flexbox>
  )
})

export default InputElementOnlyParams
