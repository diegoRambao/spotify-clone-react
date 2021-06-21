import { colors } from 'consts/styles'
import styled from 'styled-components'

const TitleH1 = styled.h1`
    color: ${colors.white};
    font-size: 1.1rem;
    margin: 0;
`

export function Title ({ children }) {
  return <TitleH1>{children}</TitleH1>
}
