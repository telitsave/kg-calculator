import type { InlineKeyboardButton } from 'node-telegram-bot-api'

const getNavigationVersionsButtons = (step: number) => {
  const buttons: InlineKeyboardButton[] = []
  for (let i = 0; i < 5; i++) {
    buttons.push({
      text: (i + 1).toString(),
      callback_data: `step_${step}_${i}`,
    })
  }
  return [
    buttons,
    [
      {
        text: '↩️ Сменить этап',
        callback_data: `main_menu`,
      },
    ],
  ]
}

export const getNavigtaionVersions = (step: number) => {
  return {
    message: `Этап ${step + 1}. Выберите версию этапа`,
    buttons: getNavigationVersionsButtons(step),
  }
}
