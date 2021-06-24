import styled from 'styled-components'
import { colors } from 'consts/styles'

export const ButtonContainer = styled.button`
    border-radius: 20px;
    background: ${colors.primary};
    padding: 10px 22px;
    color: ${colors.white};
    border: none;
    outline: none;
    cursor: 0;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;
    width: fit-content;
    font-weight: 700;

    &:hover {
        transition: all 0.2s ease-in-out;
    }
`
