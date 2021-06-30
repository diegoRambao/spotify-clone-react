import { useState, useEffect } from 'react'
import { SetAllFavorite, ResetAllFavorite } from 'store/actions/favorite'

import { useSelector, useDispatch } from 'react-redux'
import * as favoriteService from 'services/favorite'

export function useFavorite () {
  const dispatch = useDispatch()
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
    favoriteService.getFavoriteSongs({ token: token.access_token, offset: songsFavorites.length }).then(({ data }) => {
      const { items, total } = data
      setTotal(total)
      if (items.length === 0) {
        setHasMore(false)
        return
      }
      dispatch(SetAllFavorite(items))
    })
  }

  return {
    songsFavorites,
    hasMore,
    fetchMoreData,
    total
  }
}
