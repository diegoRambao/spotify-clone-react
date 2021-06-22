import styled, { keyframes } from 'styled-components'

const skeletonFrames = keyframes`
    100% {
      transform: translateX(100%);
    }
`

const Container = styled.span`
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.13);
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  border-radius: 0;
  border-radius: ${props => props.variant === 'circle' && '50%'};
  border-radius: ${props => props.variant === 'rect' && '2px'};

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
90deg
, transparent, rgba(255, 255, 255, 0.08), transparent);
    animation: ${skeletonFrames} 2s infinite;
    content: '';
  }
`

export function Skeleton ({ variant, width, height }) {
  return <Container width={width} height={height} variant={variant} />
}
