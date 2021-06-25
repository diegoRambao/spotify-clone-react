import { Container, Title, Paragraph } from './style'
import { Button } from 'components/atoms'
import { useHistory } from 'react-router-dom'

export function NotFound () {
  const history = useHistory()
  const handleClick = () => {
    history.push('/')
  }
  return (
    <Container>
      <Title>404</Title>
      <Paragraph>Lo sentimos, pero no hemos podido encontrar esto.</Paragraph>
      <Button onClick={handleClick}>Volver</Button>
    </Container>
  )
}
