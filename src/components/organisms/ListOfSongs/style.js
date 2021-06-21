import styled from 'styled-components'

export const Table = styled.table`
    border: none;
    width:100%
`

export const TableHead = styled.thead`
    display: none;
`

export const TableBody = styled.tbody`

`

export const TableRow = styled.tr`

    td, th {
        padding: .7rem;
        vertical-align: top
    }

    .index, .date, .album {
        display: none;
    }

    .duration {
        text-align: right;
    }
`
