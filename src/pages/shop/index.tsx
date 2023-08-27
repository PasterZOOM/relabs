import { Tabs } from '@mantine/core'

import { MainLayout } from '@/app/layouts/mainLayout'
import { RoutePath } from '@/shared/config/routerConfig'
import { shopMock } from '@/shared/mocks/shopMock'
import { NextPageWithLayout } from '@/shared/types/pagesTypes'
import { Card } from '@/shared/ui/shop/card'

const ShopPage: NextPageWithLayout = () => {
  return (
    <Tabs.Panel
      className="mx-auto grid w-full max-w-7xl grid-cols-catalog-products place-items-center gap-4 px-4 md:gap-6 xl:auto-rows-max xl:gap-8"
      pb="xs"
      pt="xs"
      value={RoutePath.shop}
    >
      {shopMock.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </Tabs.Panel>
  )
}

ShopPage.getLayout = MainLayout
export default ShopPage
