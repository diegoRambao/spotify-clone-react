import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const Img = styled(LazyLoadImage)`
    width:50px;
    height: 50px;
    object-fit: contain;
    border-radius: 4px;
`

export const Title = styled.h3`
    margin: 0;
    font-size: .9rem;
    margin-bottom: 5px;
`

export const SubTitle = styled.h5`
    margin: 0;
    font-weight: 400;
    font-size: .8rem;
`
