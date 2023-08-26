import { memo, ReactElement, ReactNode } from 'react'

type PropsType<T extends ReactNode> = {
  children?: (id: string) => ReactNode
  className?: string
  rows: { id: string; item: T }[]
}

const TableBody = <T extends ReactNode>({
  className = '',
  children,
  rows,
}: PropsType<T>): ReactElement => {
  return (
    <tbody className={className}>
      {rows.map(row => (
        <tr key={row.id}>
          {row.item}
          {children?.(row.id)}
        </tr>
      ))}
    </tbody>
  )
}

const Memo = memo(TableBody)

export { Memo as TableBody }
