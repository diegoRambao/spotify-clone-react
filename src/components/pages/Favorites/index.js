import { Catalogue } from 'components/templates/Catalogue'
import favoriteImg from 'assets/images/favorite.png'
import { AppLayout } from 'components/templates/AppLayout'
import { useFavorite } from 'hooks/useFavorite'

export function Favorites () {
  const { songsFavorites, hasMore, fetchMoreData, total } = useFavorite()

  return (
    <AppLayout>
      <Catalogue
        imgMain={favoriteImg}
        title='Canciones que te gustan'
        lists={songsFavorites}
        hasMore={hasMore}
        handleViewMore={fetchMoreData}
        total={total}
        favorite
      />
    </AppLayout>
  )
}
