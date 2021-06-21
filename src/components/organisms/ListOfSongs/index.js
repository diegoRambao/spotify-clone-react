import { Cover } from 'components/molecules/Cover'
import { MdFavorite } from 'react-icons/md'
import { Table, TableHead, TableRow, TableBody } from './style'
import { colors } from 'consts/styles'

export function ListOfSongs ({ songs }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <th>#</th>
          <th>Titulo</th>
          <th>Album</th>
          <th>Fecha</th>
          <th>Duración</th>
        </TableRow>
      </TableHead>
      <TableBody>
        {songs?.map((songs, index) => (
          <TableRow key={index}>
            <td className='index'>{index + 1}</td>
            <td className='title'>
              <Cover
                img={songs.img}
                subtitle={songs.singer}
                title={songs.title}
              />
            </td>
            <td className='album'>Album 1</td>
            <td className='date'>2002/02/02</td>
            <td className='duration'>
              <MdFavorite color={colors.primary} width='2em' height='2em' />
              <span style={{ marginLeft: '.5rem' }}>4 min</span>
            </td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
