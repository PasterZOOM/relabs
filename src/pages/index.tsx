import { Flex, Tabs } from '@mantine/core'

import { MainLayout } from '@/app/layouts/mainLayout'
import { Events } from '@/features/events'
import { Users } from '@/features/users'
import { RoutePath } from '@/shared/config/routerConfig'
import { NextPageWithLayout } from '@/shared/types/pagesTypes'

const HomePage: NextPageWithLayout = () => {
  return (
    <Tabs.Panel pt="xs" value={RoutePath.main}>
      <Flex gap="md">
        <Users />
        <Events />
      </Flex>
    </Tabs.Panel>
  )
}

HomePage.getLayout = MainLayout
export default HomePage
