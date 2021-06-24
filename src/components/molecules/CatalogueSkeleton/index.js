import { Box, Skeleton } from 'components/atoms'
import { ItemRowSkeleton } from '../ItemRowSkeleton'

export function CatalogueSkeleton () {
  return (
    <>
      <Box className='d-flex'>
        <Skeleton width='10rem' height='10rem' variant='rect' />
        <Box ml='0.5rem' className='d-flex flex-column justify-content-center'>
          <Skeleton width='7rem' variant='text' />
          <Skeleton width='5rem' height='.5rem' variant='text' />
        </Box>
      </Box>
      <Box mt='2rem'>
        <ItemRowSkeleton />
        <ItemRowSkeleton />
      </Box>
    </>
  )
}
