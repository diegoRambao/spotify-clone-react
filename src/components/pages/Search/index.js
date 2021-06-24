import { useDispatch, useSelector } from 'react-redux'

import { AppLayout } from 'components/templates/AppLayout'
import { SearchInput } from 'components/atoms/SearchInput'
import { Box } from 'components/atoms/Box'
import { getSearchSongs } from 'client'
import { useUser } from 'hooks/useUser'
import { formatterSongsSearch } from 'utils/index'
import { setSongsSearch } from 'store/actions/search'
import { ListOfSongs } from 'components/organisms/ListOfSongs'

export function Search () {
  const dispatch = useDispatch()
  const { songsSearch } = useSelector(state => state.search)
  const { token } = useUser()

  const onSubmit = (query) => {
    getSearchSongs({ token, query }).then(({ data }) => {
      const { tracks: { items } } = data
      console.log(items)
      const songsFormatter = formatterSongsSearch(items)
      dispatch(setSongsSearch(songsFormatter))
    })
  }

  return (
    <AppLayout>
      <section className='container'>
        <Box pt='1.8rem'>
          <SearchInput onSubmit={onSubmit} />
          <Box mt='3rem'>
            <ListOfSongs songs={songsSearch} search />
          </Box>
        </Box>
      </section>
    </AppLayout>
  )
}
