import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { selectAuthData } from '../../selectors/selectAuthData'
import { selectIsInitialized } from '../../selectors/selectIsInitialized'
import { authActions } from '../../slice/authSlice'

import { RoutePath } from '@/shared/config/routerConfig'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/useAppDispatch'

export const useInitAuthDate = (): { isLoading: boolean } => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const isInitialised = useAppSelector(selectIsInitialized)
  const authData = useAppSelector(selectAuthData)

  useEffect(() => {
    dispatch(authActions.initAuthData())
  }, [dispatch])

  if (isInitialised && !authData) {
    push(RoutePath.auth).then()
  }

  return { isLoading: !isInitialised || !authData }
}
