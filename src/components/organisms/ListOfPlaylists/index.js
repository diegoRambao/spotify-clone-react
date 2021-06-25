import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { List, ListItem } from './style'
import { CardPlaylist } from 'components/molecules/CardPlaylist'
import { getPlaylists } from 'services/playlist'
import { SetAllPlaylist } from 'store/actions/playlist'
import { Button } from 'components/atoms/Button'
import { Box } from 'components/atoms/Box'

export function ListOfPlaylists () {
  const dispatch = useDispatch()
  const [hasMore, setHasMore] = useState(true)
  const { user: { token }, playlist: { playlists } } = useSelector(state => state)

  useEffect(() => {
    fetchMoreData()
  }, []) // eslint-disable-line

  const fetchMoreData = () => {
    getPlaylists({ token, offset: playlists.length }).then(({ data: { items } }) => {
      if (items.length === 0) {
        setHasMore(false)
        return
      }
      dispatch(SetAllPlaylist(items))
    })
  }

  return (
    <>
      <List>
        {playlists.map(playlist => (
          <ListItem key={playlist.id}>
            <CardPlaylist playlist={playlist} />
          </ListItem>
        ))}
      </List>
      <Box className='d-flex justify-content-center' mt='3rem'>
        {hasMore
          ? <Button onClick={() => fetchMoreData()}>Ver mas</Button>
          : <h3>¡LLegaste al final!</h3>}
      </Box>
    </>
  )
}
