'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Titillium_Web } from 'next/font/google'
import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers'
import Banner from '../components/Banner'

const titillium_Web = Titillium_Web({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={titillium_Web.className + ' bg-sky-50/80 container overflow-x-hidden'}>
        <NavBar />
        <Banner/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
