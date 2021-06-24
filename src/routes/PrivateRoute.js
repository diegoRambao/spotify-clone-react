import { Redirect, Route } from 'react-router-dom'
import { useUser } from 'hooks/useUser'

export function PrivateRoute ({ component: Component, ...rest }) {
  const { isLogged } = useUser()

  return (
    <Route
      {...rest} render={props => (
        isLogged
          ? <Component {...props} />
          : <Redirect to='/login' />
      )}
    />
  )

  // if (isLogged) {
  //   return <Route {...rest}>{children}</Route>
  // }

  // return <Redirect to='/login' />
}
