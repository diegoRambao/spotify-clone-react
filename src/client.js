import axios from 'axios'

export const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = 'http://localhost:3000/'
const clientId = '799707c833e443839c79fd8b27349402'
const apiUrl = 'https://api.spotify.com/v1'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-read-private',
  'user-read-email',
  'user-modify-playback-state',
  'user-library-read',
  'playlist-read-private'
]

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

export const getFavoriteSongs = ({ token }) => {
  return axios.get(`${apiUrl}/me/tracks`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getPlaylists = ({ token }) => {
  return axios.get(`${apiUrl}/me/playlists`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getPlaylistById = ({ token, id }) => {
  return axios.get(`${apiUrl}/playlists/${id}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getCurrentUser = ({ token }) => {
  return axios.get(`${apiUrl}/me`, { headers: { Authorization: `Bearer ${token}` } })
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&show_dialog=true`
