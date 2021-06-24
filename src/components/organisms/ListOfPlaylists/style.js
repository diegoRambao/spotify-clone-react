import styled from 'styled-components'

export const List = styled.ul`
    list-style: none;
    padding: 0;
    
    @media screen and (min-width: 700px) {
        margin-top: 1.6rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        place-items: stretch;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;

        &:first-child {
            overflow: hidden !important;
        }
    }
`
export const ListItem = styled.li`
    margin-bottom: .7rem
`
