import { environment } from 'utils/environment'
import axios from 'axios'

export const getSearchSongs = ({ token, query, type = 'track' }) => {
  return axios.get(`${environment.apiUrl}/search?q=${query}&type=${type}`, { headers: { Authorization: `Bearer ${token}` } })
}
