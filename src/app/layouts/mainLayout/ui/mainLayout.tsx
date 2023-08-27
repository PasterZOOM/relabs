import { ReactElement } from 'react'

import { Flex, Loader, Tabs } from '@mantine/core'

import { useInitAuthDate } from '@/features/auth'
import { AppRoutes } from '@/shared/config/routerConfig'
import { Header } from '@/widgets/header'

export const MainLayout = (page: ReactElement): ReactElement => {
  const { isLoading } = useInitAuthDate()

  if (isLoading) {
    return (
      <Flex align="center" direction="row" gap="md" h="100vh" justify="center" wrap="wrap">
        <Loader />
      </Flex>
    )
  }

  return (
    <Tabs defaultValue={AppRoutes.MAIN}>
      <Header />
      {page}
    </Tabs>
  )
}
