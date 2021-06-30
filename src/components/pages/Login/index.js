import { useEffect } from 'react'

import { ButtonLink } from 'components/atoms/ButtonLink'
import { ContainerLogin } from './style'
import { useUser } from 'hooks/useUser'

import { Logo } from 'icons/Logo'
import { getTokenFromUrl } from 'utils'
import { loginUrl } from 'client'
import * as authorizationService from 'services/authorization'

export function Login () {
  const { setToken } = useUser()

  useEffect(() => {
    const code = getTokenFromUrl()

    if (code) {
      authorizationService.getAuthorizationCode({ code }).then(response => {
        setToken({ token: response })
      })
    }
  }, []) // eslint-disable-line

  return (
    <ContainerLogin>
      <div>
        <div style={{ marginBottom: '3.4rem' }}>
          <Logo width='16rem' />
        </div>
        <ButtonLink href={loginUrl}>
          Iniciar Sesión
        </ButtonLink>
      </div>
    </ContainerLogin>
  )
}
