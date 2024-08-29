import React, { FC, memo, useCallback } from 'react'
import { Button } from '@mantine/core'
import useLogout from '../../model/useLogout'

interface Props {
  className?: string
}

const LogoutButton: FC<Props> = memo(({ className }) => {
  const { mutate: logout } = useLogout()

  const handleLogoutButtonClick = useCallback(() => {
    logout()
  }, [logout])

  return (
    <Button className={className} variant="default" onClick={handleLogoutButtonClick}>
      Выйти
    </Button>
  )
})

export default LogoutButton
