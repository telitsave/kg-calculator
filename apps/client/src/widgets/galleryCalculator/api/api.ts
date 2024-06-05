import { CalculateGalleryPayload, CalculateGalleryResponse } from 'shared/api'
import AxiosService from 'shared/services/axiosService'

export const calculateGallery = (payload: CalculateGalleryPayload) => {
  return AxiosService.post<CalculateGalleryResponse>('/calculator/gallery', {
    data: payload,
  })
}
