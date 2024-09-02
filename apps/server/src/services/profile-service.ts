import ApiError from '../model/exceptions/ApiError'
import type Profile from '../model/profile'
import ProfileRepository from '../repositories/profile-repository'

export default class ProfileService {
  static async createProfile(userId: number, name: string, serverId?: number) {
    const userProfiles = await ProfileRepository.getProfilesByUserId(userId)

    if (userProfiles.length >= 5) {
      throw ApiError.BadRequestError('Нельзя создать больше 5 профилей')
    }

    return await ProfileRepository.createProfile(userId, name, serverId)
  }

  static async getProfiles(userId: number) {
    return await ProfileRepository.getProfilesByUserId(userId)
  }

  static async updateProfile(userId: number, profileId: number, data: Partial<Omit<Profile, 'id' | 'userId'>>) {
    const profile = await ProfileRepository.getProfileById(profileId)

    if (!profile || profile.userId !== userId) {
      throw ApiError.BadRequestError('Профиль не найден или доступ запрещен')
    }

    await ProfileRepository.updateProfile(profileId, data)
  }

  static async deleteProfile(userId: number, profileId: number) {
    const profile = await ProfileRepository.getProfileById(profileId)

    if (!profile || profile.userId !== userId) {
      throw ApiError.BadRequestError('Профиль не найден или доступ запрещен')
    }

    await ProfileRepository.deleteProfile(profileId)
  }
}
