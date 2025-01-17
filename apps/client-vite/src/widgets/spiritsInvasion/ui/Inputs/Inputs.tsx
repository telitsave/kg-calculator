import { FC, memo, useCallback } from 'react'
import { Button, Fieldset, NumberInput } from '@mantine/core'
import { useInputState } from '@mantine/hooks'
import { FormattedMessage } from 'react-intl'


interface Props {
  className?: string

  onClickShow: (level: number, membersCount: number) => void
}

const Inputs: FC<Props> = memo(({ className, onClickShow }) => {
  const [level, setLevel] = useInputState<number | string>(1)
  const [membersCount, setMembersCount] = useInputState<number | string>(1)

  const handleButtonClick = useCallback(() => {
    onClickShow(Number(level), Number(membersCount))
  }, [level, membersCount, onClickShow])

  return (
    <Fieldset className={className} legend={<FormattedMessage defaultMessage="Параметры злых духов" />} miw={300}>
      <NumberInput
        label={<FormattedMessage defaultMessage="Уровень" />}
        placeholder="От 1 до 300"
        min={1}
        max={300}
        value={level}
        onChange={setLevel}
        clampBehavior="strict"
      />
      <NumberInput
        label={<FormattedMessage defaultMessage="Количество игроков в альянсе" />}
        placeholder="От 1 до 130"
        min={1}
        max={130}
        mt="md"
        value={membersCount}
        onChange={setMembersCount}
        clampBehavior="strict"
      />
      <Button mt="md" onClick={handleButtonClick}>
        <FormattedMessage defaultMessage="Показать" />
      </Button>
    </Fieldset>
  )
})

export default Inputs
