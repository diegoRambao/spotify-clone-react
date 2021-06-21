import { ButtonContainer } from './style'

export function ButtonLink ({ href, children }) {
  return (
    <ButtonContainer href={href}>
      {children}
    </ButtonContainer>
  )
}
