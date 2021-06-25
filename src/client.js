import axios from 'axios'

export const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = 'http://localhost:3000/'
const clientId = '799707c833e443839c79fd8b27349402'
const apiUrl = 'https://api.spotify.com/v1'

const scopes = [
  'user-read-recently-played',
  'user-library-modify',
  'user-library-read',
  'playlist-read-private',
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-collaborative',
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-follow-read',
  'user-follow-modify'
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

export const getFavoriteSongs = ({ token, limit = 20, offset }) => {
  return axios.get(`${apiUrl}/me/tracks?limit=${limit}&offset=${offset}`, { headers: { Authorization: `Bearer ${token}` } })
}
export const addFavorite = ({ token, id }) => {
  return axios.put(`${apiUrl}/me/tracks?ids=${id}`, {}, { headers: { Authorization: `Bearer ${token}` } })
}

export const getPlaylists = ({ token, limit = 20, offset }) => {
  return axios.get(`${apiUrl}/me/playlists?limit=${limit}&offset=${offset}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getPlaylistById = ({ token, id }) => {
  return axios.get(`${apiUrl}/playlists/${id}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getSongsByPlaylistId = ({ token, playlistId, limit = 20, offset = 0 }) => {
  return axios.get(`${apiUrl}/playlists/${playlistId}/tracks/?limit=${limit}&offset=${offset}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getCurrentUser = ({ token }) => {
  return axios.get(`${apiUrl}/me`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getSearchSongs = ({ token, query, type = 'track' }) => {
  return axios.get(`${apiUrl}/search?q=${query}&type=${type}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&show_dialog=true`
