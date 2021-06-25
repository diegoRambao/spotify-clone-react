import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SetToken, RemoveToken, SetUser } from 'store/actions/user'
import { getCurrentUser as getCurrentUserService } from 'services/user'

export function useUser () {
  const dispatch = useDispatch()
  const { token, user } = useSelector(state => state.user)
  const history = useHistory()

  const setToken = ({ token }) => {
    dispatch(SetToken(token))
    getCurrentUser({ token })
    window.localStorage.setItem('token', token)
    history.replace('playlists')
  }

  const getCurrentUser = ({ token }) => {
    getCurrentUserService({ token }).then(({ data }) => {
      const { display_name: name, images } = data
      const user = { name, image: images[0]?.url || null }
      window.localStorage.setItem('currentUser', JSON.stringify(user))
      dispatch(SetUser(user))
    })
  }

  const logout = () => {
    dispatch(RemoveToken())
    window.localStorage.removeItem('token')
  }

  return {
    isLogged: token,
    token,
    logout,
    setToken,
    user
  }
}
