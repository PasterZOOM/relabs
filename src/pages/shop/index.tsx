import { Tabs } from '@mantine/core'

import { MainLayout } from '@/app/layouts/mainLayout'
import { AppRoutes } from '@/shared/config/routerConfig'
import { NextPageWithLayout } from '@/shared/types/pagesTypes'

const ShopPage: NextPageWithLayout = () => {
  return (
    <Tabs.Panel pt="xs" value={AppRoutes.SHOP}>
      ShopPage
    </Tabs.Panel>
  )
}

ShopPage.getLayout = MainLayout
export default ShopPage
