import { useCallback, useEffect, useState } from 'react'

export const ThemeObject = {
  dark: 'dark',
  light: 'light',
} as const

export type Theme = keyof typeof ThemeObject

export type ThemeObjectValues = typeof ThemeObject[Theme]

const STORAGE_KEY = 'theme'

const getDefaultTheme = () => {
  let theme
  try {
    theme = localStorage.getItem(STORAGE_KEY) || undefined
  } catch (e) {
    // Unsupported
  }
  return (theme as typeof ThemeObject[Theme]) || ThemeObject.light
}

export const useTheme = () => {
  const [theme, setThemeState] = useState<ThemeObjectValues>(ThemeObject.light)

  const setTheme = useCallback((theme: ThemeObjectValues) => {
    document.documentElement.classList.forEach(e => {
      if (['dark', 'light'].includes(e)) {
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

  useEffect(() => {
    const detaultTheme = getDefaultTheme()
    setTheme(detaultTheme)
  }, [setTheme])

  return {
    theme,
    setTheme,
  }
}
