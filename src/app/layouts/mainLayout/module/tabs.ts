import { v1 } from 'uuid'

import { RoutePath } from '@/shared/config/routerConfig'

type HeaderTabType = {
  id: string
  title: string
  value: string
}

export const headerTabs: HeaderTabType[] = [
  { id: v1(), title: 'Главная страница', value: RoutePath.main },
  { id: v1(), title: 'Авторизация', value: RoutePath.auth },
  { id: v1(), title: 'Магазин', value: RoutePath.shop },
]
