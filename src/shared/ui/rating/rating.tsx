import { FC, memo, useState } from 'react'

import { Rating } from '@mantine/core'

import { RatingType } from '@/entities/product'

type PropsType = {
  className?: string
  id: string
  rating: RatingType
}

const AppRating: FC<PropsType> = ({ className = '', rating, id }) => {
  const [rate, setRate] = useState(rating)
  const [isRated, setIsRated] = useState(false)

  const changeRate = (value: number): void => {
    setIsRated(true)
    setRate(prev => {
      return {
        averageRating: (prev.averageRating * prev.ratings + value) / (prev.ratings + 1),
        ratings: prev.ratings + 1,
      }
    })
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {isRated ? (
        <Rating key={id + 0} readOnly color="grape" fractions={4} value={rate.averageRating} />
      ) : (
        <Rating
          key={id + 1}
          color="grape"
          defaultValue={rate.averageRating}
          fractions={4}
          onChange={changeRate}
        />
      )}
      <div className="text-gray-400">{rate.ratings}</div>
    </div>
  )
}

const Memo = memo(AppRating)

export { Memo as Rating }
