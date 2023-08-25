import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { selectAuthData, selectIsInitialized, userActions } from '@/entities/user'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/useAppDispatch'

export const useInitAuthDate = (): void => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const isInitialised = useAppSelector(selectIsInitialized)
  const authData = useAppSelector(selectAuthData)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  if (isInitialised && !authData) {
    push('/login').then()
  }
}
