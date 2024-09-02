import type {
  CreateProfilePayload,
  CreateProfileResponse,
  GetProfilesResponse,
  UpdateProfilePayload,
} from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const getProfiles = () => {
  return AxiosService.get<GetProfilesResponse>('/profiles')
}

export const addProfile = (payload: CreateProfilePayload) => {
  return AxiosService.post<CreateProfileResponse>('/profiles', {
    data: payload,
  })
}

export const updateProfile = (profileId: number, payload: UpdateProfilePayload) => {
  return AxiosService.patch(`/profiles/${profileId}`, {
    data: payload,
  })
}

export const deleteProfile = (profileId: number) => {
  return AxiosService.delete(`/profiles/${profileId}`)
}
