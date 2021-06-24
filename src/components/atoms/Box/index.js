import styled from 'styled-components'

const Container = styled.div`
    margin-top: ${props => props.mt};
    padding-top: ${props => props.pt};
`

export function Box ({ children, mt, pt, className }) {
  return <Container mt={mt} pt={pt} className={className}>{children}</Container>
}
