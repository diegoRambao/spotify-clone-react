import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Catalogue } from 'components/templates/Catalogue'
import { getPlaylistById } from 'client'
import { useSelector } from 'react-redux'
import playlistEmpty from 'assets/images/playlist-empty.png'
import { AppLayout } from 'components/templates/AppLayout'

export function PlayList () {
  const [playlist, setPlaylist] = useState(null)
  const { token } = useSelector(state => state.user)
  const { id } = useParams()

  useEffect(() => {
    getPlaylistById({ token, id }).then(({ data }) => {
      setPlaylist(data)
    })
  }, [token, id])

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
