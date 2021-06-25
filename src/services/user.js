import { environment } from 'utils/environment'
import axios from 'axios'

export const getCurrentUser = ({ token }) => {
  return axios.get(`${environment.apiUrl}/me`, { headers: { Authorization: `Bearer ${token}` } })
}
