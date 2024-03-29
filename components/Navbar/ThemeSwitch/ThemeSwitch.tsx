'use client'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLightbulb,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

import { useState } from 'react'
import { ThemeObject, ThemeObjectValues, useTheme } from './hooks/useTheme'
import MoreOptions from './MoreOptions/MoreOptions'

library.add(faMoon, faLightbulb)

type Option = { icon: FontAwesomeIconProps['icon']; label: string }

const THEME: { [k in ThemeObjectValues]: Option } = {
  dark: { icon: 'moon', label: 'Dark Mode' },
  light: { icon: 'lightbulb', label: 'Light Mode' },
} as const

const NavTheme = () => {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative">
      <button
        className="flex justify-center items-center font-light"
        onClick={() => setOpen(prevState => !prevState)}
      >
        <FontAwesomeIcon className="w-5 h-5 mr-3" icon={THEME[theme].icon} />
        {THEME[theme].label}
      </button>
      <MoreOptions show={open}>
        <MoreOptions.Option
          label="Light"
          icon="lightbulb"
          onClick={() => {
            setTheme(ThemeObject.light)
            setOpen(false)
          }}
        />
        <MoreOptions.Option
          label="Dark"
          icon="moon"
          onClick={() => {
            setTheme(ThemeObject.dark)
            setOpen(false)
          }}
        />
      </MoreOptions>
    </div>
  )
}

export default NavTheme
