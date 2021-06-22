import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Catalogue } from 'components/templates/Catalogue'
import { getPlaylistById } from 'client'
import { useSelector, useDispatch } from 'react-redux'
import playlistEmpty from 'assets/images/playlist-empty.png'
import { AppLayout } from 'components/templates/AppLayout'
import { SetPlaylist } from 'store/actions/playlist'

export function PlayList () {
  const dispatch = useDispatch()
  const { user: { token }, playlist: { playlist } } = useSelector(state => state)
  const { id } = useParams()

  useEffect(() => {
    getPlaylistById({ token, id }).then(({ data }) => {
      dispatch(SetPlaylist(data))
    })
  }, [token, id, dispatch])

  return (
    <AppLayout>
      <Catalogue
        imgMain={playlist?.images[0]?.url || playlistEmpty}
        title={playlist?.name}
        lists={playlist?.tracks.items}
      />
    </AppLayout>
  )
}
