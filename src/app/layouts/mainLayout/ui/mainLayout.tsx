import { ReactElement } from 'react'

import { Tabs } from '@mantine/core'

import { useInitAuthDate } from '@/features/auth'
import { AppRoutes } from '@/shared/config/routerConfig'
import { Header } from '@/widgets/header'

export const MainLayout = (page: ReactElement): ReactElement => {
  useInitAuthDate()

  return (
    <Tabs defaultValue={AppRoutes.MAIN}>
      <Header />
      {page}
    </Tabs>
  )
}
