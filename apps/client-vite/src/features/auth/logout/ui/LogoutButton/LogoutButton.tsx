import { FC, memo, useCallback } from 'react'
import { Button } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
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
    <Button className={className} variant="default" onClick={handleLogoutButtonClick} size="sm">
      <FormattedMessage defaultMessage="Выйти" />
    </Button>
  )
})

export default LogoutButton
