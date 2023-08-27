import { FC, memo, useCallback, useEffect, useMemo } from 'react'

import { Button, Flex, Loader, Pagination, Table } from '@mantine/core'
import { useSelector } from 'react-redux'
import { v1 } from 'uuid'

import { selectUsers } from '../module/selectors/selectUsers'
import { selectUsersLimit } from '../module/selectors/selectUsersLimit'
import { selectUsersPage } from '../module/selectors/selectUsersPage'
import { selectUsersTotal } from '../module/selectors/selectUsersTotal'
import { usersActions } from '../module/slice/usersSlice'
import { getUsers } from '../module/thunks/getUsers'

import { selectUsersIsLoading } from '@/features/users/module/selectors/selectUsersIsLoading'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { TableBody } from '@/shared/ui/table/tableBody'
import { TableHead, TableHeaderItemType } from '@/shared/ui/table/tableHead'

const headers: TableHeaderItemType[] = [
  { id: v1(), title: 'ID' },
  { id: v1(), title: 'Имя' },
  { id: v1(), title: 'Роль' },
  { id: v1(), title: 'Дата создания' },
  { id: v1(), title: 'Действия' },
]

type PropsType = {
  className?: string
}

const Users: FC<PropsType> = ({ className = '' }) => {
  const dispatch = useAppDispatch()
  const users = useSelector(selectUsers)
  const total = useSelector(selectUsersTotal)
  const limit = useSelector(selectUsersLimit)
  const page = useSelector(selectUsersPage)
  const isLoading = useSelector(selectUsersIsLoading)

  const rows = useMemo(() => {
    return users.map(item => ({
      id: `${item.id}`,
      item: (
        <>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.role}</td>
          <td>{item.ctime}</td>
        </>
      ),
    }))
  }, [users])

  const onChangePage = useCallback(
    (value: number): void => {
      dispatch(usersActions.changePage(value - 1))
    },
    [dispatch]
  )

  const deleteUser = useCallback(
    (id: string): void => {
      dispatch(usersActions.deleteUser(id))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(getUsers({ limit, offset: page * limit }))
  }, [dispatch, limit, page])

  if (isLoading) {
    return (
      <Flex
        align="center"
        direction="row"
        gap="md"
        justify="center"
        mih={300}
        sx={{ width: '100%' }}
        wrap="wrap"
      >
        <Loader />
      </Flex>
    )
  }

  return (
    <Flex align="center" className={className} direction="column" gap="xs" sx={{ width: '100%' }}>
      <Table highlightOnHover striped>
        <caption>Список пользователь</caption>
        <TableHead headers={headers} />
        <TableBody rows={rows ?? []}>
          {id => (
            <td>
              <Button compact color="red" variant="outline" onClick={() => deleteUser(id)}>
                Удалить
              </Button>
            </td>
          )}
        </TableBody>
      </Table>
      {total && <Pagination total={total / limit} value={page + 1} onChange={onChangePage} />}
    </Flex>
  )
}

const Memo = memo(Users)

export { Memo as Users }
