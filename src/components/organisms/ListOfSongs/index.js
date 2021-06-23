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
          <th>Fecha incorporación</th>
          <th>Duración</th>
        </TableRow>
      </TableHead>
      <TableBody>
        {songs?.map((song, index) => (
          <TableRow key={index}>
            <td className='index'>{index + 1}</td>
            <td className='title'>
              <Cover
                img={song.img}
                subtitle={song.singer}
                title={song.title}
              />
            </td>
            <td className='album'>{song.album}</td>
            <td className='date'>{song.addedAt}</td>
            <td className='duration'>
              <MdFavorite color={colors.primary} width='2em' height='2em' />
              <span style={{ marginLeft: '.5rem' }}>{song.duration}</span>
            </td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
