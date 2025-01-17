import type { CalculateGalleryResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateGallery = () => {
  return AxiosService.post<CalculateGalleryResponse>('/calculator/gallery')
}
