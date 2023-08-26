import { Tabs } from '@mantine/core'

import { MainLayout } from '../app/layouts/mainLayout'

import { Users } from '@/features/users'
import { AppRoutes } from '@/shared/config/routerConfig'
import { NextPageWithLayout } from '@/shared/types/pagesTypes'

const HomePage: NextPageWithLayout = () => {
  return (
    <Tabs.Panel pt="xs" value={AppRoutes.MAIN}>
      <Users />
    </Tabs.Panel>
  )
}

HomePage.getLayout = MainLayout
export default HomePage
