import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppLayout } from 'components/templates/AppLayout'
import { SearchInput, Box } from 'components/atoms'
import { Snackbar } from 'components/molecules/Snackbar'
import { getSearchSongs } from 'services/search'
import { addFavorite } from 'services/favorite'
import { useUser } from 'hooks/useUser'
import { formatterSongsSearch } from 'utils'
import { setSongsSearch } from 'store/actions/search'
import { ListOfSearch } from 'components/organisms/ListOfSearch'
import { ItemRowSkeleton } from 'components/molecules/ItemRowSkeleton'

export function Search () {
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const { songsSearch } = useSelector(state => state.search)
  const { token } = useUser()

  const onSubmit = (query) => {
    if (query) {
      setIsLoading(true)
      getSearchSongs({ token, query }).then(({ data }) => {
        const { tracks: { items } } = data
        const songsFormatter = formatterSongsSearch(items)
        dispatch(setSongsSearch(songsFormatter))
        setIsLoading(false)
      }).catch(error => {
        console.error(error)
      })
    }
  }

  const handleClose = () => {
    setShow(false)
  }

  const onAddFavorite = (id) => {
    addFavorite({ token, id }).then(({ status }) => {
      if (status === 200) {
        setShow(true)
      }
    })
  }

  return (
    <AppLayout>
      <Box pt='1.8rem'>
        <SearchInput onSubmit={onSubmit} />
        {(isLoading && songsSearch.length > 0) &&
          <Box mt='1rem'>
            <ItemRowSkeleton />
            <ItemRowSkeleton />
          </Box>}

        <Box mt='3rem'>
          {(songsSearch.length > 0 && !isLoading) &&
            <ListOfSearch
              onAddFavorite={onAddFavorite}
              songs={songsSearch}
            />}
        </Box>
      </Box>
      <Snackbar
        severity='success'
        open={show}
        onClose={handleClose}
      >
        Se agregó a Tus me gustas
      </Snackbar>
    </AppLayout>
  )
}
