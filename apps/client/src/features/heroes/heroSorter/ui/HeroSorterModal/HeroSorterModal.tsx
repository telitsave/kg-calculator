import { FC, memo, useCallback, useState } from 'react'
import { Button, Checkbox, Fieldset, Flex, Modal, Stack } from '@mantine/core'
import type { SortingState } from '@tanstack/react-table'


interface Props {
  className?: string
  opened: boolean
  simple?: boolean

  onClose: () => void
  onApply: (selectedCheckboxes: SortingState) => void
}

const HeroSorterModal: FC<Props> = memo(({ opened, simple = false, onClose, onApply }) => {
  const [checkboxesValues, setCheckboxesValues] = useState<string[]>([])

  const handleApplyButtonClick = useCallback(() => {
    onApply(
      checkboxesValues.map((it) => ({
        id: it,
        desc: it.startsWith('skill_') || ['stars', 'bars', 'cards', 'rank'].includes(it),
      })),
    )
    onClose()
  }, [checkboxesValues, onApply])

  const handleResetButtonClick = useCallback(() => {
    setCheckboxesValues([])
  }, [])

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
            <Fieldset legend="Общие">
              <Stack gap={4}>
                <Checkbox value="name" label={`По имени героя${getSortIndexOfCheckbox('name')}`} />
                <Checkbox value="element" label={`По стихии героя${getSortIndexOfCheckbox('element')}`} />
                <Checkbox value="rank" label={`По рангу героя${getSortIndexOfCheckbox('rank')}`} />
                <Checkbox value="season" label={`По сезону${getSortIndexOfCheckbox('season')}`} />
              </Stack>
            </Fieldset>
            <Fieldset legend="Навыки">
              <Stack gap={4}>
                <Checkbox value="skill_speed" label={`По скорости${getSortIndexOfCheckbox('skill_speed')}`} />
                <Checkbox value="skill_power" label={`По увеличению мощи${getSortIndexOfCheckbox('skill_power')}`} />
                <Checkbox
                  value="skill_heal"
                  label={`По скорости восстановления${getSortIndexOfCheckbox('skill_heal')}`}
                />
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
            </Fieldset>
            {!simple && (
              <Fieldset legend="Прокачка">
                <Stack gap={4}>
                  <Checkbox value="stars" label={`По количеству звезд${getSortIndexOfCheckbox('stars')}`} />
                  <Checkbox value="bars" label={`По количеству полос${getSortIndexOfCheckbox('bars')}`} />
                  <Checkbox value="cards" label={`По количеству карт${getSortIndexOfCheckbox('cards')}`} />
                  <Checkbox value="upgradeBars" label={`До полоски${getSortIndexOfCheckbox('upgradeBars')}`} />
                  <Checkbox value="upgradeStars" label={`До звезды${getSortIndexOfCheckbox('upgradeStars')}`} />
                </Stack>
              </Fieldset>
            )}
          </Stack>
        </Checkbox.Group>
        <Flex justify="flex-end" gap="md">
          <Button variant="default" onClick={handleResetButtonClick}>
            Сбросить
          </Button>
          <Button onClick={handleApplyButtonClick}>Применить</Button>
        </Flex>
      </Stack>
    </Modal>
  )
})

export default HeroSorterModal
