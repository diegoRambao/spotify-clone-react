import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppLayout } from 'components/templates/AppLayout'
import { SearchInput, Box } from 'components/atoms'
import { getSearchSongs } from 'client'
import { useUser } from 'hooks/useUser'
import { formatterSongsSearch } from 'utils'
import { setSongsSearch } from 'store/actions/search'
import { ListOfSongs } from 'components/organisms/ListOfSongs'
import { ItemRowSkeleton } from 'components/molecules/ItemRowSkeleton'

export function Search () {
  const [isLoading, setIsLoading] = useState(false)
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
        console.log(error)
      })
    }
  }

  return (
    <AppLayout>
      <section className='container'>
        <Box pt='1.8rem'>
          <SearchInput onSubmit={onSubmit} />
          {(isLoading && songsSearch.length > 0) &&
            <Box mt='1rem'>
              <ItemRowSkeleton />
              <ItemRowSkeleton />
            </Box>}

          <Box mt='3rem'>
            {(songsSearch.length > 0 && !isLoading) && <ListOfSongs songs={songsSearch} search />}
          </Box>
        </Box>
      </section>
    </AppLayout>
  )
}
