import React from 'react'
import { notifications } from '@mantine/notifications'
import { TbCheck, TbX } from 'react-icons/tb'


export default class NotificationsHelper {
  static showSuccessNotification(message: string, title: string, timeoutSeconds = 5) {
    notifications.show({
      position: 'top-center',
      title,
      message,
      icon: <TbCheck />,
      color: 'green',
      autoClose: timeoutSeconds * 1000,
    })
  }

  static showErrorNotification(message: string, title: string, timeoutSeconds = 5) {
    notifications.show({
      position: 'top-center',
      title,
      message,
      icon: <TbX />,
      color: 'red',
      autoClose: timeoutSeconds * 1000,
    })
  }
}
