import { environment } from 'utils/environment'
import axios from 'axios'

export const getFavoriteSongs = ({ token, limit = 20, offset }) => {
  return axios.get(`${environment.apiUrl}/me/tracks?limit=${limit}&offset=${offset}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const addFavorite = ({ token, id }) => {
  return axios.put(`${environment.apiUrl}/me/tracks?ids=${id}`, {}, { headers: { Authorization: `Bearer ${token}` } })
}
