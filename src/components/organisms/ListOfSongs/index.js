import { MdFavorite } from 'react-icons/md'

import { Table, TableHead, TableRow, TableBody } from './style'
import { Cover } from 'components/molecules/Cover'
import { Box } from 'components/atoms/Box'
import { Button } from 'components/atoms/Button'
import { colors } from 'consts/styles'
import { ItemRowSkeleton } from 'components/molecules/ItemRowSkeleton'

export function ListOfSongs ({ songs, search, hasMore, handleViewMore, favorite }) {
  return (
    <>
      {songs.length === 0 && <ItemRowSkeleton />}
      {songs.length > 0 &&
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <th>#</th>
                <th>Titulo</th>
                <th>Album</th>
                {!search && <th>Fecha incorporación</th>}
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
                  {!search && <td className='date'>{song.addedAt}</td>}
                  <td className='duration'>
                    {favorite && <MdFavorite color={colors.primary} width='2em' height='2em' />}
                    <span style={{ marginLeft: '.5rem' }}>{song.duration}</span>
                  </td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box className='d-flex justify-content-center' mt='3rem'>
            {hasMore
              ? <Button onClick={() => handleViewMore()}>Ver mas</Button>
              : <h3>¡LLegaste al final!</h3>}

          </Box>
        </div>}

    </>
  )
}
