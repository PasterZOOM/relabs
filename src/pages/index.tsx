import { Inter } from 'next/font/google'

import { MainLayout } from '@/app/layouts/initialLayout'
import { NextPageWithLayout } from '@/shared/types/pagesTypes'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPageWithLayout = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Home page
    </main>
  )
}

HomePage.getLayout = MainLayout
export default HomePage
