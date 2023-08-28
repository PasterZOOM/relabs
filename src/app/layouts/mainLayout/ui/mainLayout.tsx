import { ReactElement, useEffect } from 'react'

import { Flex, Loader, Tabs } from '@mantine/core'
import { useRouter } from 'next/router'

import { useInitAuthDate } from '@/features/auth'
import { eventsActions } from '@/features/events'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Header } from '@/widgets/header'

export const MainLayout = (page: ReactElement): ReactElement => {
  const { pathname } = useRouter()
  const { isLoading } = useInitAuthDate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(eventsActions.connect())
  }, [dispatch])

  if (isLoading) {
    return (
      <Flex align="center" direction="row" gap="md" h="100vh" justify="center" wrap="wrap">
        <Loader />
      </Flex>
    )
  }

  return (
    <Tabs defaultValue={pathname}>
      <Header />
      {page}
    </Tabs>
  )
}
