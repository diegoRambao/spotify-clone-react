import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUser } from 'hooks/useUser'

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isLogged } = useUser()

  return (
    <Route
      {...rest} render={props => (
        isLogged && restricted
          ? <Redirect to='/playlists' />
          : <Component {...props} />
      )}
    />
  )
}
