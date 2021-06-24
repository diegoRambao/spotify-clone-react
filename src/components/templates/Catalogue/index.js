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

export function Catalogue ({ imgMain, title, lists = [], handleViewMore, hasMore, total = 0 }) {
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
            <SubTitlePlaylist className='animate__fadeIn'>{total} Canciones</SubTitlePlaylist>
          </HeaderText>
        </HeaderContainer>
        <Box mt='2rem'>
          <ListOfSongs songs={songs} handleViewMore={handleViewMore} hasMore={hasMore} />
        </Box>
      </div>
    </Main>
  )
}
