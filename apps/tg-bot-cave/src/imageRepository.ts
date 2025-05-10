import * as fs from 'node:fs'
import path from 'node:path'

export const getImageByStep = (step: number) => {
  const IMAGES_DIR = path.join(__dirname, 'assets')
  return fs.readdirSync(IMAGES_DIR).find((file) => {
    const [fileName, ext] = file.split('.')
    if (ext !== 'png') return false
    const [_, stepKey, versionKey] = fileName.split('_')
    return !versionKey && Number(stepKey) === step
  })
}

export const getImageByStepVersion = (step: number, version: number) => {
  const IMAGES_DIR = path.join(__dirname, 'assets')
  return fs.readdirSync(IMAGES_DIR).find((file) => {
    const [fileName, ext] = file.split('.')
    if (ext !== 'png') return false
    const [_, stepKey, versionKey] = fileName.split('_')
    return Number(stepKey) === step && Number(versionKey) === version
  })
}
