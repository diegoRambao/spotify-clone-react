import { Link, CardContent, CardImg, CardBody, CardTitle, CardSubtitle } from './style'
import playlistEmpty from 'assets/images/playlist-empty.png'

export function CardPlaylist ({ playlist }) {
  const { id, name, tracks, images } = playlist
  return (
    <Link to={`/playlist/${id}`} className='animate__fadeIn'>
      <CardContent>
        <CardImg
          loading='lazy'
          src={images[0]?.url || playlistEmpty}
          alt={name}
        />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{tracks.total} canciones</CardSubtitle>
        </CardBody>
      </CardContent>
    </Link>
  )
}
