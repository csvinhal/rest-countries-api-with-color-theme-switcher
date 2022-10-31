import Navbar from '../components/Navbar/Navbar'
import './global.css'

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-light bg-very-light-gray-light dark:bg-very-dark-blue-dark text-very-dark-blue-light dark:text-white">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
