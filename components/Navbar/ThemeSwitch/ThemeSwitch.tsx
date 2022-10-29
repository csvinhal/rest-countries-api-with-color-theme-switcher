'use client'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircleHalfStroke,
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

library.add(faMoon, faLightbulb, faCircleHalfStroke)

type Option = { icon: FontAwesomeIconProps['icon']; label: string }

const THEME: { [k in ThemeObjectValues]: Option } = {
  ['os-system']: { icon: 'circle-half-stroke', label: 'OS System' },
  dark: { icon: 'moon', label: 'Dark Mode' },
  light: { icon: 'moon', label: 'Light Mode' },
} as const

const NavTheme = () => {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative">
      <button
        className="flex justify-center items-center"
        onClick={() => setOpen(prevState => !prevState)}
      >
        <FontAwesomeIcon className="w-6 h-6 mr-3" icon={THEME[theme].icon} />
        {THEME[theme].label}
      </button>
      <MoreOptions show={open}>
        <MoreOptions.Option
          label="OS Default"
          icon="circle-half-stroke"
          onClick={() => {
            setTheme(ThemeObject.os)
            setOpen(false)
          }}
        />
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
