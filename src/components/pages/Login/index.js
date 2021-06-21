import { ButtonLink } from '../../atoms/ButtonLink'
import { ContainerLogin } from './style'
import { Logo } from 'icons/Logo'

export function Login () {
  return (
    <ContainerLogin>
      <div>
        <div style={{ marginBottom: '5rem' }}>
          <Logo />
        </div>
        <ButtonLink href=''>
          Iniciar Sesión
        </ButtonLink>
      </div>
    </ContainerLogin>
  )
}
