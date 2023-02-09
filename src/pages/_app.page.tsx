import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'

import { globalStyles } from '@/styles/global'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
