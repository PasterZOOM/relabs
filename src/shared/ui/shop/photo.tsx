import { FC, memo, useState } from 'react'

import { Badge } from '@mantine/core'
import Image from 'next/image'

import { TagsType } from '@/entities/product'

type PropsType = {
  alt: string
  className?: string
  src: string
  tags: TagsType
}

const Photo: FC<PropsType> = ({ className = '', tags, alt, src }) => {
  const [isHover, setIsHover] = useState(false)
  const onFocusHandler = (): void => {
    setIsHover(true)
  }

  const onBlurHandler = (): void => {
    setIsHover(false)
  }

  return (
    <div
      className={`p-2 hover:cursor-pointer ${className}`}
      onMouseLeave={onBlurHandler}
      onMouseMove={onFocusHandler}
    >
      <div className="relative aspect-square w-full">
        <Image
          fill
          alt={alt}
          className="z-0 h-full w-full object-contain"
          sizes="400px"
          src={src}
        />
        {isHover && (
          <div className="absolute inset-0 z-10 grid place-content-center">
            <div className="rounded-full bg-white bg-opacity-70 p-3">Быстрый просмотр</div>
          </div>
        )}
        <div className="absolute -bottom-2 left-0 ">
          {Object.values(tags).map(tag => (
            <Badge key={tag} color="grape">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

const Memo = memo(Photo)

export { Memo as Photo }
