import { useDispatch, useSelector } from 'react-redux'
import { SetToken } from 'store/actions/user'
import { useHistory } from 'react-router-dom'

export function useUser () {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.user)
  const history = useHistory()

  const setToken = ({ token }) => {
    dispatch(SetToken(token))
    window.localStorage.setItem('token', token)
    history.replace('playlists')
  }

  return {
    isLogged: token,
    setToken
  }
}
