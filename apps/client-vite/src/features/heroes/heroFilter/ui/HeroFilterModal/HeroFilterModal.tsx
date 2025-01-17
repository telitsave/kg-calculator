import { FC, memo, useCallback } from 'react'
import { Button, Flex, Modal, MultiSelect, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'
import type { ColumnFiltersState } from '@tanstack/react-table'
import { FormattedMessage, useIntl } from 'react-intl'
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
  simple?: boolean

  onClose: () => void
  onApply: (selectedCheckboxes: ColumnFiltersState) => void
}

const HeroFilterModal: FC<Props> = memo(({ opened, simple, onClose, onApply }) => {
  const intl = useIntl()
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
    [form, onApply, onClose],
  )

  return (
    <Modal opened={opened} onClose={onClose} title={<FormattedMessage defaultMessage="Фильтровать героев" />} centered>
      <form onSubmit={form.onSubmit(handleFormSubmit)} onReset={form.reset}>
        <Stack>
          <MultiSelect
            {...form.getInputProps('element')}
            label={<FormattedMessage defaultMessage="По стихии" />}
            data={filterElementsElement(intl)}
          />
          <MultiSelect
            {...form.getInputProps('rank')}
            label={<FormattedMessage defaultMessage="По рангу" />}
            data={filterElementsRank(intl)}
          />
          <MultiSelect
            {...form.getInputProps('skills')}
            label={<FormattedMessage defaultMessage="По навыкам" />}
            data={filterElementsSkills(intl)}
          />
          {!simple && (
            <MultiSelect
              {...form.getInputProps('stars')}
              label={<FormattedMessage defaultMessage="По звездам" />}
              data={filterElementsStars(intl)}
            />
          )}
          <MultiSelect
            {...form.getInputProps('places')}
            label={<FormattedMessage defaultMessage="По месту получения" />}
            data={filterElementsPlaces(intl)}
          />

          <Flex justify="flex-end" gap="md">
            <Button variant="default" type="reset">
              <FormattedMessage defaultMessage="Сбросить" />
            </Button>
            <Button type="submit">
              <FormattedMessage defaultMessage="Применить" />
            </Button>
          </Flex>
        </Stack>
      </form>
    </Modal>
  )
})

export default HeroFilterModal
