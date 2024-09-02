export interface Profile {
  id: number
  userId: number
  name: string
  serverId?: number
}

export interface CreateProfilePayload {
  name: string
  serverId?: number
}

export type CreateProfileResponse = Profile

export interface UpdateProfilePayload {
  name?: string
  serverId?: number
}

export type GetProfilesResponse = Profile[]
