import { FC } from 'react'

import { Box, Button, Group, PasswordInput, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'

import { useLoginForm } from '@/features/auth/module/lib/hooks/useLoginForm'

type PropsType = {
  className?: string
}

export const AuthForm: FC<PropsType> = ({ className = '' }) => {
  const { inSubmitProcess, onSubmit, getInputProps } = useLoginForm()

  return (
    <Box className={className} component="form" onSubmit={onSubmit}>
      <TextInput
        withAsterisk
        disabled={inSubmitProcess}
        icon={<IconAt size="1rem" />}
        label="Email"
        placeholder="example@mail.com"
        {...getInputProps('email')}
      />
      <PasswordInput
        withAsterisk
        disabled={inSubmitProcess}
        icon={<IconLock size="1rem" />}
        label="Пароль"
        mt="md"
        placeholder="Введите пароль"
        {...getInputProps('password')}
      />

      <Group mt="xl" position="center">
        <Button loaderPosition="center" loading={inSubmitProcess} type="submit" variant="outline">
          Submit
        </Button>
      </Group>
    </Box>
  )
}
