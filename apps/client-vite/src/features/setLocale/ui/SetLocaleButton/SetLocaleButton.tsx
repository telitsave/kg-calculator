import { FC, memo, useCallback } from 'react'
import { Button } from '@mantine/core'
import { useLocaleContext } from '../../model/localeContext'


interface Props {
  className?: string
}

const SetLocaleButton: FC<Props> = memo(() => {
  const { locale, setLocale } = useLocaleContext()
  const handleButtonClick = useCallback(() => {
    setLocale(locale === 'ru' ? 'en' : 'ru')
  }, [locale, setLocale])
  return <Button onClick={handleButtonClick}>{locale.toUpperCase()}</Button>
})

export default SetLocaleButton
