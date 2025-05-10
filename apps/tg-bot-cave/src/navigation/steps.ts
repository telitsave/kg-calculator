import type { InlineKeyboardButton } from 'node-telegram-bot-api'

const getNavigationStepsButtons = () => {
  const lines: InlineKeyboardButton[][] = []
  for (let i = 0; i < 50; i++) {
    const lineIndex = Math.floor(i / 5)
    let line = lines[lineIndex]
    if (!line) {
      line = []
      lines.push(line)
    }
    line.push({
      text: (i + 1).toString(),
      callback_data: `step_${i}`,
    })
  }
  return lines
}

export const getNavigtaionSteps = () => {
  return {
    message: 'Выберите этап пещеры лавы',
    buttons: getNavigationStepsButtons(),
  }
}
