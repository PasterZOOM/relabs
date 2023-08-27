import { FC, memo, ReactNode } from 'react'

type PropsType = {
  children: ReactNode
  className?: string
}

const Badge: FC<PropsType> = ({ className = '', children }) => {
  return (
    <div className={`w-fit cursor-default rounded-full p-2 font-semibold uppercase ${className}`}>
      {children}
    </div>
  )
}

const Memo = memo(Badge)

export { Memo as Badge }
