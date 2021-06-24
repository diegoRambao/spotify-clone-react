import { ListOfSongs } from 'components/organisms/ListOfSongs'
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

export function Catalogue ({ imgMain, title, lists = [] }) {
  const songs = formatterSongs(lists)
  return (

    <Main>
      <div className='container'>
        <HeaderContainer>
          <ImgPlaylist
            className='animate__fadeIn'
            src={imgMain}
            alt={title}
          />
          <HeaderText>
            <p>PLAYLIST</p>
            <TitlePlaylist className='animate__fadeIn'>{title}</TitlePlaylist>
            <SubTitlePlaylist className='animate__fadeIn'>{lists?.length || 0} Canciones</SubTitlePlaylist>
          </HeaderText>
        </HeaderContainer>
        <Box mt='2rem'>
          <ListOfSongs songs={songs} />
        </Box>
      </div>
    </Main>
  )
}
