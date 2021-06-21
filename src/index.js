import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { GlobalStyle } from './globalStyles'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)

reportWebVitals()
