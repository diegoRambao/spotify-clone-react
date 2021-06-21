import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Favorites } from 'components/pages/Favorites'
import { Login } from 'components/pages/Login'
import { PlayList } from 'components/pages/PlayList'
import { PlayLists } from 'components/pages/PlayLists'

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
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/playlist' component={PlayList} />
          <Route exact path='/playlists' component={PlayLists} />
        </Switch>
      </Router>
    </>
  )
}
