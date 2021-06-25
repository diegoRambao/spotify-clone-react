import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;
`

export const Paragraph = styled.p`
    text-align: center;
    
    @media only screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
`

export const Title = styled.h1`
    font-weight: 900;
    font-size: 5rem;
    margin: 0;

    @media only screen and (min-width: 768px) {
        font-size: 12rem;
    }
`
