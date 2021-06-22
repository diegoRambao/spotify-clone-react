import { Title } from 'components/atoms/Title'
import { ListOfPlaylists } from 'components/organisms/ListOfPlaylists'
import { AppLayout } from 'components/templates/AppLayout'

export function PlayLists () {
  return (
    <AppLayout>
      <section className='container'>
        <Title mt='1rem'>PlayLists</Title>
        <ListOfPlaylists />
      </section>
    </AppLayout>
  )
}
