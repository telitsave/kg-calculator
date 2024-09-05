import { FC, memo } from 'react'
import { Accordion, Button, Divider, Flex, Title } from '@mantine/core'
import { SettingPriorityElement, SettingsSwitch } from 'entities/calculationSettings'
import { ResourceInput } from 'entities/resource'
import { ElementIcon } from 'shared/assets/icons'
import { elements } from '../../model/constants'
import InputElement from '../InputElement'


interface Props {
  className?: string

  onCalculateButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ className, onCalculateButtonClick }) => (
  <Flex className={className} direction="column" gap={8}>
    <Flex direction="column" gap={8}>
      <Title order={4}>Мои ресурсы</Title>
      <Flex direction="column" gap={4}>
        <ResourceInput resourceType="gold" />
        <ResourceInput resourceType="barracksResources_random" />
        <ResourceInput resourceType="talentsResources_books" />
        <ResourceInput resourceType="talentsResources_oraclesCrowns" />
      </Flex>
    </Flex>
    <Divider size="sm" />
    <Flex direction="column" gap={8}>
      <Title order={4}>Мои параметры</Title>
      <Accordion className={className} variant="contained">
        {elements.map((element) => (
          <Accordion.Item key={element.key} value={element.key}>
            <Accordion.Control icon={<ElementIcon element={element.key} />}>{element.title}</Accordion.Control>
            <Accordion.Panel>
              <InputElement element={element.key} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Flex>
    <Divider size="sm" />
    <Flex direction="column" gap={8}>
      <Title order={4}>Настройки калькулятора</Title>
      <SettingsSwitch settingsType="canUseRandomBarracksBooks" />
      <SettingsSwitch settingsType="canConvertBarracksBooksToTalents" />
      <SettingsSwitch settingsType="canUseTalentsToNonPriorityElements" />
      <SettingPriorityElement />
    </Flex>
    <Button onClick={onCalculateButtonClick}>Посчитать</Button>
  </Flex>
))

export default Inputs
