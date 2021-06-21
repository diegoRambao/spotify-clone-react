import styled from 'styled-components'

const Container = styled.div`
    margin-top: ${props => props.mt};
`

export function Box ({ children, mt }) {
  return <Container mt={mt}>{children}</Container>
}
