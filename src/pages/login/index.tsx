import { Flex } from '@mantine/core'

import { AuthForm } from '@/features/auth/ui/authForm'
import { NextPageWithLayout } from '@/shared/types/pagesTypes'

const LoginPage: NextPageWithLayout = () => {
  return (
    <Flex
      align="center"
      className="min-h-screen p-24"
      direction="column"
      justify="center"
      wrap="wrap"
    >
      <AuthForm />
    </Flex>
  )
}

export default LoginPage
