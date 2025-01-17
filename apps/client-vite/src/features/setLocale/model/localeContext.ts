import { createContext, useContext } from 'react'

interface LocaleContextType {
  locale: 'ru' | 'en'
  setLocale: (locale: 'ru' | 'en') => void
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'ru',
  setLocale: () => {},
})

const useLocaleContext = () => useContext(LocaleContext)

export { LocaleContext, useLocaleContext, type LocaleContextType }
