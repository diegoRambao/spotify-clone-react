import { ButtonContainer } from './style'

export function Button ({ onClick, children }) {
  return (
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}
