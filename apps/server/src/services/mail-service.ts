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
      const regLink = `${process.env.CLIENT_URL}/?registrationToken=${registrationToken}`
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
}

export default new MailService()
