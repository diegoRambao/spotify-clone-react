import { useEffect, useState } from 'react'
import { Catalogue } from 'components/templates/Catalogue'
import favoriteImg from 'assets/images/favorite.png'
import { useSelector, useDispatch } from 'react-redux'
import { getFavoriteSongs } from 'client'
import { AppLayout } from 'components/templates/AppLayout'
import { SetAllFavorite } from 'store/actions/favorite'

export function Favorites () {
  const dispatch = useDispatch()
  const [hasMore, setHasMore] = useState(true)
  const [total, setTotal] = useState(0)
  const { user: { token }, favorite: { songsFavorites } } = useSelector(state => state)

  useEffect(() => {
    fetchMoreData()
  }, [token, dispatch]) // eslint-disable-line

  const fetchMoreData = () => {
    getFavoriteSongs({ token, offset: songsFavorites.length }).then(({ data }) => {
      const { items, total } = data
      setTotal(total)
      if (items.length === 0) {
        setHasMore(false)
        return
      }
      dispatch(SetAllFavorite(items))
    })
  }

  return (
    <AppLayout>
      <Catalogue
        imgMain={favoriteImg}
        title='Canciones que te gustan'
        lists={songsFavorites}
        hasMore={hasMore}
        handleViewMore={fetchMoreData}
        total={total}
      />
    </AppLayout>
  )
}
