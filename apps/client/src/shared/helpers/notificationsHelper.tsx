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

  static showSavingNotification() {
    notifications.show({
      id: 'savingNotification',
      withCloseButton: false,
      loading: true,
      position: 'top-center',
      message: 'Сохранение',
      autoClose: false,
      style: {
        width: '160px',
        margin: '0 auto',
      },
    })
  }

  static showSavedNotification() {
    notifications.update({
      id: 'savingNotification',
      loading: false,
      message: 'Сохранено!',
      autoClose: 5000,
      color: 'green',
    })
  }

  static showSaveErrorNotification() {
    notifications.update({
      id: 'savingNotification',
      loading: false,
      message: 'Ошибка при сохранении!',
      autoClose: 5000,
      color: 'red',
      style: {
        width: '320px',
        margin: '0 auto',
      },
    })
  }
}
