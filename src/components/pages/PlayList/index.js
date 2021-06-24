import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Catalogue } from 'components/templates/Catalogue'
import { getPlaylistById, getSongsByPlaylistId } from 'client'
import { useSelector, useDispatch } from 'react-redux'
import playlistEmpty from 'assets/images/playlist-empty.png'
import { AppLayout } from 'components/templates/AppLayout'
import { CatalogueSkeleton } from 'components/molecules/CatalogueSkeleton'
import { SetPlaylist, SetSongsPlaylist, SetTotalSongsPlaylist } from 'store/actions/playlist'

export function PlayList () {
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { user: { token }, playlist: { playlist } } = useSelector(state => state)
  const { id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getPlaylistById({ token, id }).then(({ data }) => {
      const playlist = { ...data, tracks: [], total: 0 }
      dispatch(SetPlaylist(playlist))
      fetchMoreSong()
      setIsLoading(false)
    })
  }, [token, id, dispatch]) // eslint-disable-line

  const fetchMoreSong = () => {
    const offset = playlist?.tracks?.length || 0
    getSongsByPlaylistId({ token, playlistId: id, offset })
      .then(({ data }) => {
        const { items: tracks, total } = data
        if (tracks.length === 0) {
          setHasMore(false)
          return
        }
        console.log('Canciones')
        dispatch(SetSongsPlaylist(tracks))
        dispatch(SetTotalSongsPlaylist(total))
      }).catch(error => {
        console.error(error)
      })
  }

  return (
    <AppLayout>
      {isLoading
        ? <CatalogueSkeleton />
        : <Catalogue
            imgMain={playlist?.images[0]?.url || playlistEmpty}
            total={playlist?.total}
            title={playlist?.name}
            lists={playlist?.tracks}
            handleViewMore={fetchMoreSong}
            hasMore={hasMore}
          />}

    </AppLayout>
  )
}
