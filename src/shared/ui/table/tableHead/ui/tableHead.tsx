import { FC, memo } from 'react'

import { TableHeaderItemType } from '../module/tableHeaderItem'

type PropsType = {
  className?: string
  headers: TableHeaderItemType[]
}

const TableHead: FC<PropsType> = ({ className = '', headers }) => {
  return (
    <thead className={className}>
      <tr>
        {headers.map(({ id, title }) => (
          <th key={id}>{title}</th>
        ))}
      </tr>
    </thead>
  )
}

const Memo = memo(TableHead)

export { Memo as TableHead }
