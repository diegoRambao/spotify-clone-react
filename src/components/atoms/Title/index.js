import { colors } from 'consts/styles'
import styled from 'styled-components'

const TitleH1 = styled.h1`
    color: ${colors.white};
    font-size: 1.1rem;
    margin: 0;
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
`

export function Title ({ children, mt = 0, mb = 0 }) {
  return <TitleH1 mt={mt} mb={mb}>{children}</TitleH1>
}
