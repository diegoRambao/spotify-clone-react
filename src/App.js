import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from 'components/pages/Login'
import { PlayLists } from './components/pages/PlayLists'

// URLS

// https://developer.spotify.com/console/get-current-user-saved-tracks/ -> EndPoints Favoritos del usuario
// https://developer.spotify.com/console/playlists/ -> EndPoints Lista de playlist del usuario
// https://developer.spotify.com/console/get-playlist/ -> EndPoint todas las canciones de la playlist del usuario

export function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/playlists' component={PlayLists} />
        </Switch>
      </Router>
    </>
  )
}
