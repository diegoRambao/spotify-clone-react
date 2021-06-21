import { useState } from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './style'
import { Logo } from 'icons/Logo'

export function Navbar () {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <Nav>
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
          <NavLink to='/' activeClassName='active'>
            Diego Rambao
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/'>
              Cerrar Sesión
            </NavBtnLink>
          </NavBtn>
        </NavMenu>
        <Bars onClick={handleClick} />
      </Nav>
    </>
  )
}
