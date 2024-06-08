import type { CalculateGalleryPayload, CalculateGalleryResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateGallery = (payload: CalculateGalleryPayload) => {
  return AxiosService.post<CalculateGalleryResponse>('/calculator/gallery', {
    data: payload,
  })
}
