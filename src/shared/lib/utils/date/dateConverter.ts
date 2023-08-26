export const dateConverter = (date: Date): string => {
  return (
    new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
      // eslint-disable-next-line no-magic-numbers
      .format(+date * 1000)
      .replace(',', '')
  )
}
