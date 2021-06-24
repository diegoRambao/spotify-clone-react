import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { colors } from 'consts/styles'

export const InputRoot = styled.div`
    border: none;
    border-radius: 3rem;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    gap: .4rem;
    background-color: ${colors.white};
    transition: background-color 0.5 ease-in-out;
    max-width: 30rem;
    margin: 0 auto;
`

export const TextField = styled.input`
    border: none;
    background-color: transparent;
    width: 100%;
    text-overflow: ellipsis;
    color: ${colors.black};
    font-weight: 600;
    text-transform: none;
    letter-spacing: normal;
    line-height: 16px;
    padding: 0.4rem 0;

    &:focus {
        outline: none;
    }
    &::selection {
        background-color: ${colors.primary};
        color: ${colors.white};
    }
`

export const Icon = styled(FiSearch)`
    color: ${colors.black}
`
