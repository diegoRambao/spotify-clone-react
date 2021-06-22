import styled from 'styled-components'

export const Main = styled.section`
    padding-top: 1rem;

    @media screen and (min-width: 768px) {
        padding-top: 1.8rem;
    }
`
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and ( min-width: 768px ) {
        flex-direction: row;
        gap: 2.4rem;
    }
`

export const ImgPlaylist = styled.img`
    border-radius: 5px;
    height: 140px;
    width: 140px;

    @media screen and ( min-width: 768px ) {
        width: 200px;
        height: 200px;
    }
`

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and ( min-width: 768px ) {
        align-items: flex-start;
    }

    p {
        display: none;

        @media screen and ( min-width: 768px ) {
            display: block;
            margin: 0;
        }
    }
`

export const TitlePlaylist = styled.h2`
    margin: 0;

    @media screen and ( min-width: 768px ) {
        font-size: 50px;
        font-weight: 800;
    }
`

export const SubTitlePlaylist = styled.h6`
    margin: 0;
    font-size: .9rem;
    font-weight: 400;
    margin-top: 5px;

    @media screen and ( min-width: 768px ) {
        font-weight: 500;
    }
`
