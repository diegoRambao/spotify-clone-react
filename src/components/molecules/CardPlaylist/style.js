import styled from 'styled-components'
import { colors } from 'consts/styles'
import { Link as Navigate } from 'react-router-dom'

export const Link = styled(Navigate)`
    text-decoration: none;
    color: ${colors.white};
    padding: 14px;
    display: block;
    background-color: ${colors.darkGrayLight};
    width: auto;
    height: 90%;
    border-radius: 3px;
`

export const CardContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media screen and (min-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const CardImg = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 4px;

    @media screen and (min-width: 768px) {
        width: 100%;
        height: auto;
    }
`

export const CardBody = styled.div``

export const CardTitle = styled.h4`
    margin: 0;
    font-size: 1rem;
    margin-bottom: 5px;

    @media screen and (min-width: 768px) {
        font-size: 1.125rem;
    }
`

export const CardSubtitle = styled.h6`
    margin: 0;
    font-weight: 400;
    font-size: .8rem;

    @media screen and (min-width: 768px) {
        font-size: .9rem;
    }
`
