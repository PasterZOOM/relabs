import { v1 } from 'uuid'

import { AppRoutes, RoutePath } from '@/shared/config/routerConfig'

type HeaderTabType = {
  id: string
  path: string
  title: string
  value: string
}

export const headerTabs: HeaderTabType[] = [
  { id: v1(), title: 'Главная страница', value: AppRoutes.MAIN, path: RoutePath.main },
  { id: v1(), title: 'Авторизация', value: AppRoutes.AUTH, path: RoutePath.auth },
  { id: v1(), title: 'Магазин', value: AppRoutes.SHOP, path: RoutePath.shop },
]
