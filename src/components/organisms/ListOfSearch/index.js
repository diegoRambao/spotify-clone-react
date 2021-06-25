import { List, ListItem } from './style'
import { Box, Button } from 'components/atoms'
import { Cover } from 'components/molecules/Cover'
import { MdFavorite } from 'react-icons/md'
import { colors } from 'consts/styles'

export function ListOfSearch ({ songs, onAddFavorite }) {
  return (
    <>
      <h3>Canciones</h3>
      <List>
        {songs.map(({ id, img, title, singer, duration }) => (
          <ListItem key={id}>
            <Box className='d-flex justify-content-between align-items-center'>
              <Cover
                img={img}
                title={title}
                subtitle={singer}
              />
              <Box className='d-flex align-items-center'>
                <Button bgcolor={colors.white} onClick={() => onAddFavorite(id)}>
                  <MdFavorite color={colors.darkGray} />
                </Button>
                <Box ml='1rem'>{duration}</Box>
              </Box>
            </Box>
          </ListItem>)
        )}
      </List>
    </>
  )
}
