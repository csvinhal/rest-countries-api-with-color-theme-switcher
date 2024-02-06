import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between p-8 bg-white dark:bg-dark-blue-dark shadow-lg shadow-dark-gray dark:shadow-very-dark-blue-dark">
      <Link className="font-extrabold" href="/">
        Where in the world?
      </Link>
      <ThemeSwitch />
    </nav>
  )
}

export default Navbar
