import { FC, memo } from 'react'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import LoginModal from '../LoginModal/LoginModal'

interface Props {
  className?: string
}

const LoginButton: FC<Props> = memo(({ className }) => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <>
      <Button className={className} variant="default" onClick={open}>
        Войти
      </Button>
      <LoginModal opened={opened} onClose={close} />
    </>
  )
})

export default LoginButton
