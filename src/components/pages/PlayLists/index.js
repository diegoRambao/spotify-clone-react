import { Navbar } from 'components/organisms/Navbar'
import { Title } from 'components/atoms/Title'
import { ListOfPlaylists } from 'components/organisms/ListOfPlaylists'

export function PlayLists () {
  return (
    <>
      <Navbar />
      <section className='container'>
        <Title mt='1rem'>PlayLists</Title>
        <ListOfPlaylists />
      </section>
    </>
  )
}
