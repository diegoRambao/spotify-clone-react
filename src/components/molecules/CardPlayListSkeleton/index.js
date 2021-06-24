import { Skeleton } from 'components/atoms/Skeleton'

export function CardPlaylistSkeleton () {
  return (
    <div>
      <Skeleton variant='rect' height='8rem' />
      <Skeleton variant='text' />
      <Skeleton variant='text' width='6rem' />
    </div>
  )
}
