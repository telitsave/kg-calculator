import { CalculateGalleryPayload, CalculateGalleryResponse } from 'kg-calculator-typings'
import AxiosService from 'shared/services/axiosService'

export const calculateGallery = (payload: CalculateGalleryPayload) => {
  return AxiosService.post<CalculateGalleryResponse>('/calculator/gallery', {
    data: payload,
  })
}
