import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppDispatch, StateSchema } from '@/app/providers/storeProvider'

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
