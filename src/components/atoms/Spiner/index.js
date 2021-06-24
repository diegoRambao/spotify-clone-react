import { colors } from 'consts/styles'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% { 
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const Container = styled.div`
    border: 4px solid rgba(0, 0, 0, .1);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border-left-color: ${colors.primary};
    
    animation: ${spin} 650ms linear infinite;
`

export function Spiner () {
  return <Container />
}
