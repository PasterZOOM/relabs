import { ReactElement, useEffect } from 'react'

import { MantineProvider } from '@mantine/core'
import Head from 'next/head'

import { wrapper } from '@/app/providers/storeProvider/config/store'
import { AppPropsWithLayout } from '@/shared/types/pagesTypes'

import '../styles/globals.css'

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
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

export default wrapper.withRedux(App)
