import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'

const useCalculateGallery = () => {
  return useMutation({
    mutationKey: ['calculateGallery'],
    mutationFn: api.gallery.calculateGallery,
  })
}

export default useCalculateGallery
