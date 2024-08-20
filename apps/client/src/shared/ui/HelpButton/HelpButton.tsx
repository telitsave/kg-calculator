import React, { FC, ReactNode, memo } from 'react'
import { Popover, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { AiOutlineQuestionCircle } from 'react-icons/ai'


interface Props {
  helpContent: ReactNode
}

const HelpButton: FC<Props> = memo(({ helpContent }) => {
  const [opened, { close, open }] = useDisclosure(false)
  return (
    <Popover width={300} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <UnstyledButton onMouseEnter={open} onMouseLeave={close} tabIndex={-1}>
          <AiOutlineQuestionCircle />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>{helpContent}</Popover.Dropdown>
    </Popover>
  )
})

export default HelpButton
