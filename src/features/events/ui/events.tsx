import { FC, memo, useEffect, useMemo } from 'react'

import { Flex, Table } from '@mantine/core'
import { useSelector } from 'react-redux'
import { v1 } from 'uuid'

import { selectEvents } from '../module/selectors/selectEvents'
import { selectEventsSocket } from '../module/selectors/selectEventsSocket'
import { eventsActions } from '../module/slice/eventsSlice'
import { EventResponse } from '../module/types/eventResponse'

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { TableBody } from '@/shared/ui/table/tableBody'
import { TableHead, TableHeaderItemType } from '@/shared/ui/table/tableHead'

const headers: TableHeaderItemType[] = [
  { id: v1(), title: 'Дата' },
  { id: v1(), title: 'Событие' },
]

type PropsType = {
  className?: string
}

const Events: FC<PropsType> = ({ className = '' }) => {
  const dispatch = useAppDispatch()
  const socket = useSelector(selectEventsSocket)
  const events = useSelector(selectEvents)

  useEffect(() => {
    const onMessage = (event: MessageEvent): void => {
      const data: EventResponse = JSON.parse(event.data)

      dispatch(eventsActions.pushEvent(data))
    }

    if (socket) {
      socket.addEventListener('message', onMessage)
    }

    return () => {
      socket?.removeEventListener('message', onMessage)
    }
  }, [dispatch])

  const rows = useMemo(() => {
    return events.map(item => ({
      id: `${item.event}`,
      item: (
        <>
          <td>{item.ctime}</td>
          <td>{item.event}</td>
        </>
      ),
    }))
  }, [events])

  return (
    <Flex align="center" className={className} direction="column" gap="xs" sx={{ width: '100%' }}>
      <Table highlightOnHover striped>
        <caption>События</caption>
        <TableHead headers={headers} />
        <TableBody rows={rows ?? []} />
      </Table>
    </Flex>
  )
}

const Memo = memo(Events)

export { Memo as Events }
