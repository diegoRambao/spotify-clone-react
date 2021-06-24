import { Title } from 'components/atoms/Title'
import { ListOfPlaylists } from 'components/organisms/ListOfPlaylists'
import { AppLayout } from 'components/templates/AppLayout'

export function PlayLists () {
  return (
    <AppLayout>
      <Title mt='1rem'>PlayLists</Title>
      <ListOfPlaylists />
    </AppLayout>
  )
}
