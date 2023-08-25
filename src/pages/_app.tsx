import { ReactElement } from 'react'

import { MantineProvider } from '@mantine/core'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout): ReactElement => {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <>
      <Head>
        <link href="/favicon_32x32.png" rel="icon" />
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

export default App
