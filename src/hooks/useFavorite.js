import { useState, useEffect } from 'react'
import { SetAllFavorite, ResetAllFavorite } from 'store/actions/favorite'

import { useSelector, useDispatch } from 'react-redux'
import * as favoriteService from 'services/favorite'
import { useUser } from 'hooks/useUser'

export function useFavorite () {
  const dispatch = useDispatch()
  const { refreshToken } = useUser()
  const [hasMore, setHasMore] = useState(true)
  const [total, setTotal] = useState(0)
  const { user: { token }, favorite: { songsFavorites } } = useSelector(state => state)

  useEffect(() => {
    fetchMoreData()

    return () => {
      dispatch(ResetAllFavorite())
    }
  }, [token, dispatch]) // eslint-disable-line

  const fetchMoreData = () => {
    favoriteService.getFavoriteSongs({ token: token.access_token, offset: songsFavorites.length })
      .then((res) => {
        const { data, status } = res
        if (status === 200) {
          const { items, total } = data
          setTotal(total)
          if (items.length === 0) {
            setHasMore(false)
            return
          }
          dispatch(SetAllFavorite(items))
        }
      }).catch(error => {
        console.error(error)
        if (error.response.status === 401) {
          console.log('Voy a refrescar el token OK...')
          console.log(token)
          refreshToken({ refreshToken: token.refresh_token })
        }
      })
  }

  return {
    songsFavorites,
    hasMore,
    fetchMoreData,
    total
  }
}
