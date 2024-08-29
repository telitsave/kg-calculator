import React, { FC, memo } from 'react'
import { Text } from '@mantine/core'


const ResetPasswordSuccess: FC = memo(() => (
  <div>
    <Text>Пароль был успешно сброшен.</Text>
    <Text>Используйте вашу почту и новый пароль для входа.</Text>
  </div>
))

export default ResetPasswordSuccess
