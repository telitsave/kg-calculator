import { FC, memo, useCallback } from 'react'
import { Button, Flex, Modal, MultiSelect, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'
import type { ColumnFiltersState } from '@tanstack/react-table'
import {
  filterElementsElement,
  filterElementsPlaces,
  filterElementsRank,
  filterElementsSkills,
  filterElementsStars,
} from '../../model/constants'

interface Props {
  className?: string
  opened: boolean

  onClose: () => void
  onApply: (selectedCheckboxes: ColumnFiltersState) => void
}

const HeroFilterModal: FC<Props> = memo(({ opened, onClose, onApply }) => {
  const form = useForm<{ element: string[]; skills: string[]; rank: string[]; stars: string[]; places: string[] }>({
    mode: 'controlled',
    initialValues: {
      element: ['bow', 'fire', 'ice', 'poison'],
      rank: ['n', 'r', 'sr', 'ssr'],
      skills: [],
      stars: ['0', '1', '2', '3', '4', '5'],
      places: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    },
  })

  const handleFormSubmit = useCallback(
    (values: typeof form.values) => {
      const filterValues: ColumnFiltersState = []
      filterValues.push({
        id: 'element',
        value: values.element,
      })

      filterValues.push({
        id: 'rank',
        value: values.rank,
      })

      values.skills.forEach((skillId) => {
        filterValues.push({
          id: skillId,
          value: 0,
        })
      })

      filterValues.push({
        id: 'stars',
        value: values.stars.map(Number),
      })

      filterValues.push({
        id: 'places',
        value: values.places.map(Number),
      })

      onApply(filterValues)
      onClose()
    },
    [onApply],
  )

  return (
    <Modal opened={opened} onClose={onClose} title="Фильтровать героев" centered>
      <form onSubmit={form.onSubmit(handleFormSubmit)} onReset={form.reset}>
        <Stack>
          <MultiSelect {...form.getInputProps('element')} label="По стихии" data={filterElementsElement} />
          <MultiSelect {...form.getInputProps('rank')} label="По рангу" data={filterElementsRank} />
          <MultiSelect {...form.getInputProps('skills')} label="По навыкам" data={filterElementsSkills} />
          <MultiSelect {...form.getInputProps('stars')} label="По звездам" data={filterElementsStars} />
          <MultiSelect {...form.getInputProps('places')} label="По месту получения" data={filterElementsPlaces} />

          <Flex justify="flex-end" gap="md">
            <Button variant="default" type="reset">
              Сбросить
            </Button>
            <Button type="submit">Применить</Button>
          </Flex>
        </Stack>
      </form>
    </Modal>
  )
})

export default HeroFilterModal
