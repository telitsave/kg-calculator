import { FC, memo, useCallback, useMemo, useState } from 'react'
import { Modal } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useIntl } from 'react-intl'
import ForgotPasswordForm from '../ForgotPasswordForm'
import ForgotPasswordSuccess from '../ForgotPasswordSuccess'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import RegistrationSuccess from '../RegistrationSuccess'


interface Props {
  className?: string
  opened: boolean
  onClose: () => void
}

const LoginModal: FC<Props> = memo(({ className, opened, onClose }) => {
  const intl = useIntl()
  const [mode, setMode] = useState<
    'login' | 'registration' | 'registrationSuccess' | 'forgotPassword' | 'forgotPasswordSuccess'
  >('login')
  const [regEmail, setRegEmail] = useState('')
  const isMobile = useMediaQuery('(max-width: 50em)')

  const modalTitle = useMemo(() => {
    switch (mode) {
      case 'login':
        return intl.formatMessage({ defaultMessage: 'Авторизация' })
      case 'registration':
      case 'registrationSuccess':
        return intl.formatMessage({ defaultMessage: 'Регистрация' })
      case 'forgotPassword':
      case 'forgotPasswordSuccess':
        return intl.formatMessage({ defaultMessage: 'Забыли пароль' })
    }
  }, [intl, mode])

  const handleRegisterLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMode('registration')
    return true
  }, [])

  const handleLoginLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMode('login')
    return true
  }, [])

  const handleForgotPasswordLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMode('forgotPassword')
    return true
  }, [])

  const handleBackButtonClick = useCallback(() => {
    setMode('login')
  }, [])

  const handleRegistrationFormSuccess = useCallback((email: string) => {
    setMode('registrationSuccess')
    setRegEmail(email)
  }, [])

  const handleForgotPasswordSuccess = useCallback((email: string) => {
    setMode('forgotPasswordSuccess')
    setRegEmail(email)
  }, [])

  const handleModalClose = useCallback(() => {
    onClose()
    setMode('login')
    setRegEmail('')
  }, [onClose])

  const handleLoginFormSuccess = useCallback(() => {
    handleModalClose()
  }, [handleModalClose])

  return (
    <Modal
      className={className}
      opened={opened}
      onClose={handleModalClose}
      title={modalTitle}
      centered
      fullScreen={isMobile}
    >
      {mode === 'login' && (
        <LoginForm
          onSuccessLogin={handleLoginFormSuccess}
          onClickRegisterLink={handleRegisterLinkClick}
          onClickForgotPasswordLink={handleForgotPasswordLinkClick}
        />
      )}
      {mode === 'registration' && (
        <RegistrationForm onClickLoginLink={handleLoginLinkClick} onSuccess={handleRegistrationFormSuccess} />
      )}
      {mode === 'registrationSuccess' && <RegistrationSuccess email={regEmail} />}
      {mode === 'forgotPassword' && (
        <ForgotPasswordForm onSuccess={handleForgotPasswordSuccess} onClickBackButton={handleBackButtonClick} />
      )}
      {mode === 'forgotPasswordSuccess' && <ForgotPasswordSuccess email={regEmail} />}
    </Modal>
  )
})

export default LoginModal
