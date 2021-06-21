import { List, ListItem } from './style'
import { CardPlaylist } from 'components/molecules/CardPlaylist'

export function ListOfPlaylists () {
  return (
    <List>
      <ListItem>
        <CardPlaylist />
      </ListItem>
      <ListItem>
        <CardPlaylist />
      </ListItem>
      <ListItem>
        <CardPlaylist />
      </ListItem>
    </List>
  )
}
