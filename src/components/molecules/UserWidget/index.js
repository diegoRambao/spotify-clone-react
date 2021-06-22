import styled from 'styled-components'
import { Avatar } from 'components/atoms/Avatar'
import { firstLeetterToUpperCase } from 'utils'

const Container = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

const Title = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;

    @media only screen and (min-width: 768px) {
        width: 130px;
    }
`

export function UserWidget ({ name = ' ', img }) {
  const firstLetter = firstLeetterToUpperCase(name)
  return (
    <Container>
      {img === null
        ? <Avatar>{firstLetter}</Avatar>
        : <Avatar src={img} alt={name} />}

      <Title>{name}</Title>
    </Container>
  )
}
