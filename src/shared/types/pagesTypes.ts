import { ReactElement } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement
}
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
