import { environment } from 'utils/environment'
import axios from 'axios'

export const getPlaylists = ({ token, limit = 20, offset }) => {
  return axios.get(`${environment.apiUrl}/me/playlists?limit=${limit}&offset=${offset}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getPlaylistById = ({ token, id }) => {
  return axios.get(`${environment.apiUrl}/playlists/${id}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getSongsByPlaylistId = ({ token, playlistId, limit = 20, offset = 0 }) => {
  return axios.get(`${environment.apiUrl}/playlists/${playlistId}/tracks/?limit=${limit}&offset=${offset}`, { headers: { Authorization: `Bearer ${token}` } })
}
