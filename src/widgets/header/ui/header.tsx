import { FC } from 'react'

import { Tabs } from '@mantine/core'
import Link from 'next/link'

import { headerTabs } from '@/app/layouts/mainLayout/module/tabs'
import { authActions } from '@/features/auth'
import { AppRoutes } from '@/shared/config/routerConfig'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'

export const Header: FC = () => {
  const dispatch = useAppDispatch()

  const logout = (): void => {
    dispatch(authActions.logout())
  }

  return (
    <Tabs.List>
      {headerTabs.map(({ title, id, value, path }) => {
        if (path === AppRoutes.AUTH) {
          return (
            <Tabs.Tab key={id} value={value} onClick={logout}>
              {title}
            </Tabs.Tab>
          )
        }

        return (
          <Link key={id} href={path}>
            <Tabs.Tab value={value}>{title}</Tabs.Tab>
          </Link>
        )
      })}
    </Tabs.List>
  )
}
