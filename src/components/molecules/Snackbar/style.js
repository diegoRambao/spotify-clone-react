import { colors } from 'consts/styles'
import styled, { keyframes } from 'styled-components'

const fadein = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}
`

export const ContainerWith = styled.div`
    position: absolute;
    width:100%;
`

export const Container = styled.div`
    position: fixed;
    z-index: 1900;
    bottom: 1.6rem;
    left: 50%;
    transform: translateX(-50%);
    height: auto;
    padding: 0.625rem 1rem;
    border-radius: 0.75rem;
    border: transparent;
    background-color: ${props => colors.snackbar[props.severity]};
    color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    p {
      margin:  0;
      font-weight: 600;
      margin-left: 0.5rem;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    animation: ${fadein} 0.5s;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.875rem;
    padding: 0;
    margin-left: 1rem;
    height: 1.75rem;
    width: 1.75rem;
    text-align: center;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    color: white;
    cursor: pointer;
`
