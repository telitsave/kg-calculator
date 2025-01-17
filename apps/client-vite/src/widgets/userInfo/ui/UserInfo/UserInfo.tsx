import { LoginButton, useActivate } from '@features/auth/login'
import { LogoutButton } from '@features/auth/logout'
import { ResetPasswordModal, useResetPassword } from '@features/auth/resetPassword'
import { AddProfileButton, NoProfileWrapper } from '@features/profile/addProfile'
import { DeleteProfileButtonIcon } from '@features/profile/deleteProfile'
import { EditProfileButtonIcon } from '@features/profile/editProfile'
import { ProfileSelector } from '@features/profile/profileSelector'
import { Flex } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import type { LoginResponse } from 'kg-calculator-typings'
import { FC, memo } from 'react'


const UserInfo: FC = memo(() => {
  useActivate()
  const { openedModal, onCloseModal, resetPasswordToken } = useResetPassword()
  const [userData] = useLocalStorage<LoginResponse['user']>({
    key: 'user-data',
  })
  if (userData) {
    return (
      <Flex align="center" gap="sm" flex="0 0 auto">
        <ProfileSelector
          profileButtonsNodes={[EditProfileButtonIcon, DeleteProfileButtonIcon]}
          addProfileButtonNode={<AddProfileButton />}
        />
        <LogoutButton />
        {resetPasswordToken && (
          <ResetPasswordModal resetPasswordToken={resetPasswordToken} opened={openedModal} onClose={onCloseModal} />
        )}
        <NoProfileWrapper />
      </Flex>
    )
  }
  return (
    <>
      <LoginButton />
      {resetPasswordToken && (
        <ResetPasswordModal resetPasswordToken={resetPasswordToken} opened={openedModal} onClose={onCloseModal} />
      )}
      <NoProfileWrapper />
    </>
  )
})

export default UserInfo
