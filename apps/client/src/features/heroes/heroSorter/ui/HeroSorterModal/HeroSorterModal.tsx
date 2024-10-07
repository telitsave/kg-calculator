import { FC, memo, useCallback, useState } from 'react'
import { Button, Checkbox, Flex, Modal, Stack, Title } from '@mantine/core'
import type { SortingState } from '@tanstack/react-table'


interface Props {
  className?: string
  opened: boolean

  onClose: () => void
  onApply: (selectedCheckboxes: SortingState) => void
}

const HeroSorterModal: FC<Props> = memo(({ opened, onClose, onApply }) => {
  const [checkboxesValues, setCheckboxesValues] = useState<string[]>([])

  const handleApplyButtonClick = useCallback(() => {
    onApply(
      checkboxesValues.map((it) => ({
        id: it,
        desc: it.startsWith('skill_'),
      })),
    )
    onClose()
  }, [checkboxesValues, onApply])

  const getSortIndexOfCheckbox = (name: string) => {
    const index = checkboxesValues.indexOf(name)
    if (index === -1) return ''

    return ` (${index + 1})`
  }

  return (
    <Modal opened={opened} onClose={onClose} title="Сортировать героев" centered>
      <Stack>
        <Checkbox.Group value={checkboxesValues} onChange={setCheckboxesValues}>
          <Stack>
            <Title order={5}>Общие</Title>
            <Checkbox value="name" label={`По имени героя${getSortIndexOfCheckbox('name')}`} />
            <Checkbox value="element" label={`По стихии героя${getSortIndexOfCheckbox('element')}`} />
            <Title order={5}>Навыки</Title>
            <Checkbox value="skill_speed" label={`По скорости${getSortIndexOfCheckbox('skill_speed')}`} />
            <Checkbox value="skill_power" label={`По увеличению мощи${getSortIndexOfCheckbox('skill_power')}`} />
            <Checkbox value="skill_heal" label={`По скорости восстановления${getSortIndexOfCheckbox('skill_heal')}`} />
            <Checkbox
              value="skill_regeneration"
              label={`По силе регенерации${getSortIndexOfCheckbox('skill_regeneration')}`}
            />
            <Checkbox
              value="skill_actionPoints"
              label={`По сокращению ОД${getSortIndexOfCheckbox('skill_actionPoints')}`}
            />
            <Checkbox
              value="skill_weight"
              label={`По увеличению грузоподъемности${getSortIndexOfCheckbox('skill_weight')}`}
            />
            <Checkbox
              value="skill_offlineGold"
              label={`По увеличению дохода золота оффлайн${getSortIndexOfCheckbox('skill_offlineGold')}`}
            />
            <Checkbox
              value="skill_collectGold"
              label={`По увеличению скорости сбора золота${getSortIndexOfCheckbox('skill_collectGold')}`}
            />
          </Stack>
        </Checkbox.Group>
        <Flex justify="flex-end">
          <Button onClick={handleApplyButtonClick}>Применить</Button>
        </Flex>
      </Stack>
    </Modal>
  )
})

export default HeroSorterModal
