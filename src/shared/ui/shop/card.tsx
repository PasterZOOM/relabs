import { FC, memo } from 'react'

import { Button } from '@mantine/core'

import { ProductType } from '@/entities/product'
import { informationConverter } from '@/shared/lib/utils/information/informationConverter'
import { Badge } from '@/shared/ui/badge'
import { Checkbox } from '@/shared/ui/checkbox'
import { Rating } from '@/shared/ui/rating'
import { Photo } from '@/shared/ui/shop/photo'
import { Prices } from '@/shared/ui/shop/prices'

type PropsType = {
  className?: string
  item: ProductType
}

const Card: FC<PropsType> = ({ className = '', item }) => {
  const { rating, id, price, tags, characteristics, photos } = item

  return (
    <div
      className={`w-fit space-y-3 rounded-2xl bg-white p-4 shadow-black drop-shadow-lg ${className}`}
    >
      <Photo alt={characteristics.model} src={photos[0]} tags={tags} />

      <div className="space-y-1">
        <Prices className="space-y-1" price={price} />
        <div className="text-sm text-gray-400">{informationConverter(characteristics)}</div>
        <Rating id={id} rating={rating} />
        <Badge className="bg-gradient-to-r from-teal-200 to-yellow-200">Рассрочка 0-0-6</Badge>
      </div>

      <div className="flex items-center gap-4">
        <Button className="relative" color="grape" variant="outline">
          В корзину
        </Button>
        <Checkbox />
      </div>
    </div>
  )
}

const Memo = memo(Card)

export { Memo as Card }
