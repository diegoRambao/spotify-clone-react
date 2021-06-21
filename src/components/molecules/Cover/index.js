import { Container, Img, Title, SubTitle } from './style'

export function Cover ({ img, title, subtitle }) {
  return (
    <Container>
      <Img src={img} alt={Title} />
      <div>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </div>
    </Container>
  )
}
