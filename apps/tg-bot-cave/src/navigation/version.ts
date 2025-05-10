import type { InlineKeyboardButton } from 'node-telegram-bot-api'

const getNavigationVersionButtons = (step: number): InlineKeyboardButton[][] => {
  const firstLineButtons: InlineKeyboardButton[] = [{ text: '⚙️ Изменить версию', callback_data: `step_${step}` }]
  if (step + 1 < 50) {
    firstLineButtons.push({ text: '✅ Далее', callback_data: `step_${step + 1}` })
  }

  return [
    firstLineButtons,
    [
      {
        text: '↩️ Сменить этап',
        callback_data: `main_menu`,
      },
    ],
  ]
}

export const getNavigtaionVersion = (step: number, version: number, senderLink: string) => {
  return {
    message: `Этап: ${step + 1}. Версия: ${version + 1} | Определил: ${senderLink}

НЕ ТРОГАЙТЕ КАМНИ, без необходимости НЕ ОТКРЫВАТЬ.`,
    buttons: getNavigationVersionButtons(step),
  }
}
