import { useCallback, useState } from 'react'

export const ThemeObject = {
  dark: 'dark',
  light: 'light',
  os: 'os-system',
} as const

export type Theme = keyof typeof ThemeObject

export type ThemeObjectValues = typeof ThemeObject[Theme]

const STORAGE_KEY = 'theme'
const isServer = typeof window !== 'undefined'

const getTheme = () => {
  if (isServer) return ThemeObject.os
  let theme
  try {
    theme = localStorage.getItem(STORAGE_KEY) || undefined
  } catch (e) {
    // Unsupported
  }
  return (theme as typeof ThemeObject[Theme]) || ThemeObject.os
}

export const useTheme = () => {
  const [theme, setThemeState] = useState(() => getTheme())
  theme

  const setTheme = useCallback((theme: ThemeObjectValues) => {
    document.documentElement.classList.forEach(e => {
      if (['dark', 'light', 'os-system'].includes(e)) {
        console.log('passou aqui')
        document.documentElement.classList.remove(e)
      }
    })
    setThemeState(theme)
    document.documentElement.classList.add(theme)

    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (e) {
      // Unsupported
    }
  }, [])

  return {
    theme,
    setTheme,
  }
}
