import { FC, memo, useCallback, useState } from 'react'
import { Button, Checkbox, Fieldset, Flex, Modal, Stack } from '@mantine/core'
import type { SortingState } from '@tanstack/react-table'
import { FormattedMessage } from 'react-intl'


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
  }, [checkboxesValues, onApply, onClose])

  const handleResetButtonClick = useCallback(() => {
    setCheckboxesValues([])
  }, [])

  const getSortIndexOfCheckbox = (name: string) => {
    const index = checkboxesValues.indexOf(name)
    if (index === -1) return ''

    return ` (${index + 1})`
  }

  return (
    <Modal opened={opened} onClose={onClose} title={<FormattedMessage defaultMessage="Сортировать героев" />} centered>
      <Stack>
        <Checkbox.Group value={checkboxesValues} onChange={setCheckboxesValues}>
          <Stack>
            <Fieldset legend={<FormattedMessage defaultMessage="Общие" />}>
              <Stack gap={4}>
                <Checkbox
                  value="name"
                  label={
                    <FormattedMessage
                      defaultMessage="По имени героя{index}"
                      values={{ index: getSortIndexOfCheckbox('name') }}
                    />
                  }
                />
                <Checkbox
                  value="element"
                  label={
                    <FormattedMessage
                      defaultMessage="По стихии героя{index}"
                      values={{ index: getSortIndexOfCheckbox('element') }}
                    />
                  }
                />
                <Checkbox
                  value="rank"
                  label={
                    <FormattedMessage
                      defaultMessage="По рангу героя{index}"
                      values={{ index: getSortIndexOfCheckbox('rank') }}
                    />
                  }
                />
                <Checkbox
                  value="season"
                  label={
                    <FormattedMessage
                      defaultMessage="По сезону{index}"
                      values={{ index: getSortIndexOfCheckbox('season') }}
                    />
                  }
                />
              </Stack>
            </Fieldset>
            <Fieldset legend={<FormattedMessage defaultMessage="Навыки" />}>
              <Stack gap={4}>
                <Checkbox
                  value="skill_speed"
                  label={
                    <FormattedMessage
                      defaultMessage="По скорости{index}"
                      values={{ index: getSortIndexOfCheckbox('skill_speed') }}
                    />
                  }
                />
                <Checkbox
                  value="skill_power"
                  label={
                    <FormattedMessage
                      defaultMessage="По увеличению мощи{index}"
                      values={{ index: getSortIndexOfCheckbox('skill_power') }}
                    />
                  }
                />
                <Checkbox
                  value="skill_heal"
                  label={
                    <FormattedMessage
                      defaultMessage="По скорости восстановления{index}"
                      values={{ index: getSortIndexOfCheckbox('skill_heal') }}
                    />
                  }
                />
                <Checkbox
                  value="skill_regeneration"
                  label={
                    <FormattedMessage
                      defaultMessage="По силе регенерации{index}"
                      values={{ index: getSortIndexOfCheckbox('skill_regeneration') }}
                    />
                  }
                />
                <Checkbox
                  value="skill_actionPoints"
                  label={
                    <FormattedMessage
                      defaultMessage="По сокращению ОД{index}"
                      values={{ index: getSortIndexOfCheckbox('skill_actionPoints') }}
                    />
                  }
                />
                <Checkbox
                  value="skill_weight"
                  label={
                    <FormattedMessage
                      defaultMessage="По увеличению грузоподъемности{index}"
                      values={{ index: getSortIndexOfCheckbox('skill_weight') }}
                    />
                  }
                />
                <Checkbox
                  value="skill_offlineGold"
                  label={
                    <FormattedMessage
                      defaultMessage="По увеличению дохода золота оффлайн{index}"
                      values={{ index: getSortIndexOfCheckbox('skill_offlineGold') }}
                    />
                  }
                />
                <Checkbox
                  value="skill_collectGold"
                  label={
                    <FormattedMessage
                      defaultMessage="По увеличению скорости сбора золота{index}"
                      values={{ index: getSortIndexOfCheckbox('skill_collectGold') }}
                    />
                  }
                />
              </Stack>
            </Fieldset>
            {!simple && (
              <Fieldset legend={<FormattedMessage defaultMessage="Прокачка" />}>
                <Stack gap={4}>
                  <Checkbox
                    value="stars"
                    label={
                      <FormattedMessage
                        defaultMessage="По количеству звезд{index}"
                        values={{ index: getSortIndexOfCheckbox('stars') }}
                      />
                    }
                  />
                  <Checkbox
                    value="bars"
                    label={
                      <FormattedMessage
                        defaultMessage="По количеству полос{index}"
                        values={{ index: getSortIndexOfCheckbox('bars') }}
                      />
                    }
                  />
                  <Checkbox
                    value="cards"
                    label={
                      <FormattedMessage
                        defaultMessage="По количеству карт{index}"
                        values={{ index: getSortIndexOfCheckbox('cards') }}
                      />
                    }
                  />
                  <Checkbox
                    value="upgradeBars"
                    label={
                      <FormattedMessage
                        defaultMessage="До полоски{index}"
                        values={{ index: getSortIndexOfCheckbox('upgradeBars') }}
                      />
                    }
                  />
                  <Checkbox
                    value="upgradeStars"
                    label={
                      <FormattedMessage
                        defaultMessage="До звезды{index}"
                        values={{ index: getSortIndexOfCheckbox('upgradeStars') }}
                      />
                    }
                  />
                </Stack>
              </Fieldset>
            )}
          </Stack>
        </Checkbox.Group>
        <Flex justify="flex-end" gap="md">
          <Button variant="default" onClick={handleResetButtonClick}>
            <FormattedMessage defaultMessage="Сбросить" />
          </Button>
          <Button onClick={handleApplyButtonClick}>
            <FormattedMessage defaultMessage="Применить" />
          </Button>
        </Flex>
      </Stack>
    </Modal>
  )
})

export default HeroSorterModal
