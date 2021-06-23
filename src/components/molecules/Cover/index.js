import { Container, Img, Title, SubTitle } from './style'
import PropTypes from 'prop-types'

export function Cover ({ img, title, subtitle }) {
  return (
    <Container>
      <Img src={img} alt={title} />
      <div>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </div>
    </Container>
  )
}

Cover.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
