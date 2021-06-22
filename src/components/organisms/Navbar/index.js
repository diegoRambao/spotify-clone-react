import { useState } from 'react'
import { Nav, NavContainer, NavLink, Bars, NavMenu, NavBtnLogout } from './style'
import { Logo } from 'icons/Logo'
import { useUser } from 'hooks/useUser'
import { UserWidget } from 'components/molecules/UserWidget'
import { Skeleton } from 'components/atoms/Skeleton'
import { Box } from 'components/atoms/Box'

export function Navbar () {
  const [clicked, setClicked] = useState(false)
  const { logout, user } = useUser()

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <Nav>
        <NavContainer className='container'>
          <NavLink to='/'>
            <Logo width='120' />
          </NavLink>
          <NavMenu open={clicked}>
            <NavLink to='/playlists' activeClassName='active'>
              Inicio
            </NavLink>
            <NavLink to='/favorites' activeClassName='active'>
              Favoritos
            </NavLink>
            <Box>
              {user === null && <Skeleton width='2rem' height='2rem' variant='circle' />}
              {user !== null && <UserWidget name={user.name} img={user.image} />}
            </Box>
            <NavBtnLogout onClick={logout}>
              Cerrar Sesión
            </NavBtnLogout>
          </NavMenu>
          <Bars onClick={handleClick} />
        </NavContainer>
      </Nav>
    </>
  )
}
