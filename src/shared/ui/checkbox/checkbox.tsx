import { FC, memo, useState } from 'react'

import { IconHeart } from '@tabler/icons-react'

const Checkbox: FC = () => {
  const [isChecked, setIsChecked] = useState(false)
  const toggleChecked = (): void => {
    setIsChecked(prevState => !prevState)
  }

  return (
    <div
      aria-hidden
      className="relative flex h-fit cursor-pointer items-center justify-center focus:outline-offset-2 focus:outline-blue-500"
      role="button"
      tabIndex={0}
      onClick={toggleChecked}
    >
      <IconHeart
        className={`relative text-fuchsia-600 transition hover:fill-fuchsia-600 active:fill-fuchsia-500 active:text-fuchsia-500 ${
          isChecked && 'fill-fuchsia-600'
        }`}
      />
    </div>
  )
}
const Memo = memo(Checkbox)

export { Memo as Checkbox }
