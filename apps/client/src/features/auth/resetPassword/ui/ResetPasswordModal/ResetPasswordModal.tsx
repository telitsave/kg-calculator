import React, { FC, memo, useCallback, useState } from 'react'
import { Modal } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import ResetPasswordForm from '../ResetPasswordForm'
import ResetPasswordSuccess from '../ResetPasswordSuccess'


interface Props {
  className?: string
  opened: boolean
  resetPasswordToken: string

  onClose: () => void
}

const ResetPasswordModal: FC<Props> = memo(({ className, resetPasswordToken, opened, onClose }) => {
  const [mode, setMode] = useState<'resetPassword' | 'success'>('resetPassword')
  const isMobile = useMediaQuery('(max-width: 50em)')

  const handleSuccess = useCallback(() => {
    setMode('success')
  }, [])

  return (
    <Modal className={className} opened={opened} onClose={onClose} title="Сброс пароля" centered fullScreen={isMobile}>
      {mode === 'resetPassword' && (
        <ResetPasswordForm resetPasswordToken={resetPasswordToken} onSuccess={handleSuccess} />
      )}
      {mode === 'success' && <ResetPasswordSuccess />}
    </Modal>
  )
})

export default ResetPasswordModal
