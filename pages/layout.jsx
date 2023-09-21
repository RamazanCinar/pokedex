import { Tektur } from 'next/font/google';

import './globals.css'


const tektur = Tektur({ 
  weight: '400',
  subsets: ['latin'], 
  display: 'swap',
})

export const metadata = {
  title: 'Pokédex',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={tektur.className}>
      <body>{children}</body>
    </html>
  )
}
