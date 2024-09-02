import type Parameters from '../model/parameters/Parameters'
import ParametersRepository from '../repositories/parameters-repository'

export default class ParametersService {
  static async getParameters(profileId: number) {
    return ParametersRepository.getParameters(profileId)
  }

  static async setParameters(profileId: number, parameters: Parameters) {
    await ParametersRepository.setParameters(profileId, parameters.getDataForDB())
  }

  static async removeParameters(profileId: number) {
    await ParametersRepository.removeParameters(profileId)
  }
}
