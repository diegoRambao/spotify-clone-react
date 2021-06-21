import { Redirect, Route } from 'react-router-dom'
import { useUser } from 'hooks/useUser'

export function PrivateRoute ({ children, ...rest }) {
  const { isLogged } = useUser()

  if (isLogged) {
    return <Route {...rest}>{children}</Route>
  }

  return <Redirect to='/login' />
}
