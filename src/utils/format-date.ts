export default function formatDate(date: string) {
  let datetime = new Date(date)

  let fullDate = datetime.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return fullDate
}
