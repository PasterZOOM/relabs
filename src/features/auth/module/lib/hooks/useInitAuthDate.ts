import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { authActions } from '@/features/auth'
import { selectAuthData } from '@/features/auth/module/selectors/selectAuthData'
import { selectIsInitialized } from '@/features/auth/module/selectors/selectIsInitialized'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/useAppDispatch'

export const useInitAuthDate = (): void => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const isInitialised = useAppSelector(selectIsInitialized)
  const authData = useAppSelector(selectAuthData)

  useEffect(() => {
    dispatch(authActions.initAuthData())
  }, [dispatch])

  if (isInitialised && !authData) {
    push('/login').then()
  }
}
