import styled from 'styled-components'

const Container = styled.div`
    margin-top: ${props => props.mt};
    padding-top: ${props => props.pt};
`

export function Box ({ children, mt, pt }) {
  return <Container mt={mt} pt={pt}>{children}</Container>
}
