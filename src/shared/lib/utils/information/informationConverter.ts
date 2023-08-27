export const informationConverter = (characteristics: NonNullable<unknown>): string => {
  const res: string[] = []

  const check = (item: NonNullable<unknown> | string): void => {
    if (typeof item === 'string') {
      res.push(item)
    } else if (typeof item === 'object') {
      Object.values(item).map(el => check(el))
    }
  }

  check(characteristics)

  return res.join(' / ')
}
