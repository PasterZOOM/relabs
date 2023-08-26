import { Tabs } from '@mantine/core'

import { MainLayout } from '../app/layouts/mainLayout'

import { AppRoutes } from '@/shared/config/routerConfig'
import { NextPageWithLayout } from '@/shared/types/pagesTypes'

const HomePage: NextPageWithLayout = () => {
  return (
    <Tabs.Panel pt="xs" value={AppRoutes.MAIN}>
      <div>Main</div>
    </Tabs.Panel>
  )
}

HomePage.getLayout = MainLayout
export default HomePage
