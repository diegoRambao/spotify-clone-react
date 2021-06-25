import { ButtonContainer } from './style'

export function Button ({ onClick, children, bgcolor }) {
  return (
    <ButtonContainer onClick={onClick} bgcolor={bgcolor}>
      {children}
    </ButtonContainer>
  )
}
