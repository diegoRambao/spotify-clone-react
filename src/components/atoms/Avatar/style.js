import styled from 'styled-components'

export const AvatarContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    overflow: hidden;
    position: relative;
    font-size: 1.25rem;
    align-items: center;
    flex-shrink: 0;
    line-height: 1;
    user-select: none;
    border-radius: 50%;
    justify-content: center;
    color: #121212;
    background-color: #757575;
`

export const AvatarImage = styled.img`
    color: transparent;
    width: 100%;
    height: 100%;
    object-fit: cover;
    text-align: center;
`
