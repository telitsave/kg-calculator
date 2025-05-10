import { getImageByStep, getImageByStepVersion } from './imageRepository'
import { getNavigtaionSteps } from './navigation/steps'
import { getNavigtaionVersion } from './navigation/version'
import { getNavigtaionVersions } from './navigation/versions'
import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import path from 'node:path'


dotenv.config()

const token = process.env.TOKEN_TG_BOT || ''
const bot = new TelegramBot(token, { polling: true })
const IMAGES_DIR = path.join(__dirname, 'assets')

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id
  const threadId = msg.message_thread_id

  const navigationSteps = getNavigtaionSteps()

  bot.sendMessage(chatId, navigationSteps.message, {
    reply_markup: {
      inline_keyboard: navigationSteps.buttons,
    },
    message_thread_id: threadId,
  })
})

bot.on('callback_query', async (query) => {
  if (!query.message || !query.data) return
  const chatId = query.message.chat.id

  const threadId = query.message.message_thread_id
  const data = query.data

  if (data === 'main_menu') {
    const navigationSteps = getNavigtaionSteps()
    try {
      await bot.deleteMessage(chatId, query.message.message_id)
      await bot.sendMessage(chatId, navigationSteps.message, {
        reply_markup: {
          inline_keyboard: navigationSteps.buttons,
        },
        message_thread_id: threadId,
      })
    } catch (e) {
      console.log(e)
    }
  } else {
    const [key, step, version] = data.split('_')
    if (!key || !step) return

    if (key === 'step') {
      if (step) {
        if (!version) {
          const navigationVersions = getNavigtaionVersions(Number(step))
          const image = getImageByStep(Number(step))
          if (!image) return

          await bot.deleteMessage(chatId, query.message.message_id)

          await bot.sendPhoto(
            chatId,
            path.join(IMAGES_DIR, image),
            {
              caption: navigationVersions.message,
              reply_markup: {
                inline_keyboard: navigationVersions.buttons,
              },
              message_thread_id: threadId,
            },
            {
              contentType: 'image/png',
            },
          )
        } else {
          const user = query.from
          const userLink = `<a href="tg://user?id=${user.id}">${user.username || user.first_name}</a>`
          const navigationVersion = getNavigtaionVersion(Number(step), Number(version), userLink)
          const image = getImageByStepVersion(Number(step), Number(version))
          if (!image) return

          try {
            await bot.deleteMessage(chatId, query.message.message_id)

            await bot.sendPhoto(
              chatId,
              path.join(IMAGES_DIR, image),
              {
                caption: navigationVersion.message,
                parse_mode: 'HTML',
                reply_markup: {
                  inline_keyboard: navigationVersion.buttons,
                },
                message_thread_id: threadId,
              },
              {
                contentType: 'image/png',
              },
            )
          } catch (e) {
            console.log(e)
          }
        }
      }
    }
  }
})

console.log('Бот запущен!')
