import { ReactElement, useEffect } from 'react'

import { MantineProvider } from '@mantine/core'
import Head from 'next/head'

import { wrapper } from '@/app/providers/storeProvider/config/store'
import { eventsActions } from '@/features/events'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { AppPropsWithLayout } from '@/shared/types/pagesTypes'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppPropsWithLayout): ReactElement => {
  const dispatch = useAppDispatch()
  const getLayout = Component.getLayout ?? (page => page)

  useEffect(() => {
    dispatch(eventsActions.connect())
  }, [dispatch])

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
