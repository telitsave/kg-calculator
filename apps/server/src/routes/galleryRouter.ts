import express from 'express'
import GalleryController from '../controllers/galleryController'

const galleryRouter = express.Router()

galleryRouter.post('/', GalleryController.calculateGallery)

export default galleryRouter
