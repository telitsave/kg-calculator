import { useMutation } from '@tanstack/react-query'
import api from 'shared/api'


const useCalculateGallery = () => {
  return useMutation({
    mutationKey: ['calculateGallery'],
    mutationFn: api.gallery.calculateGallery,
  })
}

export default useCalculateGallery
