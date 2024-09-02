import { FC, memo, useCallback } from 'react'
import { Button, Fieldset, NumberInput } from '@mantine/core'
import { useInputState } from '@mantine/hooks'

interface Props {
  className?: string

  onClickShow: (level: number, membersCount: number) => void
}

const Inputs: FC<Props> = memo(({ className, onClickShow }) => {
  const [level, setLevel] = useInputState<number | string>(1)
  const [membersCount, setMembersCount] = useInputState<number | string>(1)

  const handleButtonClick = useCallback(() => {
    onClickShow(Number(level), Number(membersCount))
  }, [level, membersCount])

  return (
    <Fieldset className={className} legend="Параметры злых духов" miw={300}>
      <NumberInput label="Уровень" placeholder="От 1 до 300" min={1} max={300} value={level} onChange={setLevel} />
      <NumberInput
        label="Количество игроков в альянсе"
        placeholder="От 1 до 130"
        min={1}
        max={130}
        mt="md"
        value={membersCount}
        onChange={setMembersCount}
      />
      <Button mt="md" onClick={handleButtonClick}>
        Показать
      </Button>
    </Fieldset>
  )
})

export default Inputs
