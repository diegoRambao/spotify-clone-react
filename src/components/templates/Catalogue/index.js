import { ListOfSongs } from 'components/organisms/ListOfSongs'
import { Navbar } from 'components/organisms/Navbar'
import { Box } from 'components/atoms/Box'
import {
  HeaderContainer,
  HeaderText,
  ImgPlaylist,
  Main,
  SubTitlePlaylist,
  TitlePlaylist
} from './style'
import { formatterSongs } from 'utils'

export function Catalogue ({ imgMain, title, subtitle, lists = [] }) {
  const songs = formatterSongs(lists)
  return (
    <>
      <Navbar />
      <Main>
        <div className='container'>
          <HeaderContainer>

            <ImgPlaylist
              src={imgMain}
              alt={title}
            />
            <HeaderText>
              <p>PLAYLIST</p>
              <TitlePlaylist>{title}</TitlePlaylist>
              <SubTitlePlaylist>{lists?.length || 0} Canciones</SubTitlePlaylist>
            </HeaderText>
          </HeaderContainer>
          <Box mt='2rem'>
            <ListOfSongs songs={songs} />
          </Box>
        </div>
      </Main>
    </>
  )
}
