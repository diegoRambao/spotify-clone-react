import dayjs from 'dayjs'

export const formatterSong = (item) => {
  const { added_at: addedAt, track } = item
  const songBasicInfo = extractBasicInformationSong(track)
  const addedAtFormater = dayjs(addedAt).format('DD/MM/YYYY')

  return {
    addedAt: addedAtFormater,
    ...songBasicInfo
  }
}

export const extractBasicInformationSong = song => {
  const { album: { images, name: albumName }, artists, name, id, duration_ms: durationMs } = song
  const { name: singer } = artists[0]
  const time = dayjs(durationMs).format('m:ss')

  return {
    id,
    album: albumName,
    img: images[0].url,
    title: name,
    singer,
    duration: time
  }
}

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}

export const formatterSongs = (items) => items.length > 0
  ? items.map((item) => formatterSong(item))
  : []

export const formatterSongsSearch = (items) => items.length > 0
  ? items.map((item) => extractBasicInformationSong(item))
  : []

export const convertMilisecongsToMinutes = miliseconds => {
  const seconds = Math.ceil(miliseconds / 1000)
  const minutes = Math.ceil(miliseconds / 6000)
  return `${minutes}:${seconds}`
}

export const parseStringToJson = text => {
  return JSON.parse(text)
}

export const firstLeetterToUpperCase = text => text.toString().charAt(0).toUpperCase()
