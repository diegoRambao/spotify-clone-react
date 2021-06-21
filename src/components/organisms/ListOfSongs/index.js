import { Cover } from 'components/molecules/Cover'
import { Table, TableHead, TableRow, TableBody } from './style'

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
            <td className='duration'>4 min</td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
