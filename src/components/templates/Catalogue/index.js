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
import { Skeleton } from 'components/atoms'

export function Catalogue ({ imgMain, title, lists = [], handleViewMore, hasMore, total = 0 }) {
  const songs = formatterSongs(lists)
  return (
    <Main>
      <HeaderContainer>
        {imgMain
          ? <ImgPlaylist
              className='animate__fadeIn'
              src={imgMain}
              alt={title}
            />
          : <Skeleton width='4rem' height='4rem' variant='rect' />}

        <HeaderText>
          <p>PLAYLIST</p>
          <TitlePlaylist className='animate__fadeIn'>{title}</TitlePlaylist>
          <SubTitlePlaylist className='animate__fadeIn'>{total} Canciones</SubTitlePlaylist>
        </HeaderText>
      </HeaderContainer>
      <Box mt='2rem'>
        <ListOfSongs songs={songs} handleViewMore={handleViewMore} hasMore={hasMore} />
      </Box>
    </Main>
  )
}
