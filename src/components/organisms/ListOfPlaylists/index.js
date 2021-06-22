import { useEffect } from 'react'
import { List, ListItem } from './style'
import { CardPlaylist } from 'components/molecules/CardPlaylist'
import { getPlaylists } from 'client'
import { useSelector, useDispatch } from 'react-redux'
import { SetAllPlaylist } from 'store/actions/playlist'

export function ListOfPlaylists () {
  const dispatch = useDispatch()
  const { user: { token }, playlist: { playlists } } = useSelector(state => state)

  useEffect(() => {
    getPlaylists({ token }).then(({ data: { items } }) => {
      dispatch(SetAllPlaylist(items))
    })
  }, [token, dispatch])

  return (
    <List>
      {playlists.map(playlist => (
        <ListItem key={playlist.id}>
          <CardPlaylist playlist={playlist} />
        </ListItem>
      ))}
    </List>
  )
}
