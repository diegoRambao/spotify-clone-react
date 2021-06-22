import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Favorites } from 'components/pages/Favorites'
import { Login } from 'components/pages/Login'
import { PlayList } from 'components/pages/PlayList'
import { PlayLists } from 'components/pages/PlayLists'
import { PrivateRoute } from 'routes/PrivateRoute'
import { PublicRoute } from 'routes/PublicRoute'

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
