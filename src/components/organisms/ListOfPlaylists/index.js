import { useState, useEffect } from 'react'
import { List, ListItem } from './style'
import { CardPlaylist } from 'components/molecules/CardPlaylist'
import { getPlaylists } from 'client'
import { useSelector } from 'react-redux'

export function ListOfPlaylists () {
  const [playslists, setPlayslists] = useState([])
  const { token } = useSelector(state => state.user)

  useEffect(() => {
    getPlaylists({ token }).then(({ data: { items } }) => {
      setPlayslists(items)
    })
  }, [token])

  return (
    <List>
      {playslists.map(playlist => (
        <ListItem key={playlist.id}>
          <CardPlaylist playlist={playlist} />
        </ListItem>
      ))}
    </List>
  )
}
