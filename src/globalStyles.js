import { createGlobalStyle } from 'styled-components'
import { colors } from 'consts/styles'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.darkGray};
    color: ${colors.white}
  }

  .container {
    width: 90%;
    max-width: 1920px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      width: 80%;
    }
  }
`
