import React, { FC, memo } from 'react'
import { useLocalStorage } from '@mantine/hooks'
import type { LoginResponse } from 'kg-calculator-typings'
import { LoginButton } from 'features/auth/login'
import { LogoutButton } from 'features/auth/logout'


const UserInfo: FC = memo(() => {
  const [userData] = useLocalStorage<LoginResponse['user']>({
    key: 'user-data',
  })
  if (userData) {
    return (
      <div>
        {userData.email} <LogoutButton />
      </div>
    )
  }
  return <LoginButton />
})

export default UserInfo
