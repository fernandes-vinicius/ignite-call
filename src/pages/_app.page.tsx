import '@/lib/dayjs'
import { queryClient } from '@/lib/react-query'

import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from '@tanstack/react-query'

import { globalStyles } from '@/styles/global'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </QueryClientProvider>
  )
}
