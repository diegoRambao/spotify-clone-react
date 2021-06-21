import { useEffect } from 'react'

import { useUser } from 'hooks/useUser'

import { ButtonLink } from '../../atoms/ButtonLink'
import { ContainerLogin } from './style'
import { Logo } from 'icons/Logo'
import { loginUrl, getTokenFromUrl } from 'client'

export function Login () {
  const { setToken } = useUser()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      setToken({ token: _token })
    }
  }, []) // eslint-disable-line

  return (
    <ContainerLogin>
      <div>
        <div style={{ marginBottom: '3.4rem' }}>
          <Logo />
        </div>
        <ButtonLink href={loginUrl}>
          Iniciar Sesión
        </ButtonLink>
      </div>
    </ContainerLogin>
  )
}
