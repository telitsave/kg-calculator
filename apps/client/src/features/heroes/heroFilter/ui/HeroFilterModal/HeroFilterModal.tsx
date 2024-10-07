import { FC, memo, useCallback } from 'react'
import { Button, Flex, Modal, MultiSelect, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'
import type { ColumnFiltersState } from '@tanstack/react-table'


interface Props {
  className?: string
  opened: boolean

  onClose: () => void
  onApply: (selectedCheckboxes: ColumnFiltersState) => void
}

const HeroFilterModal: FC<Props> = memo(({ opened, onClose, onApply }) => {
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      element: [],
    },
  })

  const handleFormSubmit = useCallback(
    (values: typeof form.values) => {
      onApply([
        {
          id: 'element',
          value: values.element,
        },
      ])
      onClose()
    },
    [onApply],
  )

  return (
    <Modal opened={opened} onClose={onClose} title="Фильтровать героев" centered>
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Stack>
          <MultiSelect
            {...form.getInputProps('element')}
            label="По стихии"
            data={[
              {
                value: 'bow',
                label: 'Лучники',
              },
              {
                value: 'fire',
                label: 'Огонь',
              },
              {
                value: 'ice',
                label: 'Лед',
              },
              {
                value: 'poison',
                label: 'Гоблины',
              },
            ]}
          />
          <Flex justify="flex-end">
            <Button type="submit">Применить</Button>
          </Flex>
        </Stack>
      </form>
    </Modal>
  )
})

export default HeroFilterModal
