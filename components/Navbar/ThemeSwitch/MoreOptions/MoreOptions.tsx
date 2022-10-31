import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  show: boolean
}

const MoreOptions = ({ children, show }: Props) => {
  return (
    <ul
      className={cx(
        'absolute right-1 p-4 bg-white dark:bg-dark-blue-dark shadow-md shadow-dark-gray dark:shadow-dark-blue-dark border border-white dark:border-dark-blue-dark rounded ',
        { hidden: !show },
      )}
    >
      {children}
    </ul>
  )
}

interface OptionProps {
  icon: FontAwesomeIconProps['icon']
  label: string
  onClick: () => void
}

const Option = ({ label, icon, onClick }: OptionProps) => {
  return (
    <li>
      <button className="flex items-center py-2 whitespace-nowrap w-full" onClick={onClick}>
        <FontAwesomeIcon className="w-5 h-5 mr-3" icon={icon} />
        {label}
      </button>
    </li>
  )
}

MoreOptions.Option = Option

export default MoreOptions
