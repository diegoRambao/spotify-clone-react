import { Skeleton, Box } from 'components/atoms'

export function ItemRowSkeleton () {
  return (
    <Box className='d-flex justify-content-between'>
      <Box className='d-flex'>
        <Skeleton variant='rect' width='3rem' height='3rem' />
        <Box ml='.5rem' className='d-flex flex-column'>
          <Skeleton variant='text' width='4.5rem' height='.5rem' />
          <Skeleton variant='text' width='3rem' height='.5rem' />
        </Box>
      </Box>
      <Skeleton variant='text' width='3rem' />
      <Skeleton variant='text' width='3rem' />
    </Box>
  )
}
