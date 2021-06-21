import { Catalogue } from 'components/templates/Catalogue'

const songs = [
  {
    title: 'SRK',
    img: 'https://www.signos.fm/wp-content/uploads/2020/05/Zoe-SKR-1.jpg',
    album: 'Album 1',
    fecha: '2002/02/02',
    duration: '4 min',
    singer: 'Zoé'
  },
  {
    title: 'NO Quise',
    img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/3/d/c/4/806591572957674.jpg',
    album: 'Album 1',
    fecha: '2002/02/02',
    duration: '4 min',
    singer: 'Josean Log'
  }
]

export function PlayList () {
  return (
    <Catalogue
      imgMain='https://www.signos.fm/wp-content/uploads/2020/05/Zoe-SKR-1.jpg'
      title='SKR'
      lists={songs}
    />
  )
}
