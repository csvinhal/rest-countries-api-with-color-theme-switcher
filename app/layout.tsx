import { Nunito_Sans } from '@next/font/google'
import cx from 'classnames'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar/Navbar'
import './global.css'

const nunitoSansLigh = Nunito_Sans({ weight: '300' })

const nunitoSansSemiBold = Nunito_Sans({ weight: '600' })

const nunitoSansExtraBold = Nunito_Sans({ weight: '800' })

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html
      lang="en"
      className={cx(
        nunitoSansLigh.className,
        nunitoSansSemiBold.className,
        nunitoSansExtraBold.className,
      )}
    >
      <body className="bg-very-light-gray-light dark:bg-very-dark-blue-dark text-very-dark-blue-light dark:text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
