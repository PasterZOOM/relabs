import { FormEvent } from 'react'

import { hasLength, isEmail, useForm } from '@mantine/form'
import { FormValidateInput, GetInputProps } from '@mantine/form/lib/types'
import { useRouter } from 'next/router'

import { useLoginMutation } from '../../api/authApi'

import { RoutePath } from '@/shared/config/routerConfig'
import { validateFn, ValidatorType } from '@/shared/lib/utils/validate/validateFn'

type FormFields = {
  email: string
  password: string
}

const passwordValidators: ValidatorType[] = [
  {
    condition: value => !!hasLength({ min: 8 })(value),
    message: 'Пароль должен быть 8 символов и больше',
  },
  {
    condition: (value: string) => !/[A-ZА-Я]/.test(value),
    message: 'В пароле должна быть хотя бы одна заглавная буква',
  },
  {
    condition: (value: string) => /\s/.test(value),
    message: 'Пароль не должен содержать пробельных символов',
  },
]

const initialValues: FormFields = {
  password: '',
  email: '',
}

const validate: FormValidateInput<FormFields> = {
  email: isEmail('Не валидный email'),
  password: (value: string) => validateFn(value, passwordValidators),
}

export const useLoginForm = (): {
  getInputProps: GetInputProps<FormFields>
  inSubmitProcess: boolean
  onSubmit: (event?: FormEvent<HTMLFormElement> | undefined) => void
} => {
  const { push } = useRouter()

  const [login, { isLoading }] = useLoginMutation()

  const { getInputProps, reset, onSubmit } = useForm<FormFields>({
    initialValues,
    validate,
  })

  const onSubmitHandler = async (values: FormFields): Promise<void> => {
    const res = await login(values)

    if ('data' in res) {
      reset()
      await push(RoutePath.main)
    }
  }

  return { getInputProps, onSubmit: onSubmit(onSubmitHandler), inSubmitProcess: isLoading }
}
