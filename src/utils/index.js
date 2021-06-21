import dayjs from 'dayjs'

export const formatterSongs = (items) => {
  const formatterSong = items.map((item) => {
    const { added_at: addedAt, track } = item
    const { album: { images, name: albumName }, artists, name, id, duration_ms: durationMs } = track
    const { name: singer } = artists[0]
    const addedAtFormater = dayjs(addedAt).format('DD/MM/YYYY')
    const time = dayjs(durationMs).format('m:ss')
    return {
      id,
      addedAt: addedAtFormater,
      title: name,
      album: albumName,
      img: images[0].url,
      singer,
      duration: time
    }
  })

  return formatterSong
}

export const convertMilisecongsToMinutes = miliseconds => {
  const seconds = Math.ceil(miliseconds / 1000)
  const minutes = Math.ceil(miliseconds / 6000)
  return `${minutes}:${seconds}`
}
