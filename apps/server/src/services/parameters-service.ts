import GemsRepository, { type GemsData } from '../repositories/gems-repository'
import ParametersRepository, { type ParametersData } from '../repositories/parameters-repository'
import TalentsParametersRepository, { type TalentsData } from '../repositories/talentsParameters-repository'
import type { ParameterTypes, Parameters } from 'kg-calculator-typings'


export default class ParametersService {
  static async getAllParameters(profileId: number) {
    return {
      params: await this.getParameters(profileId),
      gems: await this.getGems(profileId),
      talents: await this.getTalents(profileId),
    }
  }

  static async getParameters(profileId: number) {
    const params = await ParametersRepository.getParameters(profileId)
    const paramsResult: Parameters = {}
    params.forEach((param) => {
      paramsResult[param.parameterId] = param.value
    })

    return paramsResult
  }

  static async getGems(profileId: number) {
    const gems = await GemsRepository.getGems(profileId)
    const gemsResult = {}
    gems.forEach((gem) => {
      gemsResult[`${gem.rank}_sapphire`] = gem.sapphire
      gemsResult[`${gem.rank}_ruby`] = gem.ruby
      gemsResult[`${gem.rank}_malachite`] = gem.malachite
      gemsResult[`${gem.rank}_amethyst`] = gem.amethyst
      gemsResult[`${gem.rank}_amber`] = gem.amber
      gemsResult[`${gem.rank}_emerald`] = gem.emerald
    })

    return gemsResult
  }

  static async getTalents(profileId: number) {
    const talents = await TalentsParametersRepository.getTalents(profileId)
    const talentsResult = {}
    talents.forEach((talent) => {
      talentsResult[`${talent.element}_${talent.rank}_small`] = talent.small
      talentsResult[`${talent.element}_${talent.rank}_big`] = talent.big
    })

    return talentsResult
  }

  static async setParameters(profileId: number, parameters: Parameters) {
    const data: ParametersData[] = Object.entries(parameters).map(([key, value]) => ({
      parameterId: key as ParameterTypes,
      value,
    }))
    await ParametersRepository.setParameters(profileId, data)
  }

  static async setGems(profileId: number, gems: Record<string, number>) {
    const data: GemsData[] = []
    Object.entries(gems).forEach(([key, value]) => {
      const [rank, gem] = key.split('_')
      let gemData = data.find((it) => it.rank === Number(rank))
      if (!gemData) {
        gemData = {
          rank: Number(rank),
          amber: 0,
          sapphire: 0,
          amethyst: 0,
          malachite: 0,
          ruby: 0,
          emerald: 0,
        }
      }
      gemData[gem] = value
      data.push(gemData)
    })
    await GemsRepository.addGems(profileId, data)
  }

  static async setTalents(profileId: number, talents: Record<string, number>) {
    const data: TalentsData[] = []
    Object.entries(talents).forEach(([key, value]) => {
      const [element, rank, type] = key.split('_')
      let talentData = data.find((it) => it.element === element && it.rank === Number(rank))
      if (!talentData) {
        talentData = {
          element,
          rank: Number(rank),
          big: 0,
          small: 0,
        }
      }
      talentData[type] = value
      data.push(talentData)
    })

    await TalentsParametersRepository.setTalents(profileId, data)
  }

  static async removeParameters(profileId: number) {
    await ParametersRepository.removeParameters(profileId)
    await GemsRepository.removeGems(profileId)
    await TalentsParametersRepository.removeTalents(profileId)
  }
}
