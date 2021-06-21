import styled from 'styled-components'

export const Main = styled.section`
    margin-top: 1rem;
`
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImgPlaylist = styled.img`
    border-radius: 5px;
    height: 140px;
    width: 140px;
`

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        display: none;
    }
`

export const TitlePlaylist = styled.h2`
    margin: 0;
    margin-top: 1rem;
`

export const SubTitlePlaylist = styled.h6`
    margin: 0;
    font-size: .9rem;
    font-weight: 400;
    margin-top: 5px;
`
