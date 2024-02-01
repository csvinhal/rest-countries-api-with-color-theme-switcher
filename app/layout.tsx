import Navbar from '../components/Navbar/Navbar'
import { Nunito_Sans } from 'next/font/google'
import '../styles/globals.css'

const nunitoSans = Nunito_Sans({
  weight: ['300', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
})

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={nunitoSans.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-light bg-very-light-gray-light dark:bg-very-dark-blue-dark text-very-dark-blue-light dark:text-white">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
