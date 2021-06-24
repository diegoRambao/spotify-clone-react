import styled from 'styled-components'

export const Table = styled.table`
    border-collapse: collapse;
    width:100%
`

export const TableHead = styled.thead`
    display: none;

    @media only screen and (min-width: 768px) {
        display: table-header-group;
        border-bottom: 1px solid #585858;
    }
`

export const TableBody = styled.tbody`
    width: 100%;
`

export const TableRow = styled.tr`

    td, th {
        padding: .7rem;
        vertical-align: top;
        text-align: left;
    }

    .index, .date, .album {
        display: none;

        @media only screen and (min-width: 768px) {
            display: table-cell
        }
    }
`
