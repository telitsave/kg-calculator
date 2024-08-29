import nodemailer from 'nodemailer'

class MailService {
  private _mailTransporter: nodemailer.Transporter

  constructor() {
    this._mailTransporter = nodemailer.createTransport({
      host: 'mail.hostland.ru',
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })
  }

  async sendActivationMail(to: string, registrationToken: string) {
    try {
      const regLink = `${process.env.CLIENT_URL}/about?registrationToken=${registrationToken}`
      await this._mailTransporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: 'Регистрация в калькуляторе Kingdoms Guard',
        text: `Ваша почта была указана при регистрации в калькуляторе Kingdoms Guard. Для подтверждения регистрации, пожалуйста, перейдите по ссылке: ${regLink}`,
        html: `<p>Ваша почта была указана при регистрации в калькуляторе Kingdoms Guard.</p><p>Для подтверждения регистрации, пожалуйста, перейдите по ссылке: <a href="${regLink}">${regLink}</a></p>`,
      })
    } catch (err) {
      throw err
    }
  }

  async sendResetPasswordMail(to: string, resetPasswordToken: string) {
    try {
      const resetPasswordLink = `${process.env.CLIENT_URL}/about?resetPasswordToken=${resetPasswordToken}`
      await this._mailTransporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: 'Сброс пароля в калькуляторе Kingdoms Guard',
        text: `Был произведен запрос на сброс пароля. Чтобы сбросить пароль, перейдите по следующей ссылке: ${resetPasswordLink}. Если это были не вы, не переходите по ссылке и проигнорируйте данное письмо.`,
        html: `<p>Был произведен запрос на сброс пароля.</p><p>Чтобы сбросить пароль, перейдите по следующей ссылке: <a href="${resetPasswordLink}">${resetPasswordLink}</a>.</p><p>Если это были не вы, не переходите по ссылке и проигнорируйте данное письмо.</p>`,
      })
    } catch (err) {
      throw err
    }
  }
}

export default new MailService()
