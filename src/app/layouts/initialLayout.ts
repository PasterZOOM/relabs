import { ReactElement } from 'react'

import { useInitAuthDate } from '@/features/auth'

export const MainLayout = (page: ReactElement): ReactElement => {
  useInitAuthDate()

  return page
}
