/* eslint-disable react/prop-types */
import './globals.css';

import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
    return (
      <html lang='en'>
        <title>Pokédex</title>
        <Component {...pageProps} />
        <Analytics />
      </html>
    )
  }