import { useEffect } from 'react'
import { Catalogue } from 'components/templates/Catalogue'
import favoriteImg from 'assets/images/favorite.png'
import { useSelector, useDispatch } from 'react-redux'
import { getFavoriteSongs } from 'client'
import { AppLayout } from 'components/templates/AppLayout'
import { SetAllFavorite } from 'store/actions/favorite'

export function Favorites () {
  const dispatch = useDispatch()
  const { user: { token }, favorite: { songsFavorites } } = useSelector(state => state)

  useEffect(() => {
    getFavoriteSongs({ token }).then(({ data }) => {
      const { items } = data
      dispatch(SetAllFavorite(items))
    })
  }, [token, dispatch])

  return (
    <AppLayout>
      <Catalogue imgMain={favoriteImg} title='Canciones que te gustan' lists={songsFavorites} />
    </AppLayout>
  )
}
