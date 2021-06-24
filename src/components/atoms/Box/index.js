import styled from 'styled-components'

const Container = styled.div`
    margin-top: ${props => props.mt};
    padding-top: ${props => props.pt};
    margin-right: ${props => props.mr};
    margin-left: ${props => props.ml};
`

export function Box ({ children, mt, mr, ml, pt, className }) {
  return (
    <Container
      className={className}
      ml={ml}
      mr={mr}
      mt={mt}
      pt={pt}
    >{children}
    </Container>
  )
}
