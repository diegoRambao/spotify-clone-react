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
    color: ${colors.white};

    &::-webkit-scrollbar {
      width: 0.9rem;
      max-height: none;
      min-height: 30px;
    }

    &::-webkit-scrollbar-track {
      background: ${colors.black};
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ffffff4d;
    }
  }

  .container {
    width: 90%;
    max-width: 1920px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      width: 80%;
    }
  }

  .animate__fadeIn {
    animation: fadeIn 800ms;
    -webkit-animation: fadeIn 800ms;
    -moz-animation: fadeIn 800ms;
    -o-animation: fadeIn 800ms;
    -ms-animation: fadeIn 800ms;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  .d-flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .align-items-center {
    align-items: center;
  }

  .align-items-end {
    align-items: end ;
  }

  .justify-content-center {
    justify-content: center;
  }

  .justify-content-start {
    justify-content: start;
  }

  .justify-content-end {
    justify-content: end;
  }

  .justify-content-between {
    justify-content: space-between;
  }


`
