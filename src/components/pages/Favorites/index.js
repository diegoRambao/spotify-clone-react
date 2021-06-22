import { useState, useEffect } from 'react'
import { Catalogue } from 'components/templates/Catalogue'
import favoriteImg from 'assets/images/favorite.png'
import { useSelector } from 'react-redux'
import { getFavoriteSongs } from 'client'

export function Favorites () {
  const [songs, setSongs] = useState([])
  const { token } = useSelector(state => state.user)

  useEffect(() => {
    getFavoriteSongs({ token }).then(({ data }) => {
      const { items } = data
      setSongs(items)
    })
  }, [token])

  return (
    <>
      <Catalogue imgMain={favoriteImg} title='Canciones que te gustan' lists={songs} />
    </>
  )
}
