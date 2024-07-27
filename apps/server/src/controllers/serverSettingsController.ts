import ServerSettings from '../model/ServerSettings'
import { Request, Response } from 'express'

export default class ServerSettingsController {
  static getServerSettings(request: Request, response: Response) {
    response.json(new ServerSettings())
  }
}
