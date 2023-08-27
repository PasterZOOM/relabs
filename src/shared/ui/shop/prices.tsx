import { FC, memo } from 'react'

import { PriceType } from '@/entities/product'
import { currencyConverter } from '@/shared/lib/utils/currency/currencyConverter'

type PropsType = {
  className?: string
  price: PriceType
}

const Prices: FC<PropsType> = ({ className = '', price }) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <div className="text-lg font-black">{currencyConverter(price.current)}</div>

        <div className="text-sm font-bold text-gray-600 line-through decoration-2">
          {currencyConverter(price.old)}
        </div>
      </div>

      <div className="text-sm font-bold text-fuchsia-600">{currencyConverter(price.discount)}</div>
    </div>
  )
}

const Memo = memo(Prices)

export { Memo as Prices }
