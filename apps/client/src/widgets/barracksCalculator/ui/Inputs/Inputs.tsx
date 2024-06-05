import React, { FC, memo } from 'react'
import { Accordion, Button, Divider, Title } from '@mantine/core'
import { SettingPriorityElement, SettingsSwitch } from 'entities/calculationSettings'
import { ResourceInput } from 'entities/resource'
import { ElementIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import { elements } from '../../model/constants'
import InputElement from '../InputElement'


interface Props {
  className?: string

  onCalculateButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ className, onCalculateButtonClick }) => (
  <Flexbox className={className} flexDirection="column" gap={8}>
    <Flexbox flexDirection="column" gap={8}>
      <Title order={4}>Мои ресурсы</Title>
      <Flexbox flexDirection="column" gap={4}>
        <ResourceInput resourceType="gold" />
        <ResourceInput resourceType="bookRandom" />
        <ResourceInput resourceType="talentBook" />
        <ResourceInput resourceType="talentCrown" />
      </Flexbox>
    </Flexbox>
    <Divider size="sm" />
    <Flexbox flexDirection="column" gap={8}>
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
    </Flexbox>
    <Divider size="sm" />
    <Flexbox flexDirection="column" gap={8}>
      <Title order={4}>Настройки калькулятора</Title>
      <SettingsSwitch settingsType="canUseRandomBarracksBooks" />
      <SettingsSwitch settingsType="canConvertBarracksBooksToTalents" />
      <SettingsSwitch settingsType="canUseTalentsToNonPriorityElements" />
      <SettingPriorityElement />
    </Flexbox>
    <Button onClick={onCalculateButtonClick}>Посчитать</Button>
  </Flexbox>
))

export default Inputs
