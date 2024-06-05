import { useMutation } from '@tanstack/react-query'
import * as api from '../../api/api'

const useCalculateGallery = () => {
  return useMutation({
    mutationKey: ['calculateGallery'],
    mutationFn: api.calculateGallery,
  })
}

export default useCalculateGallery
