import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Favorites } from 'components/pages/Favorites'
import { Login } from 'components/pages/Login'
import { PlayList } from 'components/pages/PlayList'
import { PlayLists } from 'components/pages/PlayLists'
import { PrivateRoute } from 'routes/PrivateRoute'
import { PublicRoute } from 'routes/PublicRoute'

// URLS

// https://developer.spotify.com/console/get-current-user-saved-tracks/ -> EndPoints Favoritos del usuario
// https://developer.spotify.com/console/playlists/ -> EndPoints Lista de playlist del usuario
// https://developer.spotify.com/console/get-playlist/ -> EndPoint todas las canciones de la playlist del usuario

export function App () {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path='/favorites' component={Favorites} />
          <PrivateRoute exact path='/playlist/:id' component={PlayList} />
          <PrivateRoute exact path='/playlists' component={PlayLists} />
          <PublicRoute restricted exact path='/' component={Login} />
          <PublicRoute restricted exact path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  )
}
